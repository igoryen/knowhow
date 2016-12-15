var p = {
	x: 1.0, // 1
	y: 1.0, // 1

	// 2
	get r() {
		return Math.sqrt( this.x * this.x + this.y * this.y );
	},
	set r( newvalue ) {
		var oldvalue = this.x * this.x + this.y * this.y;
		var ratio = newvalue / oldvalue;
		
		this.x *= ratio;
		this.y *= ratio; 
	},
	// 3
	get theta() {
		return Math.atan2( this.y, this.x );
	}
};

var q = Object.create( p );
q.x = 1;
q.y = 1;

console.log( q.r );
console.log( q.theta );

// =====================================================
// 4
var serialnum = {
	$n: 0, // 5
	get next() {
		return this.$next++; // 6
	},
	set next( n ) {
		if ( n > this.$n ) {
			this.$n = n;
		}
		else {
			throw "Serial number can only be set to a larger value (than " + this.$n + ")";
		}
	}
};

var s = Object.create( serialnum );
// 7
console.log( 
	s.next = 6, 
	s.next = 7,
	s.next = 8, 
	s.next = 9, 
	s.next = 11, 
	s.next = 14
);
// 10
// console.log( 
// 	s.next = 4
// );
//======================================================

var random = {
	// 8
	get octet() {
		return Math.floor( Math.random() * 256 ); // 9
	},
	get uint16() {
		return Math.floor( Math.random() * 65536 );
	},
	get int16() {
		return Math.floor( Math.random() * 65536 ) - 32768;
	}
};


var rand = Object.create( random );

console.log(
	rand.octet,
	rand.uint16,
	rand.int16
);

/*
1. a regular read-write data property
2. `r()` a read-and-write accessor property with getter and setter
3. `theta()` a read-only accessor property with getter only
4. This object generates strictly increasing serial numbers
5. a data property. Holds the next serial number. 
	The name `$n` (PHP style, with a dollar sign) hints that it's a provate property
6. return the current value and then increment it.
7. the accessor property is a PROPERTY, so you don't pass a value to it, but use `=`.
8. Accessor properties. They return random numbers.
9. yield a random number between 0 and 255 each time octet() is evaluated.
10. Commented out because it demonstrates an error and the execution doesn't go further from there.

*/