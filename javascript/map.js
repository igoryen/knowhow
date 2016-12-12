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

// 1
// 3
var names = [];
for (var i = 0; i < animals.length; i++) {
	names.push( animals[i].name );
};

console.log( names );

// 4, 2
var names = animals.map( function ( animal ) {
	return animal.name + ' is a ' + animal.species;
});

console.log( names );


/*
1. the task: list all the names of animals we have
	one way: using a for loop, another way: using map()
2. map() takes an array and transforms it into an array of the same length
	but each individual array element will be transformed. 
	map() expects the callback to return a transformed object
	and it will then put it into a new array
3. One way: using a for loop
4. Another way: using the map()
*/