if (!Array.prototype.forEach) {
	Array.prototype.forEach = function(callback, thisArg) {
		var T, k;
		if (this == null) {
			throw new TypeError(' this is null or not defined');
		}
		var O = Object(this);
		var len = O.length >>> 0;
		if (typeof callback !== "function") {
			throw new TypeError(callback + ' is not a function');
		}
		if (arguments.length > 1) {
			T = thisArg;
		}
		k = 0;
		while (k < len) {
			var kValue;
			if (k in O) {
				kValue = O[k];
				callback.call(T, kValue, k, O);
			}
			k++;
		}
	};
}

if(!Array.prototype.unique) {
	Array.prototype.unique = function() {
		var unique= [];
		for (var i = 0; i < this.length; i += 1) {
			if (unique.indexOf(this[i]) == -1) {
				unique.push(this[i])
			}
		}
		return unique;
	};
}

(function(undef){
	if( document.createElement('div').firstElementChild===undef ){
		Object.defineProperty(Element.prototype, 'firstElementChild', {
			get : function () { // faster then this.children[0]
				var el = this.firstChild;
				do {
					if(el.nodeType===1){
						return el;
					}
					el = el.nextSibling;
		        } while(el);
		        return null;
			}
		});
		Object.defineProperty(Element.prototype, 'lastElementChild', {
			get : function () {
				var el = this.lastChild;
				do {
					if(el.nodeType===1){
						return el;
					}
					el = el.previousSibling;
		        } while(el);
		        return null;
			}
		});
		Object.defineProperty(Element.prototype, 'nextElementSibling', {
			get : function () {
				var el = this.nextSibling;
				while(el) {
					if(el.nodeType===1){
						return el;
					}
					el = el.nextSibling;
		        };
		        return null;
			}
		});
		Object.defineProperty(Element.prototype, 'previousElementSibling', {
			get : function () {
				var el = this.previousSibling;
				while(el){
					if(el.nodeType===1){
						return el;
					}
					el = el.previousSibling;
		        };
		        return null;
			}
		});
	}
})();

(function() {
  var b, a, f;
  b = 0;
  a = ["ms", "moz", "webkit", "o"];
  for (f = 0; f < a.length && !window.requestAnimationFrame;) window.requestAnimationFrame = window[a[f] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[a[f] + "CancelAnimationFrame"] || window[a[f] + "CancelRequestAnimationFrame"], ++f;
  window.requestAnimationFrame || (window.requestAnimationFrame = function(a, f) {
    var g, h, c;
    g = (new Date).getTime();
    c = Math.max(0, 16 - (g - b));
    h = window.setTimeout(function() {
      a(g + c)
    }, c);
    b = g + c;
    return h
  });
  window.cancelAnimationFrame ||
    (window.cancelAnimationFrame = function(a) {
    clearTimeout(a)
  })
})();

(function ( doc ) {
	"use strict";
	var pollute = true,
		api,
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
	for (vendor in apis) {
		if (apis[vendor].enabled in doc) {
			api = apis[vendor];
			break;
		}
	}
	function dispatch( type, target ) {
		var event = doc.createEvent( "Event" );
		event.initEvent( type, true, false );
		target.dispatchEvent( event );
	}
	function handleChange( e ) {
		doc[w3.enabled] = doc[api.enabled];
		doc[w3.element] = doc[api.element];
		dispatch( w3.events.change, e.target );
	}
	function handleError( e ) {
		dispatch( w3.events.error, e.target );
	}
	if (pollute && !(w3.enabled in doc) && api) {
		doc.addEventListener( api.events.change, handleChange, false );
		doc.addEventListener( api.events.error,  handleError,  false );
		doc[w3.enabled] = doc[api.enabled];
		doc[w3.element] = doc[api.element];
		doc[w3.exit] = doc[api.exit];
		Element.prototype[w3.request] = function () {
			return this[api.request].apply( this, arguments );
		};
	}
	doc.fullscreenApiEnabled = !!api;
	return api;
})( document );
