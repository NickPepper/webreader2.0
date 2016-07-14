;+function(window, undefined){
	'use strict';

	// dependencies
	if(window.utils == undefined) throw new Error('bnwr_utils.js required!');

	// wrapper realization
	window.bnwr_wrapper = new Pish(function bnwr_engine(){

		// options
		
		this.libURL = './backend/epubj2/';
		this.fontSizeArr = [
			{
				value: 60,
				elem: null 
			},{
				value: 70,
				elem: null 
			},{
				value: 80,
				elem: null 
			},{
				value: 100,
				elem: null 
			},{
				value: 125,
				elem: null 
			},{
				value: 150,
				elem: null 
			},{
				value: 170,
				elem: null 
			},{
				value: 200,
				elem: null
			}
		];
		this.fontSizeInitial = 2;
		this.fontFamilyArr = [
			{
				value: false, // Must be false to drop to defaults
				name: 'Publisher default',
				elem: null
			},{
				value: 'Georgia, serif',
				name: 'Georgia',
				elem: null
			},{
				value: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
				name: 'Palatino Linotype',
				elem: null
			},{
				value: '"Times New Roman", Times, serif',
				name: 'Times New Roman',
				elem: null
			},{
				value: 'Arial, Helvetica, sans-serif',
				name: 'Arial',
				elem: null
			},{
				value: '"Arial Black", Gadget, sans-serif',
				name: 'Arial Black',
				elem: null
			},{
				value: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
				name: 'Lucida Sans Unicode',
				elem: null
			},{
				value: 'Tahoma, Geneva, sans-serif',
				name: 'Tahoma',
				elem: null
			},{
				value: '"Trebuchet MS", Helvetica, sans-serif',
				name: 'Trebuchet MS',
				elem: null
			},{
				value: '"Courier New", Courier, monospace',
				name: 'Courier New',
				elem: null
			}
		];
		this.fontFamilyInitial = 4;
		
		// ui

		this.msg = {
			ready:             'BNWR_ENGINE_READY',
			setFontSize:       'BNWR_ENGINE_SET_FONT_SIZE',
			setFontFamily:     'BNWR_ENGINE_SET_FONT_FAMILY',
			openNext:          'BNWR_ENGINE_OPEN_NEXT_PAGE',
			openPrev:          'BNWR_ENGINE_OPEN_PREV_PAGE',
			openPercent:       'BNWR_ENGINE_OPEN_PERCENT',
			openBook:          'BNWR_ENGINE_OPEN_BOOK',
			openBookEnd:       'BNWR_ENGINE_OPEN_BOOK_END',
			openBookStart:     'BNWR_ENGINE_OPEN_BOOK_START',
			openPage:          'BNWR_ENGINE_OPEN_PAGE',
			openChunk:         'BNWR_ENGINE_OPEN_CHUNK',
			viewportUpdated:   'BNWR_ENGINE_VIEWPORT_UPDATED',
			loaderOn:          'BNWR_ENGINE_LOADER_ON',
			loaderOff:         'BNWR_ENGINE_LOADER_OFF'
		};
		this.fontSizeCurrent = null;
		this.fontFamilyCurrent = null;
		this.toc = document.getElementById('bnwr_toclist');
		this.tocList = null;
		this.fontSizeList = document.getElementById('bnwr_fontSize');
		this.fontFamilyList = document.getElementById('bnwr_fontFamily');
		this.bookTitle = document.getElementById('book_title');
		this.engineFrame = document.getElementById('content_frame');
		this.spinner = document.getElementById('spinner');
		this.showSpinner(true);
		utils.events(document.getElementById('left'), 'click', this.postMessage.bind(this,{msg: this.msg.openPrev}));
		utils.events(document.getElementById('right'), 'click', this.postMessage.bind(this,{msg: this.msg.openNext}));
		this.slider = new this.slider(
			document.getElementById('slider'),
			document.getElementById('page'),
			document.getElementById('pages')
		);
		utils.customEvents.addGlobListener('slider', function(e) {
			this.postMessage({
				page: e.details.page,
				msg: this.msg.openPage
			});
		}.bind(this));
		this.populateFontSize();
		this.populateFontFamily();
		this.manageFullscreen(utils.classes.find('bnwr-btn-fs')[0]);
		this.manageSwipes(document.getElementById('swipe_overlay'));

		// events

		utils.events(window, 'keydown', function(e) {
			switch(e.which) {
				case 37:case 38: //left, up
					this.postMessage({msg: this.msg.openPrev});
				break;
				case 39:case 40:// right, down
					this.postMessage({msg: this.msg.openNext});
				break;
			}
		}.bind(this));
		utils.events(window, 'message', function(e) {
			if(!e.data) return;
			switch(e.data.msg) {
				case this.msg.viewportUpdated:
					this.slider.set(e.data.page, e.data.pages, false);
				break;
				case this.msg.openBookEnd:
					this.setBookTitle(e.data.booktitle);
					this.populateToCList(e.data.navmap);
					this.showSpinner(false);
				break;
				case this.msg.openBookStart:	
					this.showSpinner(true);
					this.setBookTitle('');
					this.clearToC();
				break;
				case this.msg.loaderOn:
					this.showSpinner(true);
				break;
				case this.msg.loaderOff:
					this.showSpinner(false);
				break;
				case this.msg.ready:
					this.ready();
				break;
			}
		}.bind(this));

	},{

		ready: function() {
			this.setFontSize(this.fontSizeInitial);
			this.setFontFamily(this.fontFamilyInitial);
			location.hash != '' && this.openBook(location.hash.substr(1));
		},

		manageSwipes: function(zone) {
			if(zone) {
				utils.events(zone, 'touchstart touchmove' ,function(e) {e.preventDefault();})
				utils.customEvents.addListener(zone, 'swipe', function(e) {
					if(Math.abs(e.details.y)<500 && Math.abs(e.details.x)>1000) {
						this.postMessage({msg: e.details.x>0 ? this.msg.openPrev : this.msg.openNext});
					}
				}.bind(this));
			}
		},

		manageFullscreen: function(button) {
			if(document.fullscreenApiEnabled && button) {
				var handler = function(button) {
					utils.classes[document.fullscreenEnabled ? 'add' : 'remove'](button, 'selected');
				}.bind(this, button);
				utils.events(document, 'fullscreenchange', handler);
				button.onclick = function() {
					document.fullscreenEnabled ? document.exitFullscreen() : document.body.requestFullscreen();
				}
				handler();
			} else if(button) {
				button.style.display = 'none';
			}
		},

		postMessage: function(msg) {
			this.engineFrame.contentWindow && this.engineFrame.contentWindow.postMessage(msg, '*');
		},

		setBookTitle: function(title) {
			this.bookTitle.innerHTML = title;
		},

		openBook: function(ean) {
			this.postMessage({
				msg: this.msg.openBook,
				ean: ean,
				bookURL: this.libURL+ean+'/'
			});
		},

		setFontSize: function(index) {
			if(index === this.fontSizeCurrent) return;
			this.fontSizeArr.forEach(function(size, i) {
				utils.classes[i === index ? 'add' : 'remove'](size.elem, 'bn-selected');
			});
			this.postMessage({msg: this.msg.setFontSize, percent: this.fontSizeArr[index].value});
			this.fontSizeCurrent = index;
		},

		setFontFamily: function(index) {
			if(index === this.fontFamilyCurrent) return;
			this.fontFamilyArr.forEach(function(family, i) {
				utils.classes[i === index ? 'add' : 'remove'](family.elem, 'bn-selected');
			});
			this.postMessage({msg: this.msg.setFontFamily, family: this.fontFamilyArr[index].value});
			this.fontFamilyCurrent = index;
		},

		showSpinner: function(show) {
			this.spinner.style.display = show ? '' : 'none';
		},

		slider: new Pish(function Slider(slider, page, pages) {
				this.node = slider;
				this.page = 0;
				this.pages = 0;
				this.nodePage = page;
				this.nodePages = pages;
				this.interact = false;
				this.offset = null;
				this.x = null;
				this.set(0,1);
				utils.events(this.node, 'mousedown touchstart', this.handler.bind(this));
				utils.events(window, 'touchmove mousemove touchend mouseup', this.handler.bind(this));
			}, {

				set: function(page, pages, event) {
					this.node.style.paddingLeft = (page*100/(pages-1||1))+'%';
					this.page = page;
					this.pages = pages;
					this.nodePage.textContent = page+1;
					this.nodePages.textContent = pages;
					event && utils.customEvents.dispatchGlobEvent('slider', {page: page, pages: pages});
				},

				handler: function(e) {
					switch(e.type) {
						case 'touchstart':case 'mousedown':
							var parsed = utils.eventsParse(e);
							if(!this.interact && parsed.x.length==1 && (e ? e.target : window.event.srcElement)==this.node) {
								this.x = parsed.x[0];
								this.interact = true;
								this.offset = parseInt(this.node.style.paddingLeft, 10) || 0;
							}
						break;
						case 'touchmove':case 'mousemove':
							if(this.interact) {
								var parsed = utils.eventsParse(e),
									rect = this.node.getBoundingClientRect(),
									percent = Math.max(0, Math.min(100, this.offset + (parsed.x[0]-this.x) * 100 / this.node.offsetWidth));
								this.set(Math.round((this.pages-1)*percent/100), this.pages, false);
							}
						break;
						case 'touchend':case 'mouseup':
							if(this.interact) {
								this.interact = false;
								this.set(this.page, this.pages, true);
							}
						break;
					}
				}
		}),

		populateToCList: function(navmap) {
			this.tocList = utils.node('ol');
			navmap.forEach(function(item, li) {
				li = utils.node('li', {
					text: item.label,
					attr: {
						'class': item.E.indexOf('isaSample') >= 0 ? 'bn-option bnwr-sample' : 'bn-option'
					}
				});
				this.tocList.appendChild(li);
				utils.events(li, 'click', this.postMessage.bind(this, {
					msg: this.msg.openChunk,
					id: item.id
				}));
			}.bind(this));
			this.toc.appendChild(this.tocList);
		},

		populateFontSize: function() {
			var frag = utils.node('fragment');
			this.fontSizeArr.forEach(function(size, index) {
				size.elem = utils.node('li', {
					text: 'A',
					attr: {'class':'bn-option-fontSize'},
					css: {fontSize: size.value+'%'}
				});
				size.elem.onclick = this.setFontSize.bind(this, index);
				frag.appendChild(size.elem);
			}.bind(this));
			this.fontSizeList.appendChild(frag);
		},

		populateFontFamily: function() {
			var frag = utils.node('fragment');
			this.fontFamilyArr.forEach(function(family, index) {
				family.elem = utils.node('li', {
					text: family.name,
					attr: {'class':'bn-option'},
					css: family.value ? {fontFamily: family.value} : {}
				});
				family.elem.onclick = this.setFontFamily.bind(this, index);
				frag.appendChild(family.elem);
			}.bind(this));
			this.fontFamilyList.appendChild(frag);
		},

		clearToC: function() {
			try{this.toc.removeChild(this.tocList);}catch(e){}
		}

	});

	utils.ready(function() {
		window.bnwr_wrapper = new window.bnwr_wrapper();
	});

}((function(){return this})());
