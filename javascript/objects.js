var foo = { x : 1 }; // 1
var bar = null; // 2

console.log( typeof foo === "object" );  // 3
console.log( typeof bar === "object" );  // logs true!
console.log(
	(bar !== null) // 5
	&& 
	(typeof bar === "object")
);  // 4
/*

1. foo gets an object
2. bar gets an object , because `null` is also an object
3. Logs `true`
4. logs `false`
5. additional check if the variable holds null

*/

