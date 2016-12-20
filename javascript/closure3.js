var counter = 0; // 1

function add() { // 2
    counter += 1;
    console.log(counter);
}

add();
add();
add();


function increment() { // 3
	counter++;
    console.log(counter);
}

increment();

// 8
var countup = (function () { // 6
    var counter = 0; // 7
    return function () { // 4
    	counter += 1;
    	console.log(counter);
    }
})(); // 5

countup();
countup();
countup();

/*

1. global variable
2. funciton add() can access `counter`
3. function increment() can access `counter`
4. this function object is the return value. It will assigned to variable `countup`
5. The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.
6. `countup` becomes a function.
	It can access the counter in the parent scope (the scope above it).
7. as a result of creating the closure, this `counter` becomes a private variable.
	The `counter` is protected by the scope of the anonymous function, and can only be changed using the `countup` function.
8. A closure is a function having access to the parent scope, even after the parent function has closed.

Source: http://www.w3schools.com/js/js_function_closures.asp

*/

