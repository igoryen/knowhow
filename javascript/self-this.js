var o = {
	m: function () {
		var self = this; // 1
		console.log( this === o );
		f();

		function f() { // 2
			console.log( this === o ); // 3
			console.log( self === o ); // 4
		}
	}
};

o.m();

/*
1. `this` holds the invocation context of `m()`
	`this` doesn't have a scope
	Therefore, to make sure the nested function can access the value of `this,
	store the value of `this` in a variable that is in scope for the inner function
	`self` is commonly used

2. a nested function inside method `m()`
	being a nested function, it does not inherit the `this` value of the containing/outer function (i.e. of `m()`)
	you can't use `this` in the nested function to obtain the invocation context of the outer/containing function

3. the return value is false, 
	because this nested function is invoked as a function
	and therefore its `this` value is either the global object or undefined. 
4. true, because self is the value of the outer `this`
*/