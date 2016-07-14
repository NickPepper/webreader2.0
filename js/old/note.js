javascript:(window.nowt_highlights = (window.nowt_highlights || (function () {

	document.ontouchstart = function () {};

	var utils = ({

		offsets: function () {
			var b = document.body,
				e = document.documentElement;
			return {
				scrollLeft: typeof window.pageXOffset !== 'undefined' ? window.pageXOffset : b.scrollLeft || e.scrollLeft,
				scrollTop: typeof window.pageYOffset !== 'undefined' ? window.pageYOffset : b.scrollTop || e.scrollTop,
				clientWidth: document.compatMode == 'CSS1Compat' ? document.documentElement.clientWidth : document.body.clientWidth,
				clientHeight: document.compatMode == 'CSS1Compat' ? document.documentElement.clientHeight : document.body.clientHeight
			};
		},

		toArray: function (collection) {
			var arr = [], counter = collection.length;
			for(;counter--;arr.unshift(collection[counter]));
			return arr;
		},

		node: function(node, params){
			switch(node){
				case 'fragment':return document.createDocumentFragment();break;
				case 'text':return document.createTextNode(params instanceof String ? params : '');break;
				default:
					node = document.createElement(node);
					if(params){
						var prop;
						if(params.text)node.appendChild(document.createTextNode(params.text+''));
						if(params.html)node.innerHTML = params.html+'';
						if(params.css)for(prop in params.css)node.style[prop] = params.css[prop];
						if(params.events)for(prop in params.events)this.events(node, prop, params.events[prop]);
						if(params.attr)for(prop in params.attr)node.setAttribute(prop,params.attr[prop]);
					}
					return node;
				break;
			}
		},

		nodeInside: function (child, parent) {
			while (child) {
				if (parent instanceof Function ? parent(child) : child === parent) return child;
				child = child.parentNode;
			}
			return false;
		}, 

		events: function (obj, events, handler) {
			events.split(' ').forEach(function (prop) {obj.addEventListener(prop, handler)});
			return handler;
		},

		eventsParse: function(host, event){
			var type = ~event.type.indexOf('touch') ? 'touch' : (~event.type.indexOf('MSPointer') ? 'pointer' : 'mouse'),
				x = [],
				y = [];
			switch (type) {
				case 'pointer':
					if (typeof host.__mspointer__ === 'undefined') host.__mspointer__ = {};	
					host.__mspointer__[event.pointerId] = {x: event.pageX, y: event.pageY, id: event.pointerId};
					var arr = [];
					for (var prop in host.__mspointer__) {arr.push(host.__mspointer__[prop]);}
					arr.sort(function (a, b) {return a.id - b.id;});
					arr.forEach(function (prop) {x.push(prop.x);y.push(prop.y);})
					if(event.type === 'MSPointerUp' || event.type === 'MSPointerCancel') delete host.__mspointer__[event.pointerId];
				break;
				case 'touch':
					this.toArray(event.touches.length ? event.touches : event.changedTouches).forEach(function (prop) {x.push(prop.pageX);y.push(prop.pageY);});
				break;
				case 'mouse':
					x.push(event.pageX);
					y.push(event.pageY);
				break;
			}
			return {x:x,y:y,type:type};
		},

		dist : function(x0, y0, x1, y1){
			return Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
		},

		parseJson: function (json) {
			try{ json = new Function('return '+json+';')(); }catch(e){}
			return typeof json === "object" ? json : null;
		},

		bind : function(obj, method){
			var prefix = Array.prototype.slice.call(arguments, 2);
			return function () {return method.apply(obj, prefix.concat(Array.prototype.slice.call(arguments)));}
		},
		
		global : function(){
			var global = this;
			return (function me(obj){
				var temp, prop;
				for(prop in obj){
					if(obj[prop] instanceof Object){
						temp = me(obj[prop]);
						if(obj[prop].hasOwnProperty('parent') && obj[prop].parent === null)obj[prop].parent = obj;
						if(obj[prop].hasOwnProperty('global') && obj[prop].global === null)obj[prop].global = global;
						obj[prop] = temp;
					}
				}
				if(obj.hasOwnProperty('constructor') && typeof obj.constructor == 'function'){
					return function(){
						var chain = function(){};
						chain.prototype = obj;
						chain = new chain()
						obj.constructor.apply(chain, arguments);
						return chain;
					}
				}else{
					return obj;
				}
			})(this);
		}
	}).global();
	
	var Selection = (function () {
		var init = function () {
				this.content = '';
				this.x = 0;
				this.y = 0;
				this.width = 0;
				this.height = 0;
				this.start_x = 0;
				this.start_y = 0;
				this.start_width = 0;
				this.start_height = 0;
				this.end_x = 0;
				this.end_y = 0;
				this.end_width = 0;
				this.end_height = 0;
				this.start_container = null;
				this.end_container = null;
				this.start_offset = null;
				this.end_offset = null;
				this.selected = false;
				this.symbols = 500;
				this.opacity = 0.5;
				this.margin = 2;
				this.color = '#3291DB';
				this.range = document.createRange();
				this.ui = document.createElement('div');
				this.ui.style.cssText = 'position:absolute;left:0;top:0;z-index:9000;pointer-events: none;opacity:'+this.opacity;
			},
			publ = {
				setColor: function (color) {
					this.color = color;
					var rects = this.ui.getElementsByTagName('div'),
						i = rects.length;
					while (i--) rects[i].style.backgroundColor = this.color;
				},
				setOpacity: function (opacity) {
					this.opacity = opacity;
					this.ui.style.opacity = this.opacity;
				},
				setZIndex: function (zIndex) {
					this.ui.style.zIndex = zIndex;
				},
				boundingBox: function () {
					this.range.setStart(this.start_container, this.start_offset );
	  				this.range.setEnd(this.end_container, this.end_offset );
	  				var bounds = this.range.getBoundingClientRect(),
	  					offsets = utils.offsets(),
	  					comp = document.compatMode == 'CSS1Compat';
	  				this.x = bounds.left + offsets.scrollLeft;
					this.y = bounds.top + offsets.scrollTop;
					this.width = bounds.width;
					this.height = bounds.height;
				},
				getContent: function () {
					var elems,
						counter,
						temp = document.createElement('div'),
						contents = this.range.cloneContents();
					while (contents.firstChild) temp.appendChild(contents.firstChild);
					elems = temp.getElementsByTagName('script'),
					counter = elems.length;
					while (counter--) elems[counter].parentNode.removeChild(elems[counter]);
					elems = temp.getElementsByTagName('style');
					counter = elems.length;
					while (counter--) elems[counter].parentNode.removeChild(elems[counter]);
					return temp.textContent.replace(/^\s+|\s+$/,'').substr(0, this.symbols);
				},
				select: function () {
					if (!this.selected) document.body.appendChild(this.ui);
					this.selected = true;
					this.range.setStart(this.start_container, this.start_offset );
	  				this.range.setEnd(this.end_container, this.end_offset );
				    var rects = utils.toArray(this.range.getClientRects()),
					    selections = this.ui.childNodes,
					    total = 0,
					    offsets = utils.offsets(),
					    subcounter = 0,
					    counter = rects.length;
					while (counter--) {
						subcounter = rects.length;
						while (subcounter--) {
							subelem = rects[subcounter];
							if (
								counter !== subcounter &&
								rects[counter].left <= rects[subcounter].left &&
								rects[counter].right >= rects[subcounter].right &&
								rects[counter].top <= rects[subcounter].top &&
								rects[counter].bottom >= rects[subcounter].bottom
							) {
								rects.splice(counter, 1);
								break; 
							}
						}
					}

					counter = 0;
					total = Math.max(rects.length, selections.length);
					for (;counter<total;counter++) {
						if (rects[counter]) {
							if (!selections[counter]) {
								this.ui.appendChild(document.createElement('div'));
								selections[counter].style.cssText = 'position:absolute;z-index:1;border-radius: 2px;background:'+this.color;
								selections[counter].nowt_selection_reference = this;
							}
							selections[counter].style.left = rects[counter].left - this.margin + offsets.scrollLeft + 'px';
							selections[counter].style.top = rects[counter].top - this.margin + offsets.scrollTop + 'px';
							selections[counter].style.width = (rects[counter].right - rects[counter].left) + this.margin * 2 + 'px';
							selections[counter].style.height = (rects[counter].bottom - rects[counter].top) + this.margin * 2 + 'px';
						} else {
							this.ui.removeChild(selections[this.ui.childNodes.length-1]);
						}
					}
					counter = rects.length-1;
					this.start_x = rects[0].left + offsets.scrollLeft;
					this.start_y = rects[0].top + offsets.scrollTop;
					this.start_width = rects[0].right - rects[0].left;
					this.start_height = rects[0].bottom - rects[0].top;
					this.end_x = rects[counter].left + offsets.scrollLeft;
					this.end_y = rects[counter].top + offsets.scrollTop;
					this.end_width = rects[counter].right - rects[counter].left;
					this.end_height = rects[counter].bottom - rects[counter].top;
					this.boundingBox();
				},
				deselect: function () {
					if (!this.selected) return;
					document.body.removeChild(this.ui);
					this.selected = false;
				},
				setPosition: function (start_container, start_offset, end_container, end_offset) {
					if (
						this.start_container == start_container &&
						this.end_container == end_container &&
						this.start_offset == start_offset &&
						this.end_offset == end_offset
					) return false;
					this.start_container = start_container;
					this.end_container = end_container;
					this.start_offset = start_offset;
					this.end_offset = end_offset;
					return true;
				}
			};
		init.prototype = publ;
		return init;
	})();

	var Balloon = (function () {
		var init = function () {
				this.shown = false;
				this.balloon = utils.node('div',{css:{
					'zIndex': '10000',
					'position':'absolute',
					'background':'#ffffff',
					'boxShadow':'0px 4px 11px 2px rgba(0,0,0,0.5)',
					'visiblity':'hidden',
					'left':'-1000px',
					'top':'-1000px',
					'borderRadius':'4px'
				}});
				this.content = utils.node('div',{css:{
					'padding':'6px',
					'height':'30px',
					'whiteSpace':'nowrap',
					'font':'18px/30px Roboto, sans-serif'
				}});
				this.arrow = utils.node('div',{css:{
					'borderTop': '8px solid #ffffff',
					'borderLeft': '8px solid transparent',
					'borderRight': '8px solid transparent',
					'position': 'absolute',
					'width': 0,
					'height': 0,
					'bottom': '-7px',
					'marginLeft': '-8px'
				}});
				this.balloon.appendChild(this.content);
				this.balloon.appendChild(this.arrow);
			},
			publ = {
				setContent: function (content) {
					this.content.innerHTML = content;
					return this; 
				},
				show: function (sel) {
					if (!this.shown){
						this.balloon.style.visibility = 'hidden';
						document.body.appendChild(this.balloon);
					}
					var padding = 10,
						offsets = utils.offsets(),
						left = Math.min(Math.max(sel.start_x + (sel.start_width - this.balloon.offsetWidth) / 2, offsets.scrollLeft + padding), offsets.scrollLeft + offsets.clientWidth - padding - this.balloon.offsetWidth);
					this.arrow.style.left = Math.min(this.balloon.offsetWidth-14,Math.max(14, sel.start_x + sel.start_width/2 - left)) + 'px';
					this.balloon.style.left = left + 'px';
					this.balloon.style.top = sel.start_y - this.balloon.offsetHeight - 14 + 'px';
					if (this.shown) return this;
					this.shown = true;
					this.balloon.style.visibility = 'visible';
					return this;
				},
				hide: function () {
					if (!this.shown) return this;
					this.shown = false;
					document.body.removeChild(this.balloon);
					return this;
				}
			};
		init.prototype = publ;
		return init;
	})();

	function init(data) {
		this.highlights = data;
		var elem = null;

		/* creating stylesheet */

		document.body.appendChild(utils.node('style',{text:'.nowt-highlights-fastnote{position:absolute;width:34px;height:28px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEI4NkIxRDI5RDREMTFFMzk1MjVFRTY4QjcyQ0ZEREMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEI4NkIxRDM5RDREMTFFMzk1MjVFRTY4QjcyQ0ZEREMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Qjg2QjFEMDlENEQxMUUzOTUyNUVFNjhCNzJDRkREQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4Qjg2QjFEMTlENEQxMUUzOTUyNUVFNjhCNzJDRkREQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoksnLYAAAEESURBVHjaYvz//z8DCPzboWoPpEqB2BiIJRjoDFjAjtiu2g6kKhgGEDD+3aoSAqRXMwwwYGH4z5DPMAgACzCJmA0KhzD8+882OBzyn4FhcETNv0HiEIb/uIPk19PfVLWMTZoVXxrBrZEr9xFVHfJnjTLeXEM3gM8uUK7BKflvvxV1XYLHLryJ9ceVJ9RNkCIs5GVfaqeRX8uUyIsaqgNyo4baaQSfXXizLyVphJmXmdSS9T9N0siPeQqkVnq0Sg9UrPQoSiMk5gG8UfPz1lN6tkcGTTNgcDRIQCHyC1RDD4aG0SkgbTMY2qxTBoNDGEE9vS99sgPfwYJ1Ob/0yA5olxMgwAAivmbT6g9HAAAAAABJRU5ErkJggg==);z-index:9001;}.nowt-highlights-left, .nowt-highlights-right {pointer-events: none;position:absolute;z-index:9992;}.nowt-highlights-left {box-shadow: 0px 1px 1px -1px #000000;border-radius: 0 0 2px 2px;width: 12px;height: 12px;background: #e56c0c;}.nowt-highlights-left:after {background: none repeat scroll 0 0 rgba(0, 0, 0, 0);border-left: 12px solid rgba(0, 0, 0, 0);border-bottom: 12px solid #feba25;bottom: 12px;content: " ";display: block;float: right;height: 0;position: relative;width: 0;}.nowt-highlights-right  {box-shadow: 0px 1px 1px -1px #000000;border-radius: 0 0 2px 2px;width: 12px;height: 12px;background: #e56c0c;}.nowt-highlights-right:after {background: none repeat scroll 0 0 rgba(0, 0, 0, 0);border-right: 12px solid rgba(0, 0, 0, 0);border-bottom: 12px solid #feba25;bottom: 12px;content: " ";display: block;float: left;height: 0;position: relative;width: 0;}.nowt-notes-overlay{position: fixed;z-index: 10000;width: 100%;height: 100%;top: 0;left: 0;}.nowt-notes-container{color: #333;max-width: 400px;width: 100%;display: block;background: #FFF;box-shadow: 0 0 100px -15px #000;padding: 20px 20px 5px;box-sizing: border-box;border-radius: 10px;border-bottom: 10px solid #EFEFEF;position: absolute;left: 50%;top: 50%;-webkit-transform: translate(-50%, -50%);}.nowt-notes-container span{text-align:left;padding: 1px;color: rgba(0,0,0,0.6);border-radius: 3px;font: 16px/25px Roboto, sans-serif;}.nowt-notes-container textarea {outline:none;padding: 0 10px;box-sizing: border-box;margin: 15px 0 0 0;font: 16px/16px Roboto, sans-serif;border: 0;resize: none;width: 100%;}.nowt-notes-decor{border: 2px solid #33b5e5;height: 3px;border-top: 0;margin: -5px 0 0;}.nowt-notes-counter{text-align:right;font: 700 16px/19px Roboto, sans-serif;}.nowt-notes-button{width: 50%;height: 40px;text-align: center;line-height: 40px;margin: 0;font: 700 16px/40px Roboto, sans-serif;}.nowt-balloon-cube{width:30px;height:30px;margin-right:6px;display:inline-block}.nowt-balloon-remove{margin-right:6px;width:28px;height:28px;display:inline-block;background:#ffffff;border:1px solid #eee}.nowt-balloon-remove div{pointer-events:none;pointer-events: none;height:2px;background:red;-webkit-transform:rotate(-45deg);-webkit-transform-origin:left bottom;position:relative;top:27px;width:40px;}.nowt-balloon-note{display: inline-block;line-height: 30px;vertical-align: top;padding: 0 10px;margin-left: 5px;border-left: 1px solid #ddd;color: black;}'}))

		/* creating notes interface */

		this.ui.note = utils.node('div', {attr:{'class': 'nowt-notes-overlay'}});
		elem = utils.node('div', {attr:{'class': 'nowt-notes-container'}});
		this.ui.noteFragment = utils.node('span');
		this.ui.noteArea = utils.node('textarea',{attr: {'placeholder': 'Add your note here','maxlength': this.options.noteLimit,'rows': '5'}});
		var handler = utils.bind(this, this.noteCounterUpdate);
		this.ui.noteArea.onkeyup = handler;
		this.ui.noteArea.onchange = handler;
		this.ui.noteArea.onpaste = handler;
		this.ui.noteArea.oncut = handler;
		this.ui.noteCounter = utils.node('div',{text:this.options.noteLimit,attr: {'class': 'nowt-notes-counter'}});
		this.ui.noteCancel = utils.node('div',{text:'Cancel',attr: {'class': 'nowt-notes-button'}});
		this.ui.noteCancel.onclick = utils.bind(this, function () {this.hideNote();this.enable();});
		this.ui.noteSave = utils.node('div',{text:'Save',attr: {'class': 'nowt-notes-button','style': 'float:right;'}});
		elem.appendChild(this.ui.noteFragment);
		elem.appendChild(this.ui.noteArea);
		elem.appendChild(utils.node('div', {attr:{'class':'nowt-notes-decor'}}));
		elem.appendChild(this.ui.noteCounter);
		elem.appendChild(this.ui.noteSave);
		elem.appendChild(this.ui.noteCancel);
		this.ui.note.appendChild(elem);

		/* creating balloons */

		this.ui.word = new Balloon();
		this.ui.word.balloon.style.pointerEvents = 'none';
		this.ui.add = new Balloon();
		elem = utils.node('fragment');
		elem.appendChild(utils.node('div',{attr: {'style': 'background:#8be58f','class': 'nowt-balloon-cube'},events: {'touchend': utils.bind(this, this.copySelection, '#8be58f')}}));
		elem.appendChild(utils.node('div',{attr: {'style': 'background:#73cbd3','class': 'nowt-balloon-cube'},events: {'touchend': utils.bind(this, this.copySelection, '#73cbd3')}}));
		elem.appendChild(utils.node('div',{attr: {'style': 'background:#ffeb2a;','class': 'nowt-balloon-cube'},events: {'touchend': utils.bind(this, this.copySelection, '#ffeb2a')}}));
		elem.appendChild(utils.node('div',{text:'Add note',attr: {'class': 'nowt-balloon-note'},events: {'touchend': utils.bind(this, this.copySelectionNote, '#8be58f')}}));
		this.ui.add.content.appendChild(elem);
		this.ui.edit = new Balloon();
		elem = utils.node('fragment');
		elem.appendChild(utils.node('div',{attr: {'style': 'background:#8be58f','class': 'nowt-balloon-cube'},events: {'touchend': utils.bind(this, this.editSelectionColor, '#8be58f')}}));
		elem.appendChild(utils.node('div',{attr: {'style': 'background:#73cbd3','class': 'nowt-balloon-cube'},events: {'touchend': utils.bind(this, this.editSelectionColor, '#73cbd3')}}));
		elem.appendChild(utils.node('div',{attr: {'style': 'background:#ffeb2a','class': 'nowt-balloon-cube'},events: {'touchend': utils.bind(this, this.editSelectionColor, '#ffeb2a')}}));
		elem.appendChild(utils.node('div',{attr: {'class':'nowt-balloon-remove'}, html: '<div></div>', events: {'touchend': utils.bind(this, this.removeSelection)}}));
		elem.appendChild(utils.node('div',{text:'Edit note',attr: {'class': 'nowt-balloon-note'},events: {'touchend': utils.bind(this, this.editSelectionNote)}}));
		this.ui.edit.content.appendChild(elem);

		/* create working selection */

		this.ui.selection = new Selection();
		this.ui.selection.setZIndex(this.selectionZIndex);
		this.ui.left = utils.node('div', {attr:{'class':'nowt-highlights-left'}});
		this.ui.right = utils.node('div', {attr:{'class':'nowt-highlights-right'}});
		utils.events(window, 'touchstart touchmove touchend touchleave touchcancel', utils.bind(this, this.handler));

		/* load selections, determine selections position */

		if (data) {
			var elems = document.body.getElementsByTagName('*'),
				nodes = [],
				counter = 0,
				total = elems.length,
				subcounter = 0,
				subtotal = 0,
				maxid = 0,
				subnodes = null;
			for (;counter<total;counter++) {
				if (~['STYLE','SCRIPT'].indexOf(elems[counter].tagName)) continue;
				nodes.push(elems[counter]);
				subnodes = elems[counter].childNodes;
				subcounter = 0;
				subtotal = subnodes.length;
				for (;subcounter<subtotal;subcounter++) subnodes[subcounter].nodeType == 3 && nodes.push(subnodes[subcounter]);
			}
			counter = data.length;
			var sel = null,
				selections = {},
				width = document.compatMode == 'CSS1Compat' ? document.documentElement.clientWidth : document.body.clientWidth
			while (counter--) {
				if (maxid<data[counter].id) maxid = data[counter].id;
				data[counter].start_container = nodes[data[counter].start_container];
				data[counter].end_container = nodes[data[counter].end_container];
				data[counter].note = !!data[counter].note;
				sel = this.addSelection(data[counter]);
				sel.boundingBox();
				selections[sel.id] = (sel.x / width)|0;
			};
			this.tellJava('highlight_pages '+JSON.stringify(selections));
			this.id = maxid;
		}
	};

	init.prototype = {

		options: {
			controlWidth: 12,
			controlHeight: 24,
			selectionMarging: 2,
			interactionTimeout: 300,
			noteLimit: 512,
			noteSelectionPreview: 100,
			interactionTapTimeLimit: 150,
			controlsTapRadius: 25,
			selectionZIndex: 9000,
			savedSelectionZIndex: 8000,
			savedSelectionDefaultColor: '#00ff00'
		},

		id: 0,

		showNotesIcons: function () {
			var width = document.compatMode == 'CSS1Compat' ? document.documentElement.clientWidth : document.body.clientWidth
			for (var prop in  this.selections) {
				if (!this.selections[prop].fastnote) {
					this.selections[prop].fastnote = utils.node('div', {attr:{'class':'nowt-highlights-fastnote'}, events:{'click':utils.bind(this, function (sel) {
						this.status.edit = true;
						this.editable = sel;
						this.ui.edit.show(this.editable);
						this.editSelectionNote();
					}, this.selections[prop])}});
					document.body.appendChild(this.selections[prop].fastnote);
				}
				if (this.selections[prop].note) {
					this.selections[prop].fastnote.style.top = this.selections[prop].start_y+'px';
					this.selections[prop].fastnote.style.left = this.selections[prop].x - (this.selections[prop].x%width) + width - 34+'px';
					this.selections[prop].fastnote.style.display = 'block';
				} else {
					this.selections[prop].fastnote.style.display = 'none';
				}
			}
		},

		hideNotesIcons: function () {
			for (var prop in  this.selections) {
				if (this.selections[prop].fastnote) {
					this.selections[prop].fastnote.style.display = 'none';
				}
			}
		},

		selections: {},

		status: {
			enabled: true,
			shown: false,
			word: false,
			add: false,
			note: false,
			edit: false
		},

		tellJava: function (data) {
			window.JavascriptEventListener && JavascriptEventListener.notify(data);
		},

		noteGet: function (id) {
			return typeof this.selections[id].note == 'string' ? this.selections[id].note : ( this.selections[id].note === true ? (window.JavascriptEventListener && JavascriptEventListener.get('highlight id='+id) || '') : '');
		},

		noteCounterUpdate: function () {
			setTimeout(function () {
				this.ui.noteCounter.innerHTML = this.options.noteLimit - this.ui.noteArea.value.replace(/^\s+|\s+$/,'').length;
			}.bind(this),1);
		},

		showNote: function () {
			if (!this.status.note) {
				document.body.appendChild(this.ui.note);
				this.status.note = true;
				window.getSelection().empty();
			}
		},

		hideNote: function () {
			if (this.status.note) {
				this.ui.noteArea.value = '';
				this.noteCounterUpdate();
				document.body.removeChild(this.ui.note);
				this.status.note = false;
			}
		},

		editSelectionNote : function (e) {
			e && e.stopPropagation();
			if (!this.editable) return;
			this.ui.noteSave.onclick = utils.bind(this, function () {
				var note = this.editable.note;
				this.editable.note = this.ui.noteArea.value.replace(/^\s+|\s+$/,'');
				if (this.editable.note == '') this.editable.note = false;
				if (note != this.editable.note) this.saveSelection(this.editable);
				this.cancelEditing();
				this.hideNote();
				this.enable();
			});
			this.ui.noteFragment.textContent = this.editable.getContent().substr(0,this.options.noteSelectionPreview);
			this.ui.noteFragment.style.background = 'rgba(' + parseInt(this.editable.color.substr(1,2),16) + ',' + parseInt(this.editable.color.substr(3,2),16) + ',' + parseInt(this.editable.color.substr(5,2),16) + ',0.5)';
			this.ui.noteArea.value = this.noteGet(this.editable.id);
			this.status.enabled = false;
			this.showNote();
			this.noteCounterUpdate();
		},

		saveSelection: function (sel) {
			var elems = document.body.getElementsByTagName('*'),
				found = 0,
				foundcounter = 0,
				counter = 0,
				total = elems.length,
				subcounter = 0,
				subtotal = 0,
				subnodes = null;
			sel = {
				id: sel.id,
				start_container: sel.start_container,
				end_container: sel.end_container,
				start_offset: sel.start_offset,
				end_offset: sel.end_offset,
				color: sel.color,
				content: sel.getContent(),
				note: this.noteGet(sel.id)
			};
			for (;counter<total;counter++) {
				if (~['STYLE','SCRIPT'].indexOf(elems[counter].tagName)) continue;
				if (sel.start_container === elems[counter]) {sel.start_container = foundcounter;if (++found === 2) break;}
				if (sel.end_container === elems[counter]) {sel.end_container = foundcounter;if (++found === 2) break;}
				subnodes = elems[counter].childNodes;
				subcounter = 0;
				subtotal = subnodes.length;
				for (;subcounter<subtotal;subcounter++) if (subnodes[subcounter].nodeType == 3) {
					foundcounter++;
					if (sel.start_container === subnodes[subcounter]) {sel.start_container = foundcounter;if (++found === 2) break;}
					if (sel.end_container === subnodes[subcounter]) {sel.end_container = foundcounter;if (++found === 2) break;}
				}
				foundcounter++;
			}
			this.tellJava('save_highlight '+JSON.stringify(sel));
			this.showNotesIcons();
		},

		addSelection: function (params, sel) {
			sel = new Selection();
			sel.note = params.note;
			sel.id = params.id;
			sel.setColor(params.color || this.options.savedSelectionDefaultColor);
			sel.setZIndex(sel.id + this.savedSelectionZIndex);
			sel.setPosition(params.start_container, params.start_offset, params.end_container, params.end_offset);
			this.selections[sel.id] = sel;
			return sel;
		},

		copySelection: function (color) {
			if (!this.ui.selection.selected) return false;
			var sel = this.addSelection({
				id: ++this.id,
				color: color,
				start_container: this.ui.selection.start_container,
				end_container: this.ui.selection.end_container,
				start_offset: this.ui.selection.start_offset,
				end_offset: this.ui.selection.end_offset,
				note: false
			});
			sel.select();
			this.destroy();
			this.saveSelection(sel);
			if (!this.status.shown) this.show();
		},

		copySelectionNote: function (color,e) {
			e && e.stopPropagation();
			if (!this.ui.selection.selected) return false;
			this.ui.noteSave.onclick = utils.bind(this, function () {
				var note = this.ui.noteArea.value.replace(/^\s+|\s+$/,'');
				var sel = this.addSelection({
					id: ++this.id,
					color: color,
					start_container: this.ui.selection.start_container,
					end_container: this.ui.selection.end_container,
					start_offset: this.ui.selection.start_offset,
					end_offset: this.ui.selection.end_offset,
					note: note == '' ? false : note
				});
				this.hideNote();
				sel.select();
				this.destroy();
				this.saveSelection(sel);
				if (!this.status.shown) this.show();
				this.enable();
			});
			this.ui.noteFragment.textContent = this.ui.selection.getContent().substr(0,100);
			this.ui.noteFragment.style.background = 'rgba(' + parseInt(this.ui.selection.color.substr(1,2),16) + ',' + parseInt(this.ui.selection.color.substr(3,2),16) + ',' + parseInt(this.ui.selection.color.substr(5,2),16) + ',0.5)';
			this.ui.noteArea.value = '';
			this.status.enabled = false;
			this.showNote();
			this.noteCounterUpdate();
		},

		showSelections: function () {for (var prop in this.selections) this.selections[prop].select();},

		show: function () {
			this.status.shown = true;
			this.enableSelectionEvents();
			this.showSelections();
			this.showNotesIcons();
		},

		hide: function () {
			this.status.shown = false;
			this.disableSelectionEvents();
			this.hideSelections();
			this.hideNotesIcons();
		},

		hideSelections: function () {for (var prop in this.selections) this.selections[prop].deselect();},

		enableSelectionEvents: function () {for (var id in this.selections) this.selections[id].ui.style.pointerEvents = '';},

		disableSelectionEvents: function () {for (var id in this.selections) this.selections[id].ui.style.pointerEvents = 'none';},

		editSelectionColor : function (color) {
			if (!this.editable) return;
			this.editable.setColor(color);
			this.saveSelection(this.editable);
			this.cancelEditing();
		},

		cancelEditing: function () {
			this.editable = false;
			this.ui.edit.hide();
			this.status.edit = false;
		},

		removeSelection: function (sel, silence) {
			if (this.editable) {
				sel = this.editable;
				this.cancelEditing();
			}
			sel.deselect();
			this.selections[sel.id].fastnote && this.selections[sel.id].fastnote.parentNode.removeChild(this.selections[sel.id].fastnote);
			delete this.selections[sel.id];
			if (!silence) this.tellJava('delete_highlight {id:'+sel.id+'}');
		},

		removeAll: function () {
			this.editable && this.cancelEditing();
			for (var prop in this.selections) this.removeSelection(this.selections[prop], true);
		},

		offset: {
			x: 0,
			y: 0
		},

		ui: {
			word: null,
			add: null,
			edit: null,
			selection: null,
			noteFragment: null,
			noteArea: null,
			noteCancel: null,
			noteSave: null,
			noteCounter: null,
			left: null,
			note: null,
			right: null
		},

		controls: function () {
			this.ui.left.style.left = this.ui.selection.start_x - this.options.selectionMarging - this.options.controlWidth + 'px';
			this.ui.left.style.top = this.ui.selection.start_y + this.ui.selection.start_height / 2 + this.options.controlHeight / 4 + 'px';
			this.ui.right.style.left = this.ui.selection.end_x + this.ui.selection.end_width + this.options.selectionMarging + 'px';
			this.ui.right.style.top = this.ui.selection.end_y + this.ui.selection.end_height / 2 + this.options.controlHeight / 4 + 'px';
		},

		enable: function () {
			this.status.enabled = true;
		},

		disable: function () {
			this.destroy();
			this.status.enabled = false;
		},

		adjust: function () {
			this.destroy();
			var width = utils.offsets().clientWidth,
				selections = {};
			for (var prop in this.selections) {
				if (this.selections[prop].selected) this.selections[prop].select();
				this.selections[prop].boundingBox();
				selections[prop] = (this.selections[prop].x / width)|0;
			}
			this.tellJava('highlight_pages '+JSON.stringify(selections));
		},

		handler: function mem(event) {
			if (event.type == 'touchend' && event.target == this.ui.note) {
				this.hideNote();
				this.enable();
		        return;
			}

			if (!this.status.enabled) return;
			var coords = utils.eventsParse(window, event),
				x = coords.x * 1,
				y = coords.y * 1,
				b = utils.nodeInside(event.target, this.ui.add.balloon),
				z = utils.nodeInside(event.target, this.ui.edit.balloon);
			
			switch (event.type) {
				case 'touchstart':
					if (b||z) {event.preventDefault()}
					if (this.status.add && !b) {
						mem.control = this.control(x, y);
						mem.control || this.destroy();
						this.ui.add.hide();
						event.preventDefault();
					} else if (this.status.edit && !z) {
						this.cancelEditing();
						event.preventDefault();
					} else if (!this.status.add && !this.status.edit && !this.status.word) {
						mem.touch = new Date().getTime();
						mem.coords = coords;
						mem.timer = setTimeout(utils.bind(this, function () {
							this.disableSelectionEvents();
							this.word(x, y);
							mem.control = 'word';
						}), this.options.interactionTimeout);
					}
				break;
				case 'touchmove':
					mem.touch = false;
					mem.timer && clearTimeout(mem.timer);
					if (mem.control) {
						mem.control === 'word' ? this.word(x, y) : (mem.control = this.move(x, y, mem.control));
						event.preventDefault();
					}
				break;
				case 'touchend':case 'touchleave':case 'touchcancel':
					mem.timer && clearTimeout(mem.timer);
					mem.control = false;
					switch (true) {
						case this.status.word:
							this.ui.word.hide();
							this.ui.add.show(this.ui.selection);
							document.body.appendChild(this.ui.left);
							document.body.appendChild(this.ui.right);
							this.controls();
							this.status.word = false;
							this.status.add = true;
							event.preventDefault();
						break;
						case this.status.add:
							this.ui.add.show(this.ui.selection);
							this.controls();
							event.preventDefault();
						break;
						case !!(!this.status.add && !this.status.edit && !this.status.word && mem.touch):
							var sel = utils.nodeInside(event.target, utils.bind(this, function (elem) {return elem.nowt_selection_reference;}));
							if (sel && ((new Date().getTime() - mem.touch) < this.options.interactionTapTimeLimit)) {
								this.status.edit = true;
								this.editable = sel.nowt_selection_reference;
								this.ui.edit.show(this.editable);
								event.preventDefault();
							}
							mem.touch = false;
						break;
					}
				break;
			}
		},

		control: function (x, y) {
			if (this.status.add) {
				var leftDist = utils.dist(x, y, this.ui.left.offsetLeft + this.ui.left.offsetWidth/2, this.ui.left.offsetTop + this.ui.left.offsetHeight/2),
					rightDist = utils.dist(x, y, this.ui.right.offsetLeft + this.ui.right.offsetWidth/2, this.ui.right.offsetTop + this.ui.right.offsetHeight/2);
				switch (true) {
					case leftDist <= this.options.controlsTapRadius && ( rightDist > this.options.controlsTapRadius || rightDist >= leftDist):
						this.offset.x = this.ui.selection.start_x - x;
						this.offset.y = (this.ui.selection.start_y + this.ui.selection.start_height / 2) - y;							
						return 'left';
					break;
					case rightDist <= this.options.controlsTapRadius && ( leftDist > this.options.controlsTapRadius || leftDist >= rightDist):
						this.offset.x = this.ui.selection.end_x + this.ui.selection.end_width - x;
						this.offset.y = (this.ui.selection.end_y + this.ui.selection.end_height / 2) - y;
						return 'right';
					break;
				}
			}
			this.offset.x = 0;
			this.offset.y = 0;
			return false;
		},

		word: function (x, y) {
			var caret = this.caretFromPoint(x,y);
			if (caret == null) return;
			if (caret.endContainer.nodeType != 3) return;
			var index = null;
			
			index = caret.endContainer.textContent.substr(caret.endOffset);
			index = /([\s\n\r.,\'\"_\+!?-]|$)/.exec(index);
			if (index == null) return;
			var rightOffset = caret.endOffset + index.index;

			index = caret.endContainer.textContent.substring(0, caret.endOffset);
			index = /[^\s\n\r.,\'\"_\+!?-]+$/.exec(index);
			if (index == null) return;
			var leftOffset = index.index;
				
			this.ui.selection.setPosition(caret.endContainer, leftOffset, caret.endContainer, rightOffset);
			this.ui.selection.select();
			this.ui.word.setContent(caret.endContainer.textContent.slice(leftOffset, rightOffset)).show(this.ui.selection);;
			this.status.word = true;
			this.status.interaction = true;
			this.status.actions = false;
		},

		caretFromPoint: function (x, y) {
			var offsets = utils.offsets();
			x = x - offsets.scrollLeft;
			y = y - offsets.scrollTop;
			return (document.caretRangeFromPoint(x, y) ||
				document.caretRangeFromPoint(x+10, y) ||
				document.caretRangeFromPoint(x-10, y) ||
				document.caretRangeFromPoint(x, y+10) ||
				document.caretRangeFromPoint(x, y-10));
		},

		destroy: function () {
			this.cancelEditing();
			this.status.word = false;
			this.status.add = false;
			try{document.body.removeChild(this.ui.left);
			document.body.removeChild(this.ui.right);}catch(e){}
			this.ui.word.hide();
			this.ui.add.hide();
			this.ui.selection.deselect();
			this.enableSelectionEvents();
		},
		
		move: function (x, y, control) {
			x += this.offset.x;
			y += this.offset.y;
			var caret = this.caretFromPoint(x, y),
				sel = this.ui.selection;
			if (caret === null) return control;
			if (control == 'left') {
				if (sel.end_container == caret.endContainer ? sel.end_offset < caret.endOffset : caret.endContainer.compareDocumentPosition(sel.end_container) === 2) {
					control = 'right';
					this.offset.x = this.offset.x*-1;
					sel.setPosition(sel.end_container,sel.end_offset,caret.endContainer,caret.endOffset) && (sel.select(),this.controls());
				} else {
					sel.setPosition(caret.endContainer, caret.endOffset, sel.end_container, sel.end_offset) && (sel.select(),this.controls());
				}
			} else {
				if (sel.start_container == caret.endContainer ? sel.start_offset > caret.endOffset : sel.start_container.compareDocumentPosition(caret.endContainer) === 2) {
					this.offset.x = this.offset.x*-1;
					sel.setPosition(caret.endContainer, caret.endOffset, sel.start_container, sel.start_offset) && (sel.select(),this.controls());
					control = 'left';
				} else {
					sel.setPosition(sel.start_container,sel.start_offset,caret.endContainer,caret.endOffset) && (sel.select(),this.controls());
				}
			}
			if (control == 'left') {
				this.ui.left.style.left = x - this.options.selectionMarging - this.options.controlWidth + 'px';
				this.ui.left.style.top = y + this.options.controlHeight/4 + 'px';
			} else {
				this.ui.right.style.left = x + this.options.selectionMarging + 'px';
				this.ui.right.style.top = y + this.options.controlHeight/4 + 'px';
			}
			return control;
		},
	};
	return new init(XYNTA);
})()));
