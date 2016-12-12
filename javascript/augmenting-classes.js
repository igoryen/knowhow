Number.prototype.times = function ( f, context ) {
	var n = this.valueOf();
	for (var i = 0; i < n; i++) {
		f.call(context, i);
	}
};

var n = 3; // 1
n.times( function( n ) {
	console.log("Hello!");
});

String.prototype.trim = String.prototype.trim || function () {
	if( !this ) {
		return this;
	}
	return this.replace(/^\s+|\s+$/g, "");
};

Function.prototype.getName = function () {
	return this.name || this.toString().match(/function\s*([^()*]\(/)[1];
};



//

/*
1. the iteration number OR the amount of iterations that need to be made.
2. 
*/