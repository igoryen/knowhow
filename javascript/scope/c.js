scope = "global"; // 1

function checkscope() {
    scope   = "local"; // 3
    myscope = "local"; // 4
    return [scope, myscope]; // 5
}

console.log(checkscope());
console.log('scope: ' + scope);
console.log('myscope: ' + myscope);

/* ------------------------------------------
    1. var is optional when you write code in the global scope
    3. changing the global variable 'scope'
    4. declaring a new global variable
    5. return an array with 2 elements
*/