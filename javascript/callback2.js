var allUserData = []; // 1
// 2 
function logStuff ( userData ) {
    if ( typeof userData === "string") { // 10
        console.log(userData);
    }
    else if ( typeof userData === "object") { // 9
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }
    }
}

// 3
function getInput (options, callback) {
    allUserData.push (options);
    callback (options); // 7
}

var user = { name:"Rich", speciality:"JavaScript" };

// 4
getInput ( user, logStuff );

// ......................................................
var generalLastName = "Smith"; // 8


function getInput2 (options, callback) {
    allUserData.push (options);
    if( typeof callback === "function" ) { // 6
        callback ( generalLastName, options ); // 5
    }
}

getInput2( user, logStuff );

//
// allUserData.forEach( function( user ) {
//     console.log( user );
// });

/*
1. global variable of type Array object
2. generic logStuff function. It prints to console.
3. A function. It takes two parameters, 
    parameter A: an object.
    parameter B: a callback function
4. When we call the `getInput` function, we pass `logStuff` as a parameter.
    So `logStuff` will be the function that will called back (or executed) inside the `getInput` function
5. Passing 2 parameters to the callback:
    the global variable to the callback
6. Make sure that the callback is callable, i.e. a function
7. Passing just one parameter to the callback:
    the `options` - which can be an object or a String
8. global variable of type String
9. like, e.g. an Array (#1)
10. like, e.g. a String (#8)
*/
