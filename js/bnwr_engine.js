;+function(window, undefined){
	'use strict';

	// dependencies
	if(window.utils == undefined) throw new Error('bnwr_utils.js required!');
	if(window.Paged == undefined) throw new Error('bnwr_paged.js required!');

	// engine realization
	window.bnwr_engine = new (new Pish(function bnwr_engine(){

		this.defaultPercent = 0;
		this.defaultFontSize = 100;
		this.defaultFontFamily = 'Georgia, serif';

		this.bookURL = null;
		this.ean = null;
		this.bookData = null;
		this.spine = null;
		this.spineURLS = {};
		this.fontSize = null;
		this.fontFamily = null;
		this.paged = null;
		this.pagedPrefix = 'webpager'; // Be sure to change it in css files too!
		this.pagedCSS = 'css/paged.css';
		this.msg = {
			ready:             'BNWR_ENGINE_READY', // engine is ready
			loaderOn:          'BNWR_ENGINE_LOADER_ON', // loading overlay is shown
			loaderOff:         'BNWR_ENGINE_LOADER_OFF', // loading overlay is hidden
			openBook:          'BNWR_ENGINE_OPEN_BOOK', // open book by ean
			openBookStart:     'BNWR_ENGINE_OPEN_BOOK_START', // book opening started
			openBookEnd:       'BNWR_ENGINE_OPEN_BOOK_END', // book opening ended
			openNext:          'BNWR_ENGINE_OPEN_NEXT_PAGE',
			openPrev:          'BNWR_ENGINE_OPEN_PREV_PAGE',
			openChunk:         'BNWR_ENGINE_OPEN_CHUNK', // open spine by id
			openPage:          'BNWR_ENGINE_OPEN_PAGE', // open page by page number
			openPercent:       'BNWR_ENGINE_OPEN_PERCENT', // open subpage by percent of spine content
			viewportUpdated:   'BNWR_ENGINE_VIEWPORT_UPDATED', // tell new info about pages and current page
			setFontSize:       'BNWR_ENGINE_SET_FONT_SIZE',
			setFontFamily:     'BNWR_ENGINE_SET_FONT_FAMILY'
		};

		utils.events(window, 'message', function(e) {
			if(!e.data) return;
			switch(e.data.msg) {
				case this.msg.openBook:
					if(e.data.bookURL != undefined) this.openBook(e.data);
				break;
				case this.msg.setFontSize:
					if(e.data.percent != undefined && e.data.percent != this.fontSize) {
						this.fontSize = e.data.percent;
						if(this.paged) {
							this.paged.setFontSize(e.data.percent);
							this.paged.updateSpine();
						}
					}
				break;
				case this.msg.setFontFamily:
					if(e.data.family != undefined && e.data.family != this.fontFamily) {
						this.fontFamily = e.data.family;
						if(this.paged) {
							this.paged.setFontFamily(e.data.family);
							this.paged.updateSpine();
						}
					}
				break;
				case this.msg.openNext:
					if(this.paged) this.paged.next();
				break;
				case this.msg.openPrev:
					if(this.paged) this.paged.prev();
				break;
				case this.msg.openPage:
					if(this.paged && e.data.page != undefined && this.bookData.pagemap[e.data.page]) {
						this.paged.setCFI(this.bookData.pagemap[e.data.page].C);
						this.paged.updateSpine();
					}
				break;
				case this.msg.openPercent:
					if(this.paged && e.data.percent != undefined) {
						var pages = this.paged.getPages();
						if(this.paged.getPage(pages) != this.paged.getPage(pages, e.data.percent)) {
							this.paged.setLRP(this.paged.getLRP().id, e.data.percent);
							this.paged.updateSpine();
						}
					}
				break;
				case this.msg.openChunk:
					if(this.paged && e.data.id != undefined) {
						this.paged.setLRP(e.data.id, 0);
						this.paged.updateSpine();
					}
				break;
			}
		}.bind(this));

		utils.customEvents.addGlobListener('pagedupdateviewport', function(e) {
			this.postMessage({
				page: e.details.page,
				pages: this.bookData.pagemap.length,
				msg: this.msg.viewportUpdated
			});
		}.bind(this));

		utils.ready(function() {
			this.postMessage({
				msg: this.msg.ready
			});
		}.bind(this));

	},{

		postMessage: function(msg) {
			parent.postMessage(msg, '*');
		},

		openBook: function(data) {
			if(this.bookURL == data.bookURL) return;
			this.bookURL = data.bookURL;
			this.ean = data.ean;
			this.bookData = null;
			this.spine = null;
			this.spineURLS = {};
			this.percent = null;
			this.postMessage({msg: this.msg.openBookStart});
			utils.ajax({
				'url': this.bookURL+'META-INF/spine.json',
				success: function(e) {
					e.response = utils.parseJson(e.response);
					if(e.response == null) throw new Error('Ajax result can not be parsed');
					this.bookData = e.response;
					// make custom navmap object because of crappy spine.json structure
					var navmap = utils.clone(this.bookData.toc.navmap),
						spines = [];
					navmap.forEach(function(navmapItem) {
						this.bookData.spine.forEach(function(spineItem){
							// navmap can contain anchors like "E":"OEBPS/tmn-nkjvenhanced-new-0002.html#title"
							// let's forget about anchors for now
							// TODO: anchors (?)
							if(spineItem.T === navmapItem.E.split('#')[0]) navmapItem.id = spineItem.X;
						}.bind(this));
					}.bind(this));
					this.bookData.spine.forEach(function(spineItem){
						var pagemap = [];
						this.bookData.pagemap.forEach(function(page, index) {
							page.C.split('!')[0] == spineItem.C && pagemap.push({
								cfi: page.C,
								number: index
							});
						});
						spines.push({
							id: spineItem.X,
							cfi: spineItem.C,
							pagemap: pagemap
						});
						this.spineURLS[spineItem.X] = spineItem.O;
					}.bind(this));
					if(this.paged) this.paged.clean();
					this.paged = new Paged(window.document.body, this.pagedPrefix);
					this.paged.addSpines(spines);
					this.paged.setFontSize(this.fontSize || this.defaultFontSize);
					this.paged.setFontFamily(this.fontFamily || this.defaultFontFamily);
					this.paged.setLRP(spines[0].id, this.defaultPercent); // TODO: LRP (!)
					this.paged.addCSSFile(this.pagedCSS);
					this.paged.setWaitProvider(function(p) {
						this.postMessage({msg: this.msg[p ? 'loaderOn' : 'loaderOff']});
					}.bind(this));
					this.paged.setContentProvider(function(id, callback) {
						utils.ajax({
							'url': this.bookURL + this.spineURLS[id],
							success: function(callback, e) {
								e.response = utils.parseJson(e.response);
								if(e.response == null) throw new Error('Ajax result can not be parsed');
								callback && callback(this.parseChunk(e.response));
							}.bind(this, callback),
							error: function(e) {
								throw new Error('[spine data] Ajax error with status '+e.status);
							}
						});
					}.bind(this));
					this.postMessage({
						msg: this.msg.openBookEnd,
						navmap: navmap,
						booktitle: this.bookData.metadata.title
					});
					this.paged.updateSpine();
				}.bind(this),
				error: function(e) {
					throw new Error('[book data] Ajax error with status '+e.status);
				}
			});
		},

		parseChunk: function(data) {
			var frag = utils.node('fragment'),
				that = this,
				bookBody = data.E.L;

			if(!bookBody) throw new Error("No bookBody found while parsing chunk!");

			if(data.E.I) {
				// add custom CSS for current chunk (multiple stylesheets are possible in .epubj)
				data.E.I.forEach(function(item){
					this.paged.addCSSFile(
						this.bookURL+this.bookData.spine[0].T.substring(0, this.bookData.spine[0].T.lastIndexOf('/'))+'/'+item.H,
						data.E.X
					);
				}.bind(this));
			}
			
			function normalize(node) {
				switch(node.nodeName) {
					case 'IMG':
						node = normalizeImg(node);
						break;
					case 'A':
						node = normalizeLink(node);
						break;
					default:
						break;
				}
				return node;
			}

			function recurseChildren(node) {
				if(node.children) {
					var child;
					for(var i = 0, l = node.children.length; i < l; i++) {
						child = node.children[i];
						child = normalize(child);
						if(child.children) {
							for(var j = 0, ll = child.children.length; j < ll; j++) {
								recurseChildren(child);
							}
						}
					}						
				}
				return node;
			}

			function normalizeImg(img) {
				var attr = img.getAttribute('xsrc');
				if(attr) {
					img.setAttribute('src', that.bookURL + attr);
				}
				return img;
			}

			function normalizeLink(link) {
				var attr = link.getAttribute('href');
				if(attr) {
					// external link? open it in separate browser tab!
					if(/(http|https|ftp|ftps)\:\/\//.test(attr)) {
						link.setAttribute("target", "_blank");
					} else {
						// TODO: internal links (!)
					}
				} else {// anchor link
					// crappy? normalize!
					attr = link.getAttribute('id');
					if(attr && !link.getAttribute('name')) {
						link.setAttribute('name', attr);
					}
				}
				return link;
			}

			(function processNode(parent, node) {
				var elem,
					dumb,
					attr;
				if(node.B) {
					if(parent) {

						// Strange behaviour in epubj files
						// We should remove text nodes with odd cfi indexes
						// Because according to CFI spec nodes indexes can be only even
						if(node.C.split('/').pop() % 2 === 1) return;

						if(node.B != "#text") {
							// ignore SVG tags but extract children from them
							if(node.B.toLowerCase() == "svg") {
								if(node.D) node.D.forEach(processNode.bind(null, parent));
								return;
							}

							elem = utils.node(node.B);
							if(node.A) {
								node.A.forEach(function(item){
									elem.setAttribute(item.T, item.d);
								});
							}

							if(node.J) {
								elem.innerHTML = node.J;

								// HTML-nodes are sometimes hardcoded within Strings ...
								// Moreover they must be nomalized.
								elem = recurseChildren(elem);
							}

							switch(node.B.toLowerCase()) {
								case 'image':
								{
									// 'IMAGE' tag is deprecated a long time ago and all modern browsers just ignore it
									if(elem.attributes) {
										dumb = document.createElement("IMG");
										for (var i = 0, l = elem.attributes.length; i < l; i++) {
											attr = elem.attributes[i];
											if(attr.nodeName != 'xlink:href') {
												dumb.setAttribute(attr.nodeName, attr.value);	
											} else {
												dumb.setAttribute('src', that.bookURL + attr.value);
											}
										}	
										elem = utils.node('fragment');
										elem.appendChild(dumb);
										dumb = null;
									}
									break;
								}
								case 'a':
								{
									// TODO: (?)
									break;
								}
								default:
									break;
							}

						} else {
							elem = document.createTextNode(node.J);
						}
						
						parent.appendChild(elem);
					} else {
						elem = document.createElement(node.B);
						frag.appendChild(elem);
					}
				}

				if(node.D) {
					node.D.forEach(processNode.bind(null, elem));
				}
			})(null, bookBody[0]); // in assumption that there can be only one bookbody node in every content.json file

			// get rid of bookbody elem
			
			if(frag.firstChild.tagName == 'BOOKBODY') {
				while(frag.firstChild.firstChild) frag.appendChild(frag.firstChild.firstChild);
				frag.removeChild(frag.firstChild);
			}

			return frag;
		}

	}));

}((function(){return this})());
