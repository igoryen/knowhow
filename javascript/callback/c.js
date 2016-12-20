

// 2
function getUserInput( user, callback ) {

    var fullName = user.firstName + " " + user.lastName;

    if ( typeof callback === "function" ) { // 3
	    callback( fullName, this.user.gender ); // 4
    }
}
//...................................................
// 1
function genericPoemMaker( name, gender ) {

	var line = function ( n ) {
		var strike = ".";
		for (var i = 0; i < n; i++) {
			strike += ".";
		}
		return strike;
	};
	
	console.log(line(30));
    console.log(name + " is finer than fine wine.");
    console.log("Altruistic and noble for the modern time.");
    console.log("Always admirably adorned with the latest style.");
    console.log("A " + gender + " of unfortunate tragedies who still manages a perpetual smile");
	console.log(line(30));
}

function greetUser ( customerName, sex ) {
	var salutation = sex && sex == "Man" ? "Mr." : "Ms.";
	console.log( "Hello, " + salutation + " " + customerName + "!" );
}

//....................................................

var person = {	
	fname: "Alan",
	lname: "Rickman",
	gender: "Man"	
}

getUserInput( person, genericPoemMaker ); // 5
getUserInput( person, greetUser );


/*

1. First, setup the generic poem creator function; it will be the callback function in the getUserInput function below.
2. The callback, which is parameter D, will be our genericPoemMaker function we defined above.
3. Make sure the callback is a function i.e. callable
4. Execute the callback function and pass the parameters to it
5. Because the getUserInput function is only handling the retrieving of data, 
	we can pass any callback to it. 

*/

416