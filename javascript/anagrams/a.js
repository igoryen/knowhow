var input = "monk, konm, bbc, cbb, dell, ledl";

var words = input.split(", "); // 1

for ( var i = 0; i < words.length; i++ ) {

    var word = words[i];
    var alphabetical = word.split("").sort().join(""); // 2

    for (var j = 0; j < words.length; j++) {

        if (i === j) {
            continue;
        }

        var other = words[j];
        if(alphabetical === other.split("").sort().join("")){
            console.log(word + " - " + other + " (" + i + ", " + j + ")");
        }
    }
}

/*
1. split the string into substrings at the comma. Returns an array.
2. Split the string into separate characters and returns the array.
    Sort the array elements in the alphabetical order.
    Join (concatenate) the array elements and return the string.
*/