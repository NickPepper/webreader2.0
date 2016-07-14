;+function(window, undefined){
	'use strict';

	window.Paged = new Pish(function Paged(container, prefix, minWidth, minHeight, gap, preload) {

		this.spinesByIndex = [];
		this.spinesByCFI = {};
		this.spinesById = {};
		this.cssFiles = [];

		// Options

		if(container != undefined) {this.container = container;} else {throw new Error('Paged container is undefined!');}
		if(prefix != undefined) {this.prefix = prefix;}
		if(gap != undefined) {this.gap = gap;}
		if(preload != undefined) {this.preload = preload;}

		// Layout

		this.container.appendChild(this.inner = utils.node('div', {
			attr: {
				'class': this.prefix+'-inner'
			},
			css: {
				'border': this.gap+'px solid transparent',
			}
		}));

		// Events

		this.resizeLayoutBinded = this.resizeLayout.bind(this);
		utils.events(window, 'resize', this.resizeLayoutBinded);

		// Api

		return this.api({
			setFontSize: this.setFontSize,
			setFontFamily: this.setFontFamily,
			setCFI: this.setCFI,
			next: this.next,
			prev: this.prev,
			addCSSFile: this.addCSSFile,
			addSpines: this.addSpines,
			clean: this.clean,
			setLRP: this.setLRP,
			getLRP: this.getLRP,
			getPages: this.getPages,
			getPage: this.getPage,
			updateSpine: this.updateSpine,
			setContentProvider: function(f) {this.contentProvider = f;},
			setWaitProvider: function(f) {this.waitProvider = f;},
		});

	},{

		// Options

		prefix: 'paged',
		fontSize: 100,
		fontFamily: 'serif',
		gap: 30, // Gap size
		preload: 3, // Pages to preload before and after current
		minWidth: 500,

		// Vars
		
		container: null,
		inner: null,
		spinesByIndex: null,
		spinesById: null,
		spinesByCFI: null,
		waitProvider: null,
		contentProvider: null,
		wait: 0,
		cssFiles: null,
		id: null,
		cfi: null,
		percent: 0,
		page: null,
		spine: null,
		resizeLayoutTimeout: null,

		// Global (copied to api)

		setCFI: function(cfi) {
			this.cfi = null;
			cfi = this.parseCFI(cfi);
			if(cfi) {
				this.cfi = cfi;
				if(this.id != this.cfi.spine) this.setLRP(this.cfi.spine, 0);
			}
		},

		setFontSize: function(size) {
			this.fontSize = size;
		},

		setFontFamily: function(family) {
			this.fontFamily = family;
		},

		addCSSFile: function(src, id) {
			if(id) {
				if(this.spinesById[id] != null) {
					this.spinesById[id].cssFiles.push(src);
					this.spinesById[id].cssFiles = this.spinesById[id].cssFiles.unique();
				}
			} else {
				this.cssFiles.push(src);
				this.cssFiles = this.cssFiles.unique();
			}
		},

		clean: function() {
			this.cssFiles = [];
			this.spinesByIndex = [];
			this.spinesById = {};
			this.spinesByCFI = {};
			this.contentProvider = null;
			this.waitProvider = null;
			this.wait = 0;
			this.inner.parentNode && this.inner.parentNode.removeChild(this.inner);
			utils.events(window, 'resize', this.resizeLayoutBinded, true);
			utils.customEvents.dispatchGlobEvent('pagedupdateviewport', {
				instance: this,
				pages: 0,
				page: 0,
				percent: 0
			});
		},

		addSpines: function(spines) {
			spines.forEach(function(data, index) {
				var spine = {
					id: data.id,
					index: index,
					pagemap: data.pagemap,
					cssFiles: [],
					frame: null,
					width: null,
					height: null,
					style: null,
					state: {
						loaded: false,
						loading: false,
						constructed: false,
						shown: false
					},
					data: null,
					window: null,
					document: null
				};
				this.spinesByCFI[data.cfi] = spine;
				this.spinesById[data.id] = spine;
				this.spinesByIndex.push(spine);
			}.bind(this));
		},

		getPages: function() {
			if(this.spinesById[this.id] && this.spinesById[this.id].document) {
				var bodyScrollWidth = this.spinesById[this.id].document.body.parentNode.scrollWidth,
					/* body.parentNode.scrollWidth and body.scrollWidth are different in Gecco! */
					bodyOffsetLeftWebkitFix = Math.abs(parseInt(this.spinesById[this.id].document.body.style.left,10)|0);
					/* body.offsetLeft is always equally to zero (because html element is not relative), so we need to use style.left */
				return Math.round((bodyScrollWidth + bodyOffsetLeftWebkitFix + this.gap) / (this.inner.offsetWidth - this.gap));
			} else {
				return 1;
			}
		},

		getPage: function(pages, percent) {
			if(pages == undefined) {pages = this.getPages();}
			return Math.min(pages - 1, Math.floor((percent != undefined ? percent : this.percent) / (100 / pages)));
		},

		getLRP: function() {
			return {
				id: this.id,
				percent: this.percent
			};
		},

		setLRP: function(id, percent) {
			if(id != undefined) {this.id = id+'';}
			if(percent != undefined) {this.percent = percent*1;}
		},

		next: function() {
			var pages = this.getPages(),
				page = this.getPage(pages);
			if(page+1 >= pages) {
				if(this.spinesByIndex[this.spinesById[this.id].index+1]) {
					this.setLRP(this.spinesByIndex[this.spinesById[this.id].index+1].id, 0);
					this.updateSpine();
				}
			} else {
				this.setLRP(this.id, this.getPercent(page+1, pages));
				this.updateSpine();
			}
		},

		prev: function() {
			var pages = this.getPages(),
				page = this.getPage(pages);
			if(page == 0) {
				if(this.spinesByIndex[this.spinesById[this.id].index-1]) {
					this.setLRP(this.spinesByIndex[this.spinesById[this.id].index-1].id, 100);
					this.updateSpine();
				}
			} else {
				this.setLRP(this.id, this.getPercent(page-1, pages));
				this.updateSpine();
			}
		},

		updateSpine: function() {
			if(!this.spinesById[this.id]) {
				console.log('Unable to load id: '+this.id);
			} else {
				if(this.spinesById[this.id].state.constructed) {
					this.updateViewport();
				} else if(this.spinesById[this.id].state.loaded) {
					this.setWait(1);
					this.renderSpine(this.id, function() {
						this.updateViewport();
						this.setWait(0);
					}.bind(this));
				} else if(this.spinesById[this.id].state.loading) {
					this.setWait(1);
					console.log('Spine is preloading.. wait please..');
				} else if(this.contentProvider){
					this.setWait(1);
					this.contentProvider(this.id, function(spine, data) {
						spine.data = data;
						spine.state.loaded = true;
						spine.state.loading = false;
						if(this.id == spine.id) {this.updateSpine();}
						this.setWait(0);
					}.bind(this, this.spinesById[this.id]));
					this.spinesById[this.id].state.loading = true;
				} else {
					console.log('Unable to request content. No contentProvider specified!');
				}
			}
		},
		
		// Private
		
		getOffsetFromCFI: function(cfi, spine) {
			// Find node and textnode
			var node = spine.document.body,
				rectnode = null,
				textnode = null,
				range = null,
				trashhold = 5; // fix for zero-width ranges
			cfi.elems.forEach(function(id, index) {
				// First element pointed to package container
				// In our case it is our body
				if(index === 0) return;
				// If id is even - we must find a childnode
				if(id%2 === 0) {
					if(node.childNodes[id/2-1].nodeType === 1) node = node.childNodes[id/2-1];
					if(!node) return null;
				} else { // If id is odd - we must find a textnode
					Array.prototype.splice.call(node.childNodes).forEach(function(node, index) {
						if(node.nodeType === 3 && index === Math.floor(id/2)) textnode = node;
					});
				}
			});
			if(!node) return null;
			// Get coordinate of node or textnode with offset
			if(textnode && cfi.offset && cfi.offset>trashhold) {
				if(document.createRange) {
					range = document.createRange();
					range.setStart(textnode, cfi.offset-trashhold);
					range.setEnd(textnode, cfi.offset);
					rectnode = range;
				} else if(node.createTextRange && node.createTextRange() != undefined) {
					// need to be tested in IE<9
					range = node.createTextRange();
					range.move('character', cfi.offset);
					rectnode = range;
				}
				rectnode = node;
			} else {
				rectnode = node;
			}
			return rectnode.getBoundingClientRect().left;
		},

		parseCFI: function(cfi) {
			// Drop cfi
			var parsed = {
				spine: null,
				elems: [],
				offset: 0
			};
			// Parse CFI string
			var reg1 = new RegExp(/^(\/\d+\/\d+(?:\[(?:(?:[^\^]\^)\]|[^\]])+?\])?)\!?(?:((?:\/\d+(?:\[(?:(?:[^\^]\^)\]|[^\]])+?\])?)*)?(?:\:(\d+))?)?$/i),
				reg2 = new RegExp(/\/(\d+)(?:\[(?:(?:[^\^]\^)\]|[^\]])+?\])?/ig),
				match = null;
			cfi = cfi.match(reg1); 
			if(cfi == null) return false;
			if(cfi[1]) parsed.spine = cfi[1];
			if(cfi[2]) while (match = reg2.exec(cfi[2])) match[1] && parsed.elems.push(match[1]*1);
			if(cfi[3]) parsed.offset = cfi[3]*1;
			// Get spine id by CFI
			if(this.spinesByCFI[parsed.spine] === undefined) return false;
			parsed.spine = this.spinesByCFI[parsed.spine].id;
			return parsed;
		},

		processComplexContent: function(body, width, height) {
			function avoidBreak(elem) {
				var style = window.getComputedStyle ? window.getComputedStyle(elem, null) : elem.currentStyle;
				if(style.textAlign == 'center') elem.style.marginLeft = elem.style.marginRight = 'auto';
				elem.style.display = 'block'; /* Fix for firefox and IE 10-11  */
				elem.style.WebkitColumnBreakInside = 'avoid'; /* Chrome, Safari, Opera */
				elem.style.MozColumnBreakInside = 'avoid'; /* Current Firefox */
				elem.style.columnBreakInside = 'avoid';
				elem.style.breakInside = 'avoid'; /* IE 10+ */
				elem.style.breakInside = 'avoid-column';
			}

			// Page break before or after
			
			/*
			Array.prototype.slice.call(elems).forEach(function(elem) {
				style = window.getComputedStyle ? window.getComputedStyle(elem, null) : elem.currentStyle;
				if(~['page','column','left','right','always'].indexOf(style.pageBreakBefore)) {

				}
				if(~['page','column','left','right','always'].indexOf(style.pageBreakAfter)) {
					
				}
			});*/
			
			// Page break avoid find
			
			Array.prototype.slice.call(body.getElementsByTagName('*')).forEach(function(elem, images, sum, i) {
				var style = window.getComputedStyle ? window.getComputedStyle(elem, null) : elem.currentStyle;
				if(style.pageBreakInside == 'avoid') { // avoid breaking content inside
					images = elem.getElementsByTagName('img');
					i = images.length;
					while(i--) images[i].pagedAvoid = true;
				}
			});

			// Images

			Array.prototype.slice.call(body.getElementsByTagName('img')).forEach(function(img) {
				if(!img.pagedFix) {
					img.pagedFix = utils.node('div', {css:{height:'0',width:'0'}});
					img.nextSibling ? img.parentNode.insertBefore(img.pagedFix, img.nextSibling) : img.parentNode.appendChild(img.pagedFix);
				}
				img.style.width = 'auto';
				img.style.height = 'auto';
				img.style.maxWidth = width+'px';
				img.style.maxHeight = height+'px';
				avoidBreak(img);
				if(!img.pagedAvoid) {	
					var r1 = img.getBoundingClientRect(),
						r2 = img.pagedFix.getBoundingClientRect();
					if(Math.abs(r1.top - r2.top) < img.offsetHeight ) { 
						img.style.maxHeight = Math.floor(img.offsetHeight - r2.top) + 'px';
					}
				}
			});

			// Page break avoid
			
			Array.prototype.slice.call(body.getElementsByTagName('*')).forEach(function(elem, images, sum, i) {
				var style = window.getComputedStyle ? window.getComputedStyle(elem, null) : elem.currentStyle;
				if(style.pageBreakInside == 'avoid') { // avoid breaking content inside
					elem.style.height = 'auto';
					if(elem.offsetHeight > height) { // problem: content longer than page
						images = elem.getElementsByTagName('img');
						i = images.length;
						sum = 0;
						while(i--) sum+=images[i].offsetHeight;
						if(elem.offsetHeight - sum <= height) { // we have a cure! lets scale images
							sum = Math.floor(((height-(elem.offsetHeight-sum)) / sum)*1000000)/1000000;
							i = images.length;
							while(i--) images[i].style.maxHeight = Math.floor(images[i].offsetHeight*sum)+'px';
							avoidBreak(elem);
							elem.style.height = height+'px';
						} // else leave it as it is
					} else {
						elem.style.height = height+'px';
					}
				}
			});
		},

		setWait: function(on) {
			this.wait += on ? 1 : -1;
			if(this.wait<0) this.wait = 0;
			this.waitProvider && this.waitProvider(this.wait != 0);
		},

		getPercent: function(page, pages) {
			if(pages == undefined) {pages = this.getPages();}
			if(pages == page+1) {return 100;}
			if(page == 0) {return 0;}
			return Math.max(0, Math.min(100, (100 / pages) * page + (100 / pages) / 2));
		},

		renderSpine: function(id, callback) {
			var spine = this.spinesById[id];
			if(spine.state.constructed) {
				callback && callback();
				return;
			}
			spine.state.constructed = true;
			spine.frame = utils.node('iframe', {
				css: {visibility:'hidden'},
				attr:{'class':this.prefix+'-frame'}
			});
			spine.frame.onload = function(spine, callback) {
				spine.frame.onload = '';
				spine.window = spine.frame.contentWindow;
				spine.document = spine.frame.contentDocument;
				var cssFiles = this.cssFiles.concat(spine.cssFiles).unique();
				cssFiles.forEach(function(filename, index){
					cssFiles[index] = "<link rel='stylesheet' href='"+filename+"'>";
				});
				spine.document.write(utils.ml(function(){/*
					<!DOCTYPE html>
					<html>
						<head>
							<meta name='charset' content='utf-8'>
							<style id='styling'>
							</style>
							<style>
								html, body {
									margin: 0;
									height: 100% !important;
								}
								body {
									-webkit-column-gap: {gap}px;
									-moz-column-gap: {gap}px;
									column-gap: {gap}px;
									-webkit-column-fill: auto !important;
									-moz-column-fill: auto !important;
									column-fill: auto !important;
									overflow: hidden;
									position: relative
								}
							</style>
							{cssFiles}
						</head>
						<body style='margin:0;padding:0;'></body>
					</html>
				*/}, {
					gap: this.gap,
					cssFiles: cssFiles.join('')
				}));
				spine.document.close();
				spine.style = spine.document.getElementById('styling');
				spine.document.body.innerHTML = ''; // It is important for CFI to remve all child nodes
				spine.data.substring ? (spine.document.body.innerHTML = spine.data) : spine.document.body.appendChild(spine.data);
				spine.window.onload = function(spine) {
					spine.shown && this.updateViewport();
				}.bind(this, spine);
				spine.document.body.onresize = function(spine) {
					spine.shown && this.updateViewport();
				}.bind(this, spine);
				spine.frame.style.visibility = 'hidden';
				spine.frame.style.zIndex = 0;
				callback && callback();
			}.bind(this, spine, callback);
			this.inner.appendChild(spine.frame);
		},

		resizeLayout: function() {
			this.resizeLayoutTimeout && clearTimeout(this.resizeLayoutTimeout);
			this.resizeLayoutTimeout = setTimeout(function(id, percent){
				if(this.id == id && this.percent == percent) {
					this.updateSpine();
				}
			}.bind(this, this.id, this.percent), 100);
		},
		
		updateViewport: function() {
			this.spinesByIndex.forEach(function(spine) {
				if(!spine.state.loaded) return;
				if(spine.id == this.id) {

					var isSingleMode = screen.width < screen.height ? true : ((this.inner.offsetWidth - this.gap*3) * 0.5) < this.minWidth,
						onePageWidth = isSingleMode ? this.inner.offsetWidth - this.gap*2 : (this.inner.offsetWidth - this.gap*3) * 0.5,
						needProcessComplexContent = false;

					// show frame if it is not shown
					if(spine.state.shown === false) {
						spine.frame.style.visibility = 'visible';
						spine.frame.style.zIndex = 1;
						spine.state.shown = true;
					}

					// adjust frame size if needed
					if(spine.state.width !== this.inner.offsetWidth || spine.state.height !== this.inner.offsetHeight) {
						spine.frame.style.height = this.inner.offsetHeight - this.gap * 2 +'px';
						spine.frame.style.width = this.inner.offsetWidth - this.gap * 2 +'px';
						spine.document.body.style.WebkitColumnWidth = onePageWidth+'px';
						spine.document.body.style.MozColumnWidth = onePageWidth+'px';
						spine.document.body.style.columnWidth = onePageWidth+'px';
						spine.state.width = this.inner.offsetWidth;
						spine.state.height = this.inner.offsetHeight;
						needProcessComplexContent = true;
					}

					// change frame font if needed
					if(spine.state.fontFamily !== this.fontFamily) {
						spine.style.textContent = this.fontFamily ? '* {font-family:'+this.fontFamily+' !important;}' : '';
						spine.state.fontFamily = this.fontFamily;
						needProcessComplexContent = true;
					}

					// change frame font size if needed
					if(spine.state.fontSize !== this.fontSize) {
						spine.document.body.style.fontSize = this.fontSize+'%';
						spine.state.fontSize = this.fontSize;
						needProcessComplexContent = true;
					}

					// adjust content if needed
					if(needProcessComplexContent) {
						this.processComplexContent(
							spine.document.body,
							onePageWidth,
							this.inner.offsetHeight - this.gap * 2
						);
					}
					
					// preload sibling spines
					if(spine.state.spinesPreloaded !== true) {
						this.preloadSpines();
						spine.state.spinesPreloaded = true;
					}
					
					// this is need to reset body scrollWidth in case of it's width reduction
					spine.document.body.style.left = 0;
					var pages = this.getPages(),
						offset = null,
						page = null;

					// change percent if cfi was given
					if(this.cfi) {
						offset = this.getOffsetFromCFI(this.cfi, spine);
						if(offset !== null) this.percent = this.getPercent(Math.floor(offset / (this.inner.offsetWidth - this.gap)), pages);
						this.cfi = null;
					}

					// set offset according to current opened page
					spine.document.body.style.left = -(this.inner.offsetWidth - this.gap) * this.getPage(pages) + 'px';

					// find nearest cfi page
					// TODO: use cached data if page was't resized
					var mpage = null,
						cfi = null,
						cfioffset = null;
					spine.pagemap.forEach(function(page) {
						cfi = this.parseCFI(page.cfi);
						if(cfi) {
							cfioffset = this.getOffsetFromCFI(cfi, spine);
							if(cfioffset !== null) {
								page.diff = Math.abs(cfioffset);
								if(!mpage || mpage.diff > page.diff) mpage = page;
							}
						}
					}.bind(this));

					// fire pagedupdateviewport event if needed
					if(mpage.number != this.page || spine.id != this.spine) {
						this.page = mpage.number;
						this.spine = spine.id;
						utils.customEvents.dispatchGlobEvent('pagedupdateviewport', {
							instance: this,
							page: this.page,
							spine: this.spine
						});
					}
				} else if(spine.frame && spine.state.shown){
					spine.state.shown = false;
					spine.frame.style.visibility = 'hidden';
					spine.frame.style.zIndex = 0;
				}
			}.bind(this));
		},

		preloadSpines: function() {
			var i = 1,
				spine = null,
				index = this.spinesById[this.id];
			if(!index || !index.state.shown || index.index == undefined) return;
			index = index.index;
			for(;i<=this.preload;i++) {
				spine = this.spinesByIndex[index+i];
				spine && !spine.state.loaded && !spine.state.loading && !spine.state.constructed && this.preloadSpine(spine);
				spine = this.spinesByIndex[index-i];
				spine && !spine.state.loaded && !spine.state.loading && !spine.state.constructed && this.preloadSpine(spine);
			}
		},

		preloadSpine: function(spine) {
			console.log('Preload spine: '+spine.id)
			this.contentProvider(spine.id, function(spine, data) {
				spine.data = data;
				spine.state.loaded = true;
				spine.state.loading = false;
				if(this.id == spine.id) {
					this.updateSpine();
					this.setWait(0);
					console.log('Spine preloaded and redy to be opened: '+spine.id)
				} else {
					console.log('Spine preloaded: '+spine.id)
				}
			}.bind(this, spine));
			spine.state.loading = true;
		}

	});

}((function(){return this})());
