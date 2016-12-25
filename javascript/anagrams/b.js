// Source: http://stackoverflow.com/questions/909449/anagrams-finder-in-javascript

function anagram(s1, s2){
  
  if (s1.length !== s2.length) { // 1
    return false;
  }

  if (s1 === s2) { // 2
    return true;
  }

  var c = '',
    i = 0,
    limit = s1.length,
    match = 0,
    idx;

  while(i < s1.length){
    
    c = s1.substr(i++, 1); // 3
    
    idx = s2.indexOf(c); // 4
    if (idx > -1) {
      // found it, add to the match
      match++;
      // assign the second string to remove the character we just matched
      s2 = s2.substr(0, idx) + s2.substr(idx + 1);
    } else {
      // not found, not the same
      return false;
    }
  }
  return match === s1.length;
}
/*
1. not the same length, can't be anagram
2. same string, must be anagram
3. chomp the next character
4. find it in the second string
*/