javascript:(function () {

	/*document.ontouchstart = function () {};
	console.log("event v4 " + location.href);
	window.ontouchmove = function (event) { console.log("MOVE EVENT " + event.pageX + ' ' + event.pageY); event.preventDefault() };*/

	window.nowt_subpager = (window.nowt_subpager || (function () {
		var priv = {
				ui: {
					container: null
				},
				processImages: function (width, height) {
					var counter = document.images.length;
					while (counter--) {
					   document.images[counter].style.maxWidth = width + 'px';
					   document.images[counter].style.maxHeight = height + 'px';
					   document.images[counter].style.WebkitColumnBreakInside = 'avoid';
					}
				},
				pages: 1,
				tellJava: function (data) {
					window.JavascriptEventListener && JavascriptEventListener.notify(data);
				},
				width: function () {
					return document.compatMode == 'CSS1Compat' ? document.documentElement.clientWidth : document.body.clientWidth;
				},
				height: function () {
					return document.compatMode == 'CSS1Compat' ? document.documentElement.clientHeight : document.body.clientHeight;
				},
				build: function () {
					this.ui.container = document.createElement('subpager');
					var viewport = document.getElementsByName('viewport')[0],
						stylesheet = document.createElement('style');
					stylesheet.textContent = 'html, body{margin:0 !important;padding:0 !important;}';
					document.body.appendChild(stylesheet);
					while (document.body.childNodes[0]) this.ui.container.appendChild(document.body.childNodes[0]);
					this.ui.container.style.cssText = 'display:block;'.concat(
						'position:relative;border:0;background:none;text-indent:0;margin:0;overflow:hidden;word-wrap:break-word;padding:',
						publ.options.padding.join('px '),
						'px');
					if (window.JavascriptEventListener && JavascriptEventListener.get('page_progression_direction') == 'rtl') {
						this.ui.container.style.direction = 'rtl';
						console.log('rtl');
					}
					document.body.appendChild(this.ui.container);
					if (!viewport) { 
						viewport = document.createElement('meta');
						viewport.name = 'viewport';
						document.getElementsByTagName('head')[0] && document.getElementsByTagName('head')[0].appendChild(viewport);
					}
					viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1');
					viewport.setAttribute('content', 'width=' + document.body.scrollWidth +', user-scalable=yes, initial-scale=1, maximum-scale=1');
				},
			},
			publ = {
				options: {
					padding: [10,10,10,10]
				},
				paginated: false,
				position: function (ratio) {
					var page = this.page(),
						pages = this.pages(),
						destination = Math.round(ratio * (pages-1));
					if (destination == page) return page;
					window.scrollTo(priv.width() * destination, 0);
					return destination;
				},
				paginate: function () {
					var width = priv.width(),
						height = priv.height(),
						gap = this.options.padding[1] + this.options.padding[3],
						innerWidth = width - gap,
						position = this.paginated ? this.page() / (this.pages()-1) : 0,
						innerHeight = height - (this.options.padding[0] + this.options.padding[2]);
						console.log('WIDTH: ' + width + '    HEIGHT: ' + height);
					priv.processImages(innerWidth, innerHeight);
					priv.ui.container.style.height = innerHeight + 'px';
					priv.ui.container.style.WebkitColumnWidth = innerWidth + 'px';
					priv.ui.container.style.WebkitColumnGap = gap + 'px';
					priv.ui.container.style.padding = publ.options.padding.join('px ') + 'px';
					priv.ui.container.style.width = 'auto';
					var pages = Math.max(Math.round(priv.ui.container.scrollWidth / width), 1);
					priv.ui.container.style.width = (pages * width - gap) + 'px';
					priv.pages = pages;
					var anchorsobj = {},
						anchors = [],
						bounds = null,
						elems = priv.ui.container.getElementsByTagName('*'),
						counter = elems.length;
					while (counter--) {
						if (elems[counter].nodeType == 1 && elems[counter].id) {
							bounds = elems[counter].getClientRects()[0];
							if (!bounds) continue;
							anchorsobj[elems[counter].id] = Math.floor((window.scrollX + bounds.left) / width) - (bounds.top<0?Math.ceil(Math.abs(bounds.top)/height):0);
						}
					}
					for (counter in anchorsobj) anchors.push('"'+counter.replace('"','\\\"')+'":'+anchorsobj[counter]);
					if (this.paginated) {
						priv.tellJava('{page:'+this.position(position)+',pages:'+pages+',anchors:{'+anchors.join(',')+'}}');
					} else {
						priv.tellJava('{pages:'+pages+',anchors:{'+anchors.join(',')+'}}');
						this.paginated = true;  
					}
				},
				pages: function () {
					return priv.pages;
				},
				page: function () {
					return Math.round(document.body.scrollLeft / priv.width());
				}
			},
			init = function () {
				if (window.nowt_styling) {
					var padding = window.nowt_styling.padding();
					this.options.padding = [padding,padding,padding,padding];
				}
				priv.build();
				publ.paginate();
			};
		init.prototype = publ;
		return new init();
	})());

	window.onload = function () { window.nowt_subpager.paginate(); };

})();
