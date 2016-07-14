javascript:(function () {
	window.nowt_styling = (window.nowt_styling || (function () {
		var priv = {
				node: function(node, params){
					switch(node){
						case 'fragment':return document.createDocumentFragment();break;
						default:
							node = document.createElement(node);
							if(params){
								var prop;
								if(params.text)node.appendChild(document.createTextNode(params.text+''));
								if(params.html)node.innerHTML = params.html+'';
								if(params.css)for(prop in params.css)node.style[prop] = params.css[prop];
								if(params.attr)for(prop in params.attr)node.setAttribute(prop,params.attr[prop]);
							}
							return node;
						break;
					}
				},
				bind : function(obj,method){
					var prefix = Array.prototype.slice.call(arguments,2);
					return function(){
						return method.apply(obj, prefix.concat(Array.prototype.slice.call(arguments)))
					}
				},
				log: function (data) { console.log(data); },
				options: {
					style: {
						theme:'default',
						font:null,
						size:3,
						line:1,
						margin:1
					},
					locale: 'en',
					fonts: ['Arial', 'Ascender', 'Baskerville', 'Malabar', 'Georgia', 'Joanna', 'Mundo', 'Dutch', 'Gill Sans', 'Trebuchet MS', 'Mundo Sans', 'Dante', 'Century School Book', 'Ascender Sans']
				},
				style: {
					theme: {
						'default' : {
							name: "Default theme",
							colorBackground: "#ffffff",
							colorText: "#000000",
							colorLink: "#ff0000",
							colorLinkHover: "#0000ff"
						},
						'night' : {
							name: "Night",
							colorBackground: "#515151",
							colorText: "#ffffff",
							colorLink: "#ff0000",
							colorLinkHover: "#0000ff"
						},
						'gray' : {
							name: "Gray",
							colorBackground: "#cacaca",
							colorText: "#515151",
							colorLink: "#ff0000",
							colorLinkHover: "#0000ff"
						},
						'butter' : {
							name: "Butter",
							colorBackground: "#fefefe",
							colorText: "#6c6058",
							colorLink: "#ff0000",
							colorLinkHover: "#0000ff"
						},
						'mocha' : {
							name: "Mocha",
							colorBackground: "#a69d94",
							colorText: "#fafdf2",
							colorLink: "#ff0000",
							colorLinkHover: "#0000ff"
						},
						'sepia' : {
							name: "Sepia",
							colorBackground: "#fef2da",
							colorText: "#000000",
							colorLink: "#ff0000",
							colorLinkHover: "#0000ff"
						}
					},
					font: [],
					size: [0.5, 0.7, 0.9, 1, 1.1, 1.3, 1.6, 2],
					line: [0.8, 1, 1.2],
					margin: [5, 25, 45]
				},
				locales: {
					size: { en:  'Text size' },
					lineSpacing: { en: 'Line spacing' },
					margin: { en: 'Margins'},
					font: { en: 'Font' },
					theme: { en: 'Theme'}
				},
				localesGet: function (string) {
					return typeof this.locales[string] !== 'undefined' ? this.locales[string][this.options.locale] : '';
				},
				ui: {
					wrapper: null,
					inner: null
				},
				set: function (prop, value, elem, elems) {
					this.options.style[prop] = value;
					elems = elems.childNodes;
					var counter = elems.length;
					while (counter--) if(elems[counter] === elem) {elems[counter].className+=' styling-selected'}else{elems[counter].className = elems[counter].className.replace(/\bstyling-selected\b/g,'')};
					this.save();
					publ.applyStyling();
				},
				tellJava: function (data) {
					window.JavascriptEventListener && JavascriptEventListener.notify(data);
				},
				save: function () {
					if (!window.JavascriptEventListener) return false;
					JavascriptEventListener.set('styling', '{theme:"'.concat(
						this.options.style.theme,
						'",font:"',this.options.style.font.replace(/"/g,'\\"'),
						'",size:',this.options.style.size,
						',line:',this.options.style.line,
						',margin:',this.options.style.margin,
					'}'));
				}
			},
			init = function () {
				// load options from native
				if (window.JavascriptEventListener) {
					var json = JavascriptEventListener.get('styling');
					try{json = new Function('return '+json+';')();}catch(e){}
					if (typeof json === "object") priv.options.style = json;
				}

				// detect fonts from list
				var	counter = 0,
					detect = (function() {
						var baseFonts = ['monospace', 'sans-serif', 'serif'],
							testString = "mmmmmmmmmmlli",
							testSize = '72px',
							h = document.getElementsByTagName("body")[0],
							s = document.createElement("span"),
							defaultWidth = {},
							defaultHeight = {};
						s.style.fontSize = testSize;
						s.innerHTML = testString;
						for (var index in baseFonts) {
							s.style.fontFamily = baseFonts[index];
							h.appendChild(s);
							defaultWidth[baseFonts[index]] = s.offsetWidth;
							defaultHeight[baseFonts[index]] = s.offsetHeight;
							h.removeChild(s);
						}
						function detect(font) {
							var detected = false;
							for (var index in baseFonts) {
								s.style.fontFamily = font + ',' + baseFonts[index];
								h.appendChild(s);
								var matched = (s.offsetWidth != defaultWidth[baseFonts[index]] || s.offsetHeight != defaultHeight[baseFonts[index]]);
								h.removeChild(s);
								detected = detected || matched;
							}
							return detected;
						}
						return detect;
					})();
				for (;counter<priv.options.fonts.length;counter++) {
					console.log(detect(priv.options.fonts[counter]));
					if(detect(priv.options.fonts[counter])) priv.style.font.push(priv.options.fonts[counter]);
				}
				priv.options.style.font = priv.style.font[0];

				// isert stylesheet
				priv.stylesheet = priv.node('style',{text:''});
				document.body.appendChild(priv.stylesheet);

				// build ui
				document.body.appendChild(priv.node('style',{text:'.styling{-webkit-backface-visibility: hidden;-webkit-perspective:1000;width: 100%;height: 100%;left:0;top:0;}@-webkit-keyframes styling{0%{opacity:0;-webkit-transform:translateY(10px) scale(0.9);right:0;bottom:0;width:auto;height:auto;overflow:auto}100%{opacity:1;right:0;bottom:0;width:auto;height:auto;overflow:auto}}.styling-shown,.styling-hidden{-webkit-animation-name:styling;-webkit-animation-duration:0.2s;-webkit-animation-timing-function:linear;display:block!important}.styling-hidden{-webkit-animation-direction:reverse;right:auto!important;bottom:auto!important;width:0;height:0;overflow:hidden!important;opacity:0}.styling{z-index: 100000000000000;display:none;overflow:auto;position:fixed;top:0;}.styling-table{width:100%;height:100%}.styling-table td{text-align:center}.styling-inner{color:#333;max-width:370px;display:inline-block;background:#FFF;box-shadow:0 0 100px -15px #000;padding:10px;border-radius:10px;border-bottom:10px solid #EFEFEF;font-size:0;line-height:0;text-align:center}@media all and (max-width:410px){.styling-inner{max-width:180px!important}}.styling-title{font:700 16px/20px Helvetica,Arial,sans-serif;text-align:left;padding-bottom:5px}.styling-selected{border:2px solid #359AF9!important}.styling-block{display:inline-block;padding:6px;width:168px;vertical-align:bottom}.styling-block-wide{padding:6px}#styling-size,#styling-line,#styling-margin,#styling-theme{margin:0;padding:0}#styling-size li,#styling-line li,#styling-margin li,#styling-theme li{list-style:none;margin:1px;padding:0;cursor:pointer;display:inline-block;border-radius:5px;border:2px solid #fff;color:#777;width:50px;height:65px;background:#EFEFEF;vertical-align:bottom}#styling-size li{text-align:center;width:35px;line-height:35px;height:35px;vertical-align:middle;background:none}#styling-font{box-shadow:0 0 5px #cccinset;border-radius:3px;color:#333;margin:3px 0 3px;outline:0 none;display:inline-block;padding:3px 4px;width:160px;overflow:auto;text-align:left;height:130px;position:relative}#styling-font li{margin:1px 0;padding:2px;cursor:pointer;font:normal 16px/20px Helvetica,Arial,sans-serif}#styling-font li.styling-selected{border:0!important;background:#359AF9;border-radius:2px;color:#FFF}.styling-theme-butter,.styling-theme-default{box-shadow:0 0 5px #ccc inset}.styling-line-0 div{border-top:2px solid #bbb;border-bottom:2px solid #bbb;margin:7px 6px}.styling-line-0 div *{border-top:2px solid #bbb;border-bottom:2px solid #bbb;margin:5px 0}.styling-line-0 div div div div{height:5px}.styling-line-1 div{border-top:2px solid #bbb;border-bottom:2px solid #bbb;margin:7px 6px}.styling-line-1 div *{border-top:2px solid #bbb;border-bottom:2px solid #bbb;margin:8px 0}.styling-line-1 div div div div{display:none}.styling-line-1 div div div{height:7px}.styling-line-2 div{border-top:2px solid #bbb;border-bottom:2px solid #bbb;margin:7px 6px}.styling-line-2 div div{border-top:2px solid #bbb;border-bottom:2px solid #bbb;margin:14px 0;height:14px}.styling-line-2 div div *{display:none}.styling-margin-0 div{margin:5px;border:2px dashed #bbb;height:51px;border-radius:5px}.styling-margin-1 div{margin:9px;border:2px dashed #bbb;height:43px;border-radius:5px}.styling-margin-2 div{margin:14px;border:2px dashed #bbb;height:33px;border-radius:5px}'}));
					priv.ui.inner = priv.node('div', { attr: {'class':'styling-inner'} });
					priv.ui.wrapper = priv.node('div', {
						html: '<table class="styling-table"><tbody><tr><td></td></tr></tbody></table>',
						attr: {'class': 'styling'}
					});
					priv.ui.wrapper.onclick = priv.bind(this, this.hide);
					priv.ui.inner.onclick = function (e) {e.stopPropagation();};
					var size_wrapper = priv.node('div', {attr: {'class': 'styling-block-wide'}}),
						size_title = priv.node('div', {text: priv.localesGet('size'), attr: {'class': 'styling-title'}}),
						size_list = priv.node('ul', {attr: {'id': 'styling-size'}}),
						line_wrapper = priv.node('div', {attr: {'class': 'styling-block'}}),
						line_title = priv.node('div', {text: priv.localesGet('lineSpacing'), attr: {'class': 'styling-title'}}),
						line_list = priv.node('ul', {attr: {'id': 'styling-line'}}),
						margin_wrapper = priv.node('div', {attr: {'class': 'styling-block'}}),
						margin_title = priv.node('div', {text: priv.localesGet('margin'), attr: {'class': 'styling-title'}}),
						margin_list = priv.node('ul', {attr: {'id': 'styling-margin'}}),
						font_wrapper = priv.node('div', {attr: {'class': 'styling-block'}}),
						font_title = priv.node('div', {text: priv.localesGet('font'), attr: {'class': 'styling-title'}}),
						font_list = priv.node('ul', {attr: {'id': 'styling-font'}}),
						theme_wrapper = priv.node('div', {attr: {'class': 'styling-block'}}),
						theme_title = priv.node('div', {text: priv.localesGet('theme'), attr: {'class': 'styling-title'}}),
						theme_list = priv.node('ul', {attr: {'id': 'styling-theme'}}),
						total = priv.style.size.length,
						counter = 0,
						elem = null;
					for (;counter<total;counter++) {
						elem = priv.node('li', {
							text: 'A',
							attr: {
								'class': counter === priv.options.style.size ? 'styling-selected' : '',
								'style': 'font-size:'+(16*priv.style.size[counter])+'px'
							}
						});
						elem.onclick = priv.bind(priv, priv.set, 'size', counter, elem, size_list);
						size_list.appendChild(elem);
					}
					total = priv.style.line.length;
					counter = 0;
					for (;counter<total;counter++) {
						elem = priv.node('li', {
							html: '<div><div><div><div></div></div></div></div>',
							attr: {'class': 'styling-line-'+counter+(counter === priv.options.style.line ? ' styling-selected' : '')}
						});
						elem.onclick = priv.bind(priv, priv.set, 'line', counter, elem, line_list);
						line_list.appendChild(elem);
					}
					total = priv.style.margin.length;
					counter = 0;
					for (;counter<total;counter++) {
						elem = priv.node('li', {
							html: '<div></div>',
							attr: {'class': 'styling-margin-'+counter+(counter === priv.options.style.margin ? ' styling-selected' : '')}
						});
						elem.onclick = priv.bind(priv, priv.set, 'margin', counter, elem, margin_list);
						margin_list.appendChild(elem);
					}
					total = priv.style.font.length;
					counter = 0;
					for (;counter<total;counter++) {
						elem = priv.node('li', {
							text: priv.style.font[counter],
							attr: {'class': priv.style.font[counter] === priv.options.style.font ? ' styling-selected' : ''}
						});
						elem.onclick = priv.bind(priv, priv.set, 'font', priv.style.font[counter], elem, font_list);
						font_list.appendChild(elem);
					}
					for (counter in priv.style.theme) {
						elem = priv.node('li', {
							attr: {
								'class': 'styling-theme-'+counter+(counter === priv.options.style.theme ? ' styling-selected' : ''),
								'style': 'background:'+priv.style.theme[counter].colorBackground
							}
						});
						elem.onclick = priv.bind(priv, priv.set, 'theme', counter, elem, theme_list);
						theme_list.appendChild(elem);
					}
					size_wrapper.appendChild(size_title);
					size_wrapper.appendChild(size_list);
					line_wrapper.appendChild(line_title);
					line_wrapper.appendChild(line_list);
					margin_wrapper.appendChild(margin_title);
					margin_wrapper.appendChild(margin_list);
					font_wrapper.appendChild(font_title);
					font_wrapper.appendChild(font_list);
					theme_wrapper.appendChild(theme_title);
					theme_wrapper.appendChild(theme_list);
					priv.ui.inner.appendChild(size_wrapper);
					priv.ui.inner.appendChild(line_wrapper);
					priv.ui.inner.appendChild(margin_wrapper);
					priv.ui.inner.appendChild(font_wrapper);
					priv.ui.inner.appendChild(theme_wrapper);
					priv.ui.wrapper.getElementsByTagName('td')[0].appendChild(priv.ui.inner);
					document.body.appendChild(priv.ui.wrapper);
					
					// apply default styles
					this.applyStyling();
			},
			publ = {
				padding: function () {
					return priv.style.margin[priv.options.style.margin];
				},
				show: function () {
					priv.ui.wrapper.style.display = 'block';
					document.body.appendChild(priv.ui.wrapper);
					if (window.nowt_highlights) window.nowt_highlights.disable();
					priv.tellJava('styling 1');
				},
				hide: function () {
					priv.ui.wrapper.style.display = 'none';
					if (window.nowt_highlights) window.nowt_highlights.enable();
					priv.tellJava('styling 0');
				},
				applyStyling: function () {
					// prepare
					var sp = window.nowt_subpager,
						hl = window.nowt_highlights,
						sh = false;
					document.body.display = 'none';
					priv.ui.wrapper.parentNode.removeChild(priv.ui.wrapper);
					if (hl && hl.status.shown) {sh = true;hl.destroy();hl.hide();}

					// apply
					priv.stylesheet.textContent = 'html, body {margin:0;padding:'.concat(
						(sp?0:priv.style.margin[priv.options.style.margin]),
						'px;background:',
						priv.style.theme[priv.options.style.theme].colorBackground,
						';font-family:',
						priv.options.style.font,
						';}a {color:',
						priv.style.theme[priv.options.style.theme].colorLink,
						';}a:hover {color:',
						priv.style.theme[priv.options.style.theme].colorLinkHover,
						';}'
					);
					
					var elem = document.body.getElementsByTagName('*'),
						i = elem.length;
					while (i--) {
						if (typeof elem[i]['data-sfs'] !== 'undefined') continue;
						elem[i]['data-sfs'] = parseInt(window.getComputedStyle(elem[i],null).getPropertyValue("font-size"),10)||16;
						elem[i]['data-slh'] = parseInt(window.getComputedStyle(elem[i],null).getPropertyValue("line-height"),10)||elem[i]['data-sfs'];
					}
					i = 0;
					for (;i<elem.length;i++) {
						elem[i].style.color = priv.style.theme[priv.options.style.theme][elem[i].tagName==='A'?'colorLink':'colorText'];
						elem[i].style.fontSize = (elem[i]['data-sfs']*priv.style.size[priv.options.style.size])+'px';
						elem[i].style.lineHeight = (elem[i]['data-slh']*priv.style.size[priv.options.style.size]*priv.style.line[priv.options.style.line])+'px';
						elem[i].style.fontFamily = priv.options.style.font;
						elem[i].style.backgroundColor = 'transparent';
					}

					// restore
					if (sp) {
						sp.options.padding = [
							priv.style.margin[priv.options.style.margin], priv.style.margin[priv.options.style.margin],
							priv.style.margin[priv.options.style.margin], priv.style.margin[priv.options.style.margin]
						];
						sp.paginate();
					}
					if (hl) hl.adjust();
					if (sh) hl.show();
					document.body.appendChild(priv.ui.wrapper);
					document.body.style.display = '';
				}
			};
		init.prototype = publ;
		return new init();
	})());
})()
