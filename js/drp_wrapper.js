(function(win, doc) {
	"use strict";

	// dependencies
	if(window.utils == undefined) {
		throw new Error("Requred file bnwr_utils.js is absent!");
	}

	// core
	win.drp_wrapper = (win.drp_wrapper || (function() {

		var resize_timeout,
		busy = false,
		article_open = false,
		orientation = null,

		init = function() {
			// check & link all needed DOM elements
			data.container = doc.getElementById("viewport");
			if(!data.container) throw new Error('No data.container!');
			
			data.pages_counter = doc.getElementById("pages_counter");
			if(!data.pages_counter) throw new Error('No data.pages_counter!');
			
			data.articleview_menu = doc.getElementById("articleview_menu");
			if(!data.articleview_menu) throw new Error('No data.articleview_menu!');
			
			data.font_size_list = doc.getElementById('av_fontSize');
			if(!data.font_size_list) throw new Error('No data.font_size_list!');
			
			data.font_family_list = doc.getElementById('av_fontFamily');
			if(!data.font_family_list) throw new Error('No data.font_family_list!');
			
			data.fullscreen_btn = doc.getElementById("btn_fs");
			if(!data.fullscreen_btn) throw new Error('No data.fullscreen_btn!');
			
			data.text_settings_btn = doc.getElementById("text_settings_btn");
			if(!data.text_settings_btn) throw new Error('No data.text_settings_btn!');

			data.av_styling_elem = doc.getElementById("av_styling");
			if(!data.av_styling_elem) throw new Error('No data.av_styling_elem!');


			// touch stuff
			data.isTouch = 'ontouchstart' in win;
			if(data.isTouch) {
				data.pointerEvents = {
					down: 'touchstart',
					move: 'touchmove',
					up:   'touchend',
					over: 'touchstart',
					out:  'touchend',
					press:'touchstart'
				};
				utils.customEvents.addListener(doc.body, 'swipe', data.swipe_handler);
			} else {
				data.pointerEvents = {
					down: 'mousedown',
					move: 'mousemove',
					up:   'mousemove',
					over: 'mousemove',
					out:  'mouseout',
					press:'click'
				};
			}
			win.addEventListener("keydown", this.keysHandler.bind(this));


			// populate Text-Settings tooltip
			publ.populateFontSize();
			publ.populateFontFamily();
			publ.setFontSize(data.font_size_initial);
			publ.setFontFamily(data.font_family_initial);


			// init "Text Settings" functionality
			var tt = new tip(data.text_settings_btn);		
			tt.setContent(data.av_styling_elem);
			data.text_settings_btn.addEventListener(data.pointerEvents.press, function(e) {
				e.target.blur();// cut off the border which some browsers add on focus by default
			});

			// close the tooltip on click/tap inside the IFRAME
			tt.onopen = function() {
				var view = doc.getElementById("article_frame"),
					d = (view.contentDocument || view.contentWindow);

				if(!d.tiplistener) {
					d.tiplistener = d.addEventListener(data.pointerEvents.press, function(ev) {
						tip.close();
					});
				}
			};


			// fullscreen functionality
			publ.initFullscreenAPI();
			publ.manageFullscreen(data.fullscreen_btn);

			// screen/device orientation stuff
			orientation = win.matchMedia("(orientation: portrait)");
			data.double_mode = (orientation.matches) ? false : true;
			orientation.addListener(function(m) {
				data.double_mode = (m.matches) ? false : true;
			});

			// open the DRP-book reading the EAN from location.hash
			if(location.hash != '') {
				this.openBook(location.hash.substr(1));
			}

			// window.onresize stuff
    		win.onresize = function(e){
    			tip.close();
    			clearTimeout(resize_timeout);
    			resize_timeout = setTimeout(publ.resizedw, 100);
    		};
		},


		data = {
			libURL: './backend/DRP/',
			container: null,
			pages_counter: null,
			articleview_menu: null,
			font_size_list: null,
			font_family_list: null,
			fullscreen_btn: null,
			text_settings_btn: null,
			av_styling_elem: null,
			iframe_styling_node: null,
			bookURL: null,
			bookEAN: "",
			isTouch: false,
			pointerEvents: null,
			CSS_TRANSITION_TIMEOUT: 350,//check this value after every editing of CSS transition duration
			RANGE_VOLUME: 6, // preloading range
			double_mode: true,
			lrp: 1,
			booktitle: "",
			total_pages: 0,
			pages: [],
			swipe_handler: function(event) {
				if(article_open){
					return;
				}
				event.stopPropagation();
				if(event.details.x < 0) {
					publ.navigateForwards();
				} else {
					publ.navigateBackwards();
				}
			},
			font_size_arr: [
				{value: 60, elem: null},
				{value: 70, elem: null},
				{value: 80, elem: null},
				{value: 100, elem: null},
				{value: 125, elem: null},
				{value: 150, elem: null},
				{value: 170, elem: null},
				{value: 200, elem: null}
			],
			font_size_initial: 3,
			font_size_current: 3,
			font_family_arr: [
				{
					value: 'serif',
					name: 'Default',
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
			],
			font_family_initial: 0,
			font_family_current: 0
		},


		publ = {

			clearData: function() {
				data.lrp = 1; // comment this to emulate LRP != 1 (when initial data.lrp is set not to 1)
				data.total_pages = 0;
				data.pages = [];
				data.booktitle = "";
				article_open = false;
				busy = false;
			},


			clearDOM: function() {
				this.showSpinner(true);
				data.container.innerHTML = '';
			},


			updateArticleView: function(view, av) {
				
				var button = doc.getElementById("av_back_btn");
				if(!button) throw new Error('No button element!');

				button.addEventListener(data.pointerEvents.press, function(e){
					av.className = "";
					data.articleview_menu.style.display = "none";
					data.pages_counter.style.display = "block";
					win.setTimeout(function(){
						av.style.zIndex = "1";
						av.style.visibility = "hidden";
						busy = article_open = false;
						doc.activeElement.blur();// set the focus from IFRAME back to the doc's BODY
						//
						// TODO: Safari bug - it doesn't proceed blur() and doesn't allow us change the focus
						//
					}, data.CSS_TRANSITION_TIMEOUT);
				});

				var d = (view.contentDocument || view.contentWindow),
					chi = Array.prototype.slice.call(d.documentElement.childNodes);
				// we cannot use 'd.document.body' because of Mozilla Firefox :(
				// so let's dance forEach...
				chi.forEach(function(c) {
					switch(c.nodeName.toLowerCase()) {
						case "head":
						{
							// insert our custom <style> tag
							data.iframe_styling_node = utils.node('style', {attr:{'id':'styling'}});
							c.appendChild(data.iframe_styling_node);

							// set the corresponding font settings
							data.iframe_styling_node.textContent = '\n\t* {font-family:' + data.font_family_arr[data.font_family_current].value + '!important;}\n\tbody {font-size: ' + data.font_size_arr[data.font_size_current].value + '%!important;}';
						}
						break;

						case "body":
						{
							// let's dance to make IFRAME's content scrollable on lovely iOS
							// (see http://stackoverflow.com/questions/19667785/iframe-and-mobile-safari-ipad-iphone)
							var wrad = utils.node('div', {attr:{'style':'overflow:hidden; height:100%; width:100%; border:none; margin:0; padding:0;'}});
							wrad.innerHTML = c.innerHTML;
							c.innerHTML = "";
							c.style.padding = "20px";
							c.appendChild(wrad);
						}
						break;

						default:
						break;
					}
				});				
			},


			switchArticleView: function(val) {

				tip.close();

				var ap = doc.getElementById("articleport"),
					view = doc.getElementById("article_frame");

				if(!busy) {
					busy = true;

					if(ap.className == "active") {
						ap.className = "";
						win.setTimeout(function() {
							ap.style.zIndex = "1";
							busy = article_open = false;
						}, data.CSS_TRANSITION_TIMEOUT);
					} else {
						article_open = true;

						view.setAttribute('src', "./backend/DRP/"+data.bookEAN+"/OPS/"+val);
						view.onload = function() {
							publ.updateArticleView(view, ap);
						};
						data.articleview_menu.style.display = "block";
						data.pages_counter.style.display = "none";
						ap.style.visibility = "visible";
						ap.style.zIndex = "1000";
						ap.className = "active";
						win.setTimeout(function() {
							busy = false;
						}, data.CSS_TRANSITION_TIMEOUT);
					}
				}
			},


			preloadRange: function() {

				if(data.lrp < 1 || data.lrp > data.total_pages) {
        			throw new Error('"'+data.lrp+'" is not a valid page number!');
    			}

	   			this.preloadImage(data.lrp);

    			var c = data.RANGE_VOLUME,
    				prev = data.lrp - 1,
    				next = data.lrp + 1;

    			if(c & 1) {
    				c++;//keep it always even 
    			}

    			while(c) {
    				if(c & 1) { // odd
    					if(prev > 0) {
    						this.preloadImage(prev);
    					}
    					prev--;
    				} else {
    					if(next < data.total_pages) {
    						this.preloadImage(next);
    					}
    					next++;
    				}
    				c--;
    			}
			},


			appendImageToPage: function(page, image) {

				if(!page.inDOM) {
					if(page.container.children.length > 1) { // there is an "Article View" button
						page.container.insertBefore(image, page.container.children[1]);// insert an Image
						page.container.removeChild(page.container.children[0]);// remove 'preloadpagediv'
					} else { // "plain" page
						page.container.innerHTML = "";// remove 'preloadpagediv'
						page.container.appendChild(image);// append an Image
					}
					page.inDOM = true;
				}
			},


			preloadImage: function(pagenum) {

				var page = data.pages[pagenum-1];

				if(!page.loaded) {// preload Image

					page.imgobj.onload = function() {
						page.loaded = true;
						publ.appendImageToPage(page, this);
					};
					page.imgobj.onabort = function() {
						console.log("Loading of image for page " + page.pnum + " aborted!");
					};
					page.imgobj.onerror = function() {
						console.log("Error by loading of image for page " + page.pnum + "!");
					};
					page.imgobj.src = data.bookURL + page.fileURL;
					//
					// TODO: optimize very large HR images
					// Possible solution are:
					// 1) prepare images in (three) different resolutions on the server-side and on the client-side allow the user to choose between them depending from the current performance (like the guys with online-video do)
					// 2) include 'lowsrc' attribute into <IMG> and take into work only lowsrc
					// 3) dance with Canvas to lower the memory consumption
					//

				} else {
					// just append already loaded Image from the cache
					publ.appendImageToPage(page, page.imgobj);
				}

			},


			makePage: function(page, cname) {

				var div = utils.node('div', {attr:{'class': cname, 'page': page.pnum}});
				page.container = div;

				// create and append the temporary DIV with spinner
				div.appendChild(utils.node('div', {attr:{'class': 'preloadpagediv'}}));

				// articles stuff
				if(page.articles.length) {
					
					// var btn = utils.node('div',{attr:{'class':'artbtn'}, text:"Article View"}),
					// 	bs = doc.getElementById("testbooks_select");
					var btn = utils.node('div',{attr:{'class':'artbtn'}, text:"Article View"});

					if(page.articles.length > 1) { // multiple articles for the same page

						var li,
							t = new tip(btn),
							ul = doc.getElementById("artsul");
						
						t.onclose = function() {
							if(!busy) {
								article_open = false;
							}
						};

						ul.innerHTML = "";
						
						page.articles.forEach(function(a){
							li = utils.node('li', {attr:{'data-link':a.target}, text:a.title});
							li.setAttribute("on"+data.pointerEvents.press, "BN_DRPReader.switchArticleView(this.getAttribute('data-link'));");
							ul.appendChild(li);
						});
						
						t.setContent(doc.getElementById("articles_tip").innerHTML);
						
						btn.addEventListener(data.pointerEvents.press, function(e){
							e.target.blur();// cut off the border which some browsers add on focus by default
							if(busy) {
								tip.close();
								return;
							}
							article_open = true;
						});

					} else { // there is only one article for this page
						btn.addEventListener(data.pointerEvents.press, function(e){
							e.target.blur();// cut off the border
							publ.switchArticleView(page.articles[0].target);
						});
					}
					div.appendChild(btn);
				}

			 	return div;
			},


			updateLayout: function() {
				this.clearDOM();
				data.pages.forEach(function(p){p.inDOM = false;});
				this.createLayout();
				this.showSpinner(false);
			},


			createLayout: function() {				
				var wrap;

				if(data.lrp > data.total_pages + 1) {
					data.lrp = 1;
				}

				this.setBookTitle();
				this.setTotalCounter();
				this.updateCurrentPageNum();

				if(!data.double_mode) {// single page layout

					data.pages.forEach(function(item) {
						wrap = utils.node('div', {attr:{'class':'page-wrapper'}});
					 	wrap.appendChild(publ.makePage(item,'cpage'));
				 		data.container.appendChild(wrap);
				 		if(data.lrp == item.pnum) {
				 			wrap.setAttribute('style', 'display: block;');
				 		}
					});

				} else {// double layout

					data.pages.forEach(function(item) {
						if(item.pnum > 1) {// all pages except cover
							if(item.pnum & 1) {// right (odd) page 
								wrap.appendChild(publ.makePage(item,'rpage'));
								data.container.appendChild(wrap);
							} else {// left (even) page
								wrap = utils.node('div', {attr:{'class':'page-wrapper'}});
								wrap.appendChild(publ.makePage(item,'lpage'));
								if(item.pnum == data.total_pages) { // last page
									data.container.appendChild(wrap);
									if(data.lrp == item.pnum) {
				 						wrap.setAttribute('style', 'display: block;');
				 					}
									return;
								}
							}
						} else {// first (cover) page
							wrap = utils.node('div', {attr:{'class':'page-wrapper'}});
							wrap.appendChild(publ.makePage(item,'rpage'));
						 	data.container.appendChild(wrap);
						}

						if(data.lrp == item.pnum) {
				 			wrap.setAttribute('style', 'display: block;');
				 		}
					});

				}

				this.preloadRange();
			},


			onAjaxError: function(obj) {
				console.log("\n----> XMLHttpRequest ERROR by requesting URL "+ obj.url +",\nresponse status = " + obj.status +"\n\n");
			},


			openBook: function(ean) {
				this.clearDOM();
				data.bookURL = data.libURL + ean + "/OPS/";
				data.bookEAN = ean;
				utils.ajax({
					url: data.bookURL+"replicaMap.xml",
					response_type: 'XML',
					success: this.parseReplicaMap.bind(this),
					error: this.onAjaxError.bind(this)
				});
			},


			parseReplicaMap: function(obj) {

				var elm = obj.response.documentElement,
					pages = Array.prototype.slice.call(elm.getElementsByTagName("Pages")[0].getElementsByTagName("Page"));

				if(!pages) throw new Error('var pages is undefined!');

				this.clearData();

				var arts = [],
					ras = Array.prototype.slice.call(elm.getElementsByTagName("Articles")[0].getElementsByTagName("Article"));
				if(ras && ras.length) {
					ras.forEach(function(r){
						arts.push({
							'file':  r.getAttribute("file"),
							'title': r.getElementsByTagName("title")[0].firstChild.nodeValue
						});
					});
				}

				data.total_pages = pages.length;
				data.booktitle = elm.getElementsByTagName("Title")[0].firstChild.nodeValue || "";

				pages.forEach(function(item) {
					// <Group> tags parsing - may be articles, links, hotspots etc
					var articles = [], 
						links = [],
						targ, 
						groups = Array.prototype.slice.call(item.getElementsByTagName("Group"));
					if(groups && groups.length && arts.length) {
						groups.forEach(function(g){
							targ = g.getAttribute("ePubTarget");
							if(targ.indexOf("article") != -1) {// article ?
								arts.forEach(function(a){
									if(a.file === targ) {
										// There are some DRPs where <Group>'s "ePubTarget" attribute
										// contains the value which is absent in <Article>'s "file" attribute.
										// Example: "The Nation", page #0
										articles.push({'target':a.file, 'title':a.title});
									}
								});
							} else { // link
								links.push(targ);
							}
						});
					}

					// populate a page object
					data.pages.push({
						'pnum': 1 + parseInt(item.getAttribute('pageNum')),
						'fileURL': item.getAttribute('file'),
						'thumbURL': item.getAttribute('thumbFile'),
						'articles': articles,
						'links': links,
						'container': null,
						'loaded': false,
						'inDOM': false,
						'imgobj': new Image()
					});
				});

				this.updateLayout();
			},


			showSpinner: function(show) {
				doc.getElementById("spinner").style.display = show ? 'block' : 'none';
			},		


			setBookTitle: function() {
				doc.getElementById("book_title").innerHTML = data.booktitle;
			},


			setTotalCounter: function() {
				doc.getElementById('total').innerHTML = data.total_pages;
			},


			updateCurrentPageNum: function() {

				var num = doc.getElementById('num');
				if(!data.double_mode) {
					num.innerHTML = data.lrp;
				} else {
					if(data.lrp > 1) {
						if(data.lrp & 1) {// correct LRP for odd page numbers in double-page view mode
							--data.lrp;
						}
						num.innerHTML = (data.lrp < data.total_pages) ? (data.lrp +"-"+ (data.lrp + 1)) :/*last single page*/ data.lrp;
					} else { // first page (cover)
						num.innerHTML = data.lrp;
					}
				}
			},


			navigateForwards: function() {

				if(data.lrp < data.pages.length) {
					
					var pidx = data.lrp + (data.RANGE_VOLUME >> 1) + 1;

					if(!data.double_mode) {
						this.switchPageWrappersVisibility(data.lrp);
						if(pidx <= data.pages.length) {
							this.preloadImage(pidx);
						}
						data.lrp++;
					} else {
						if(data.lrp > 1) {
							if((data.lrp + 2) > data.pages.length) {
								// if there is no single last page in the book
								// example: Wonder Woman: Odyssey Volume 1 ("9781401239534-2560_drp")
								data.lrp = data.pages.length - 1;
								return;
							}
							this.switchPageWrappersVisibility((data.lrp >> 1) + 1);
							if(pidx <= data.pages.length) {
								this.preloadImage(pidx);
								if(pidx+1 <= data.pages.length) {
									this.preloadImage(pidx+1);
								}
							}
							data.lrp += 2;
						} else {
							this.switchPageWrappersVisibility(1);
							if(pidx <= data.pages.length) {
								this.preloadImage(pidx);
								if(pidx+1 <= data.pages.length) {
									this.preloadImage(pidx+1);
								}
							}
							data.lrp++;
						}
					}
					this.updateCurrentPageNum();
				}
			},


			navigateBackwards: function() {

				if(data.lrp > 1) {

					var pidx = data.lrp - (data.RANGE_VOLUME >> 1) - 1;

					if(!data.double_mode) {
						this.switchPageWrappersVisibility(data.lrp-2);
						if(pidx > 0) {
							this.preloadImage(pidx);
						}
						data.lrp--;
					} else {
						if(data.lrp != 2) {
							this.switchPageWrappersVisibility((data.lrp >> 1) - 1);
							if(pidx > 2) {
								this.preloadImage(pidx);
								if(pidx-1 > 0) {
									this.preloadImage(pidx-1);
								}
							} else if(pidx == 2) {
								this.preloadImage(pidx);
								this.preloadImage(pidx-1);
							}
							data.lrp -= 2;
						} else {
							this.switchPageWrappersVisibility(0);
							data.lrp--;
						}
					}
					this.updateCurrentPageNum();
				}
			},


			keysHandler: function(e) {

				if(article_open){return;}

		      	// enter: 13 // escape: 27 // tab: 9 // up: 38 // down: 40
				switch(e.which)
				{
					case (37)://left-arrow
						this.navigateBackwards();
						break;

					case (39)://right-arrow
						this.navigateForwards();
						break;

					default:
						break;
				}
			},


			switchPageWrappersVisibility: function(idx) {
				var pwrappers = Array.prototype.slice.call(data.container.children);
				if(!pwrappers) throw new Error('No pwrappers in switchPageWrappersVisibility()');
				pwrappers.forEach(function(i){i.style.display = 'none';});
				pwrappers[idx].style.display = 'block';
			},


			resizedw: function() {
				data.double_mode = (orientation.matches) ? false : true;
				publ.updateLayout();
			},


			initFullscreenAPI: function() {

				var api,
					vendor,
					apis = {
						w3: {
							enabled: "fullscreenEnabled",
							element: "fullscreenElement",
							request: "requestFullscreen",
							exit:    "exitFullscreen",
							events: {
								change: "fullscreenchange",
								error:  "fullscreenerror"
							}
						},
						webkit: {
							enabled: "webkitIsFullScreen",
							element: "webkitCurrentFullScreenElement",
							request: "webkitRequestFullScreen",
							exit:    "webkitCancelFullScreen",
							events: {
								change: "webkitfullscreenchange",
								error:  "webkitfullscreenerror"
							}
						},
						moz: {
							enabled: "mozFullScreen",
							element: "mozFullScreenElement",
							request: "mozRequestFullScreen",
							exit:    "mozCancelFullScreen",
							events: {
								change: "mozfullscreenchange",
								error:  "mozfullscreenerror"
							}
						},
						ms: {
							enabled: "msFullscreenEnabled",
							element: "msFullscreenElement",
							request: "msRequestFullscreen",
							exit:    "msExitFullscreen",
							events: {
								change: "MSFullscreenChange",
								error:  "MSFullscreenError"
							}
						}
					},
					w3 = apis.w3;
	
				for(vendor in apis) {
					if(apis[vendor].enabled in doc) {
						api = apis[vendor];
						break;
					}
				}
	
				function dispatch(type, target) {
					var event = doc.createEvent("Event");
					event.initEvent(type, true, false);
					target.dispatchEvent(event);
				}
	
				function handleChange(e) {
					doc[w3.enabled] = doc[api.enabled];
					doc[w3.element] = doc[api.element];
					dispatch(w3.events.change, e.target);
				}
	
				function handleError(e) {
					dispatch(w3.events.error, e.target);
				}

				if(!(w3.enabled in doc) && api) {
					doc.addEventListener(api.events.change, handleChange, false);
					doc.addEventListener(api.events.error,  handleError,  false);
					doc[w3.enabled] = doc[api.enabled];
					doc[w3.element] = doc[api.element];
					doc[w3.exit] = doc[api.exit];
					Element.prototype[w3.request] = function() {
						return this[api.request].apply(this, arguments);
					};
				}
				doc.fullscreenApiEnabled = !!api;
			},


			manageFullscreen: function(button) {

				if(doc.fullscreenApiEnabled && button) {
					var handler = function(button) {
						utils.classes[doc.fullscreenEnabled ? 'add' : 'remove'](button, 'selected');
					}.bind(this, button);
					utils.events(doc, 'fullscreenchange', handler);
					button.onclick = function() {
						if(doc.fullscreenEnabled) {
							doc.exitFullscreen();
						} else {
							doc.body.requestFullscreen();
						}
					}
					handler();
				} else if(button) {
					button.style.display = 'none';
				}
			},


			populateFontSize: function() {

				var frag = utils.node('fragment');
				data.font_size_arr.forEach(function(size, index) {
					size.elem = utils.node('li', {
						text: 'A',
						attr: (data.font_size_current != index) ? {'class':'av-opt-fontSize'} : {'class':'av-opt-fontSize av-selected'},
						css: {fontSize: size.value+'%'}
					});
					size.elem.onclick = publ.setFontSize.bind(data, index);
					frag.appendChild(size.elem);
				});
				data.font_size_list.appendChild(frag);
			},


			populateFontFamily: function() {

				var frag = utils.node('fragment');
				data.font_family_arr.forEach(function(family, index) {
					family.elem = utils.node('li', {
						text: family.name,
						attr: (data.font_family_current != index) ? {'class':'av-opt'} : {'class':'av-opt av-selected'},
						css: family.value ? {fontFamily: family.value} : {}
					});
					family.elem.onclick = publ.setFontFamily.bind(data, index);
					frag.appendChild(family.elem);
				});
				data.font_family_list.appendChild(frag);
			},


			setFontSize: function(idx) {

				if(data.font_size_current === idx) {
					return;
				}

				data.font_size_arr.forEach(function(size, i) {
					utils.classes[i === idx ? 'add' : 'remove'](size.elem, 'av-selected');
				});

				data.font_size_current = idx;
				data.iframe_styling_node.textContent = '\n\t* {font-family:' + data.font_family_arr[data.font_family_current].value + '!important;}\n\tbody {font-size: ' + data.font_size_arr[data.font_size_current].value + '%!important;}';
			},


			setFontFamily: function(idx) {

				if(data.font_family_current === idx) {
					return;
				}

				data.font_family_arr.forEach(function(family, i) {
					utils.classes[i === idx ? 'add' : 'remove'](family.elem, 'av-selected');
				});

				data.font_family_current = idx;
				data.iframe_styling_node.textContent = '\n\t* {font-family:' + data.font_family_arr[data.font_family_current].value + '!important;}\n\tbody {font-size: ' + data.font_size_arr[data.font_size_current].value + '%!important;}';
			}

		};

		init.prototype = publ;

		// export to global scope (just to make tips functional)
		win.BN_DRPReader = publ;

		doc.addEventListener('DOMContentLoaded', function(e) {
        	return new init();
    	},false);

	})());

})(window, document);
