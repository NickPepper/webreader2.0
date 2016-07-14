javascript:(function (symbols, dots, empty) {
	var ishere = function (elem) {
			var rect = elem.getClientRects()[0];
			return rect && rect.top >= 0 && rect.left >= 0 && rect.left < (document.compatMode == 'CSS1Compat' ? document.documentElement.clientWidth : document.body.clientWidth);
		},
		issensible = function (elem) {
			return elem && elem.nodeType == 1 && ~[
				'BODY','P','DIV','TD','TH','TABLE','UL','OL','LI','H1','H2','H3','H4','SECTION','ARTICLE','MARK'
			].indexOf(elem.tagName.toUpperCase());
		},
		isinside = function (child, parent) {
			while(child){
				if (child === parent) return true;
				child = child.parentNode;
			}
			return false;
		},
		selected = [],
		elems = document.getElementsByTagName('*'),
		counter = 0,
		range = document.caretRangeFromPoint(0,0),
		subcounter = 0,
		text = '',
		temp = document.createElement('div'),
		total = elems.length;
	for (;counter<total;counter++) {
		if (ishere(elems[counter]) && issensible(elems[counter])) selected.push(elems[counter]);
	}
	counter = 0;
	(function remove() {
		if (counter == selected.length) return;
		subcounter = selected.length;
		while (subcounter--) {
			if (subcounter == counter) continue;
			if (isinside(selected[subcounter], selected[counter])) {
				selected.splice(subcounter, 1);
				subcounter++;
			} 
		}
		counter++;
		remove()
	})();
	if (selected.length == 0) {
		range.setEndAfter(document.body);
		selected = range.cloneContents();
		while (selected.firstChild) temp.appendChild(selected.firstChild);
		text = dots;
	} else {
		counter = 0;
		total = selected.length;
		for (;counter<total;counter++) temp.appendChild(selected[counter].cloneNode(true));
	}
	elems = temp.getElementsByTagName('script');
	counter = elems.length;
	while (counter--) elems[counter].parentNode.removeChild(elems[counter]);
	elems = temp.getElementsByTagName('style');
	counter = elems.length;
	while (counter--) elems[counter].parentNode.removeChild(elems[counter]);
	var prepared = temp.textContent.replace(/^\s+/,'').substr(0, symbols).replace(/\s+$/,'');
	text = prepared != '' ? text+prepared+dots : empty;
	window.JavascriptEventListener && JavascriptEventListener.notify('bookmark '+text);
})(140, '...', '')
