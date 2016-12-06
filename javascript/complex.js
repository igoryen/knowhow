
// 1
function Complex (real, imaginary) {
	if ( isNaN( real ) || isNaN( imaginary ) ) { // 2
		throw new TypeError();
	};
	// 3
	this.r = real;
	this.i = imaginary;
}

// 4

// 5
Complex.prototype.add = function (that) {
	return new Complex(
		this.r + that.r, // 6
		this.i + that.i
	);
};

// 7
Complex.prototype.mul = function (that) {
	return new Complex(
		this.r * that.r - this.i * that.i,
		this.r * that.i + this.i * that.r
	);
};

// 8
Complex.prototype.mag = function () {
	return Math.sqrt( 
		this.r * this.r + this.i * this.i
	);
};

// 9
Complex.prototype.neg = function() {
	return new Complex(
		-this.r, -this.i
	);
};


Complex.prototype.toString = function ( ) {
	return "{" + this.r + " , " + this.i + "}";
};

// 10
Complex.prototype.equals = function ( that ) {
	return that != null
		&& that.constructor === Complex
		&& this.r === that.r
		&& this.i === that.i
};

// 11, 12

Complex.ZERO = new Complex( 0, 0 );
Complex.ONE  = new Complex( 1, 0 );
Complex.I    = new Complex( 0, 1 );

Complex.parse = function( s ) {
	try {
		var m = Complex._format.exex( s );
		return new Complex( 
			parseFloat( m[1] ),
			parseFloat( m[2] )
		);
	} catch ( x ) {
		throw new TypeError( "Can't parse '" + s + "' as a complex number." );
	}
};

Complex._format = /^\{([^,]+),([^}]+)\}$/;

// USAGE

var c = new Complex( 2, 4 );
var d = new Complex( c.i, c.r );

console.log(
	c.add(d).toString()
);

Complex.parse( c.toString() ).
	add( c.neg() ).
	equals( Complex.ZERO);

/* -----------------------------------------

1. constructor
2. ensure that arguments A and B are numbers
3. These are 2 instance fields. They are the state of the object.
4. The following are the instance methods of the class.
	These methods are inherited by all instances.
	They provide the shared behavior of the class.
	The JS instance methods must use 'this' to access the instance fields.
5. Add a complex number to this one.
	return the sum in a new object.
6. Add the real part of this number to the real part of the number being added.
7. Multiply this complex number by another and return the product.
8. Return the real magnitude of a complex number.
	the real magnitude = the distance from the origin (0,0) of the complex plane.
9. negate the passed number
10. Test whether this complex number has the same value as another
11. Class fields
12. Class fields that hold useful predefined complex numbers.
	Their names are uppercase to indicate that they are constants
*/