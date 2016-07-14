window.__nowtload__ = (function () {
	var name = 'nowtload',
		queue = [],
		loaded = false,
		run = function (handler) {
			while (handler = queue.shift()) {handler();}
		},
		add = function (handler) {
			handler && typeof handler === 'function' && queue.push(handler) && loaded && run();
		},
		remove = function (handler) {
			var counter = queue.length;
			while (counter--) {
				if(queue[counter] === handler) {queue.splice(counter, 1);}
			}
		},
		clone = function (obj){
			if (obj == null || typeof(obj) != 'object') {return obj;}
			var prop, successor = new obj.constructor();
			for (prop in obj) successor[prop] = clone(obj[prop]);
			return successor;
		},
		aEL = clone(this.addEventListener),
		rEL = clone(this.removeEventListener);
	this.addEventListener = function () {
		return arguments[0] === name && this === window ? add.call(this, arguments[1]) : aEL.apply(this, Array.prototype.slice.call(arguments));
	};
	this.removeEventListener = function () {
		return arguments[0] === name && this === window ? remove.call(this, arguments[1]) : rEL.apply(this, Array.prototype.slice.call(arguments));
	};
	this['on'+name] = null;
	return function () {
		loaded = true;
		if (this['on'+name] !== null) {this['on'+name]();}
		run();
	};
})();
