
// 1
var extend = ( // 8

	function () { // 2
		// 3
		for ( var p in {toString: null} ) {

			return function extend (object) {
				// 4
				for (var i = 1; i < arguments.length; i++) {
					var source = arguments[ i ];
					for (var property in source) {
						object[property] = source[property]
					}
				}
				return object;
			};
		}

		// 5

		// 6
		var protoprops = [
			"toString",
			"valueOf",
			"constructor",
			"hasOwnProperty",
			"isPrototypeOf",
			"propertyIsEnumerable",
			"toLocaleString"
		];


		return function patched_extend (object) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[ i ];
				for (var property in source) {
					object[property] = source[property];
				}
				for (var j = 0; i < protoprops.length; j++) {
					property = protoprops[ j ];
					if(source.hasOwnProperty( property )) {
						object[ property ] = source[ property ];
					}
				}
			}
			return object
		};

	} () // 7
); // 9

/* -------------------------------------------------
1. Purpose: copy the properties of arguments B,C etc onto argument A. 
	Uses the idiomatic technique of defining and invoking a function in a single expression.
2. Assign the return value of this function
3. check if we have the IE bug where: 
	the for/in loop won't enumerate an enumerable property of 'object'
	if the prototype of 'object' has a non-enumerable property by the same name.
	This means that properties like 'toString' are not handled correctly
	unless we explicitly check for them.
4. OK, the bug is not found, so for/in loop works correctly, and we return a simple version of the function 'extend()'
5. if we get here, it means that the for/in loop did not enumerate the 'toString' property of the test object.
	So return the version of the extend() function that 
	explicitly tests for the non-enumerable properties of Object.prototype.
6. The list of special-case properties we check for.
7. '()' = immediate function call / invocation
8. the open parenthesis before the keyword 'function':
	interpreter see that this is an FDE (function definition expression)
	and it does not try to parse the keyword 'function' as an FDS (function declaration statement)
9. the parentheses are used around the function because the function is to be invoked
	immediately after being defined.
*/



// ============================================================

function defineClass (constructor, methods, statics) {
	if (methods) {
		extend( constructor.prototype, methods );
	}
	if (statics) {
		extend( constructor, statics );
	};
	return constructor;
}

var Range = defineClass( 
	// constructor
	function( from, to ) {
		this.from = from;
		this.to = to;
	},
	// methods
	{
		includes: function (x) {
			return this.from <= x  &&  x <= this.to;
		},

		toString: function () {
			return "(" + this.from + " ... " + this.to + ")"; 
		},
		
		upto: function (to) {
			return new SimpleRange( 0, to );
		}
	}
	// statics
);

var r = new Range(1, 3);
console.log(
	r.includes(2)
	);

console.log(r);