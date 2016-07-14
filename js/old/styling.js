javascript:(function () {
	window.nowt_styling = (window.nowt_styling || (function () {
		var priv = {
				detector: function() {
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
					this.detect = detect;
				}
			},
			publ = {
				padding: function () {return priv.json ? priv.json.margin*1 : 0;},
				getFonts: function () {
					var detector = new priv.detector(),
						fonts = ['Arial', 'Ascender', 'Baskerville', 'Malabar', 'Georgia', 'Joanna', 'Mundo', 'Dutch', 'Gill Sans', 'Trebuchet MS', 'Mundo Sans', 'Dante', 'Century School Book', 'Ascender Sans'],
						counter = 0,
						available = [];
					for (;counter<fonts.length;counter++) if(detector.detect(fonts[counter])) available.push(fonts[counter]);
					JavascriptEventListener.setFonts(available);
				},
				applySettings: function (json) {
					try{json = new Function('return '+json+';')();}catch(e){}
					if (typeof json !== "object") return;
					if (!priv.stylesheet) {
						priv.stylesheet = document.createElement('style');
						document.body.appendChild(priv.stylesheet);
					}
					if (window.nowt_subpager) {
						priv.stylesheet.textContent = 'html, body {margin:0;padding:0px;background:'.concat(json.background,
							';font:', json.fontsize, 'px/', json.lineheight, '% ', json.font, ';}a{color:',
							json.linkcolor, ';}a:hover{color:', json.activelinkcolor, ';}'
						);
					} else {
						priv.stylesheet.textContent = 'html, body {margin:0;padding:'.concat( json.margin,
							'px;background:', json.background, ';font:', json.fontsize, 'px/', json.lineheight, '% ', json.font,
							';}a{color:', json.linkcolor, ';}a:hover{color:', json.activelinkcolor, ';}'
						);
					}
					var elems = document.body.getElementsByTagName('*'),
						counter = elems.length;
					while (counter--) {
						if (elems[counter].nowt_styling_immune) continue;
						elems[counter].style.color = json.color;
						elems[counter].style.fontSize = json.fontsize+'px';
						elems[counter].style.lineHeight = json.lineheight+'%';
						elems[counter].style.fontFamily = json.font;
						elems[counter].style.backgroundColor = 'transparent';
					}
					if (window.nowt_subpager) {
						json.margin = json.margin*1;
						window.nowt_subpager.options.padding = [json.margin, json.margin, json.margin, json.margin];
						window.nowt_subpager.paginate();
					}
					if (window.nowt_highlights) window.nowt_highlights.adjust();
					priv.json = json;
				}
			};
		return publ;
	})());
})()
