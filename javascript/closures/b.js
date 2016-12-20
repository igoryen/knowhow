var scope = "global scope";

function checkscope () {
	var scope = "local scope";
	function f () {
		return scope;
	}
	return f; // 1
}

console.log( 
	checkscope()(); // 2
);

/*
1. return the nested fob itself, does not invoke f() and return its result
2. paste the body of the function and attach '()' to it making it callable
	execute the function using the scope chain that was in effect when the function was defined
	in which variable 'scope' was bound to the value 'local scope'
	return is 'local scope'
	because 
*/ 