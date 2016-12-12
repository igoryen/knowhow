var animals = [
	{ name: 'Boafood', 		species: 'rabbit'},
	{ name: 'Caro', 		species: 'dog' },
	{ name: 'Cat', 			species: 'cat' },
	{ name: 'Fluffykins', 	species: 'rabbit'},
	{ name: 'Hamilton', 	species: 'dog' },
	{ name: 'Harold', 		species: 'fish' },
	{ name: 'Jimmy', 		species: 'fish'},
	{ name: 'Ursula', 		species: 'cat' }
];





// 3

var isDog = function ( animal ) {
	return animal.species === 'dog'
}

var isCat = function ( animal ) {
	return animal.species === 'cat'
}

var isFish = function (animal) {
	return animal.species === 'fish'
}

var isRabbit = function (animal) {
	return animal.species === 'rabbit'
}

var notRabbit = function (animal) {
	return animal.species !== 'rabbit'
}



var dogs 	= animals.find(isDog); 



console.log(dogs);

// for ECMAScript 6
var ages = [3, 10, 18, 20];

function checkAdult(age) {
    return age >= 18;
}

console.log(
    ages.find(checkAdult)
);


// 2
// var non_cats = animals.reject(isCat);
// console.log(non_cats);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
1. filter traverses all the elements of the array
	applies the callback function to each element
	if the element returns true
	the element is returned.
2. Reject is found in underscore.js and similar
3. Make a call back function for the filter() function
	it takes one element of the array defined elsewhere
	and returns a boolean 
*/