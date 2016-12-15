allUserData = []; // 1
// 2 
function logStuff ( userData ) {
    if ( typeof userData === "string") {
        console.log(userData);
    }
    else if ( typeof userData === "object") {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }
    }
}

// 3
function getInput (options, callback) {
    allUserData.push (options);
    callback (options);
}

var user = { name:"Rich", speciality:"JavaScript" };

// 4
getInput ( user, logStuff);

/*
1. global variable
2. generic logStuff function. It prints to console.
3. A function. It takes two parameters, 
    parameter A: an object.
    parameter B: a callback function
4. When we call the `getInput` function, we pass `logStuff` as a parameter.
    So `logStuff` will be the function that will called back (or executed) inside the `getInput` function
*/
