// In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

// Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.

// For example: 
// solve("abc") = True, because it contains a,b,c
// solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
// solve("dabc") = True, because it contains a, b, c, d
// solve("abbc") = False, because b does not occur once.
// solve("v") = True

// My Solution
function solve(s){

  let isConsecutive = true;
  const sortedArray = Array.from(s.split('').sort())
  if(s.length !== sortedArray.length) {
     isConsecutive = false;
  }
  
  let uniqueString = sortedArray.join('')
  for(let i=1; i < sortedArray.length; i++) {
    if(uniqueString.charCodeAt(i) - uniqueString.charCodeAt(i-1) !== 1 ) {
      isConsecutive = false;
      break;
    }
  }
  return isConsecutive;
}

// Alternative Solution of a brilliant Person 
function solve(s) {
  return 'abcdefghijklmnopqrstuvwxyz'.includes([...s].sort().join(''));
}
