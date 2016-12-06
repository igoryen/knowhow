// 1
function Range (from, to) {
	this.from = from; // 2
	this.to	  = to; // 2
}

// 3
Range.prototype.includes = 
function (x) {
	return this.from <= x  &&  x <= this.to;
};

Range.prototype.forEach = 
function (f) {
	for (var x = Math.ceil(this.from); x <= this.to; x++) {
		f(x);
	};
};

Range.prototype.toString = 
function () {
	return "(" + this.from + " ... " + this.to + ")"; 
};


// using the object

var r = new Range(1, 3); // 4
console.log(
	r.includes(2)
	);

r.forEach(function(x){
	console.log(x);
});
console.log(r);


/*
1. constructor. Purpose: initialize new range objects.
2. these properties are the state of the object.
	they are 'own', noninherited, unique to this object
3. use the automatically created predefined prototype object with its 'constructor' property
	add methods to the prototype one at a time

4. create a Range object
5. adding the 'constructor' property explicitly
*/