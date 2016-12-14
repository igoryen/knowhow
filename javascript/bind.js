function f (y) {
	return this.x + y;
}

var o = { x: 1 }; // 3

var g = f.bind( o ); // 1

console.log(
	g( 2 ) // 2
);


function greet ( name ) {
	return this.greeting + name + "!";
}

var obj = { greeting: "Hello "};
var h = greet.bind( obj );
console.log(
	h( "Igor" ), h( "Jenica")
);


function endear( person ) {
	return this.doItTo + person;
}
var smth = { doItTo: "Kiss " };
var e = endear.bind( smth );
console.log(
	e("Jenica"), e( "Danny" ), e( "Joy" )
);


function careFor( thing ) {
	return this.treat + thing + "!" ;
}
var tendTo = { treat: "wash your "};
var service = careFor.bind( tendTo );
console.log(
	service("hair"), service("car"), service("socks")
); 


function admire( adj ) {
	return this.smb + " is " + adj + "!";
}
var who = { smb: "Jenica"};
var praiseAs = admire.bind( who );
console.log (
	praiseAs("the prettiest"), praiseAs( "the smartest" ), praiseAs( "the loveliest" )
);


/*
1. invoke method `bind()` on function `f` passing it object `o`
	`g` is a new function.
2. calling `g(x)` invokes `o.f(x)`
3. The object we'll bind to.

*/