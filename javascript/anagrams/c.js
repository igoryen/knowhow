function anagram(s1, s2){
  return s1.split("").sort().join("") === s2.split("").sort().join("");
}

// var s1 = "evil";
// var s2 = "vile";

var s1 = "looped";
var s2 = "poodle";


console.log("'" +s1 + "' and '" + s2 + "': Are they anagrams?");

console.log(
    anagram(s1, s2)
);