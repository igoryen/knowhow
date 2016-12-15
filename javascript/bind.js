function f (y) {
	return this.x + y;
}

var o = { x: 1 }; // 3

var g = f.bind( o ); // 1

console.log(
	g( 2 ) // 2
);


function greet ( name ) {
	return this.interjection + name + "!";
}

var wordToSay = { interjection: "Hello "};
var hi = greet.bind( wordToSay );
console.log(
	hi( "Igor" ), hi( "Jenica")
);


function endear( person ) {
	return this.thingToDo + " " + person + "!";
}
var expression = { thingToDo: "Kiss" };
var e = endear.bind( expression );
console.log(
	e( "Jenica" ), e( "Danny" ), e( "Joy" )
);


function careFor( thing ) {
	return this.tend + " your " + thing + "!" ;
}
var tendTo = { tend: "Wash"};
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

function congratulateOn ( day ) {
	return this.adj + " " + day + "!";
}
var adjToUse = { adj: "Happy" };
var congrats = congratulateOn.bind( adjToUse );
console.log(
	congrats("New Year"), congrats("Hannukah"), congrats("Easter"), congrats( "Christmas" )
);

function criticize( adj ) {
	return this.smb + " is a " + adj + "!";
}
var receiver = { smb: "Grinch"};
var railAs = criticize.bind( receiver );
console.log (
	railAs("stinker"), railAs( "eel" ), railAs( "monster" )
);

/*
1. invoke method `bind()` on function `f` passing it object `o`
	`g` is a new function.
2. calling `g(x)` invokes `o.f(x)`
3. The object we'll bind to.

*/