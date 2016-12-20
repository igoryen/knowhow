var scope = "global scope";

function checkscope () {
	var scope = "local scope";
	function f () {
		return scope;
	}
	return f(); // 1
}

console.log(checkscope());

// 1. return the nested fob