var scope = "global scope"; // 1

function checkscope() {
    var scope = "local scope";
    return scope; // 2
}

console.log(checkscope());

/* ------------------------------------------
    1. var is optional when you write code in the global scope
    2. hides the global variable 
*/