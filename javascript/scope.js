(function(){
  var a = b = 3; // 1
})();

console.log("a defined? " + (typeof a !== 'undefined')); // 2
console.log("b defined? " + (typeof b !== 'undefined'));

/*

1. This is a shorthand for:
	b = 3; // global, due to lack of `var` (i.e. because it's not `var b = 3`)
	var a = b; // local
2. Logs out `false` because `a` is defined outside this function.
*/