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



var dogs 	= animals.filter(isDog); 
var cats 	= animals.filter(isCat);
var fishes 	= animals.filter(isFish);
var rabbits = animals.filter(isRabbit);
var not_rabbits = animals.filter(notRabbit);


console.log(dogs);
console.log(cats);
console.log(fishes);
console.log(rabbits);
console.log(not_rabbits);

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