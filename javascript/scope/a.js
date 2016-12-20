var scope = "global scope"; // 1

function checkscope() {
    var scope = "local scope";
    return scope; // 2
}

console.log(checkscope());

console.log("-------------------------------------------");

scope2 = "global"; // 1

function checkscope2() {
    scope2   = "local"; // 3
    myscope = "local"; // 4
    return [scope2, myscope]; // 5
}

console.log(checkscope2());
console.log('scope2: ' + scope2);
console.log('myscope: ' + myscope);

console.log("-------------------------------------------");


var scope_3 = "global scope";

function checkscope_3 () {
    var scope_3 = "local scope";

    function nested () {
        var scope_3 = 'nested scope';
        return scope_3;
    }
    
    return nested();
}
console.log(checkscope_3());


/* ------------------------------------------
    1. var is optional when you write code in the global scope
    2. hides the global variable 
    3. changing the global variable 'scope2'
    4. declaring a new global variable
    5. return an array with 2 elements
*/