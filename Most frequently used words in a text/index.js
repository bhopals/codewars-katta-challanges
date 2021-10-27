

// Kata Problem - https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript
// Kata Alternative Solutions - https://www.codewars.com/kata/51e056fe544cf36c410000fb/solutions/javascript

// Instructions

// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
// Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
// Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.

// Solution:
function topThreeWords(text) {
  const objectMap = {}
  const reg = /\s+|\|\\|\./
  const ignoredPattern = ['...', '..', '.', '', ',', '\'']

  // Split Input Texts 
  const texts = text.trim().split(reg)


  // Iterate over the Texts Arrays and get the occurance count
  texts.forEach(text => {
    let val = text.toLowerCase().replace('//', '')
    if(ignoredPattern.indexOf(val) === -1) {
      if(objectMap[val]) {
        objectMap[val] += 1
      } else {
         objectMap[val] = 1
      }
    }
  })
  
  // Arrange Object in an ARRAY
  let sortable = [];
  for (let obj in objectMap) {
     sortable.push([obj, objectMap[obj]]);
  }

  // Sort the array in ascending order to get the top 3 Occurance
  sortable.sort(function(a, b) {
      return b[1] - a[1];
  });
  
  // Get the top 3 Result data
  let result = []
  for(let i = 0 ; i < sortable.length; i ++) {
    if(i > 2) {
      break;
    }
    result.push(sortable[i][0])
  }
  
  return result
}

//Assertions
describe("Tests", () => {
  it("test", () => {
  Test.assertDeepEquals(topThreeWords("a a a  b  c c  d d d d  e e e e e"), ['e','d','a'])

  Test.assertDeepEquals(topThreeWords("a a c b b"), ['a','b','c'])

  Test.assertDeepEquals(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"),['e','ddd','aa'])

  Test.assertDeepEquals(topThreeWords("  //wont won't won't "), ["won't", "wont"])

  Test.assertDeepEquals(topThreeWords("  , e   .. "), ["e"])

  Test.assertDeepEquals(topThreeWords("  ...  "), [])

  Test.assertDeepEquals(topThreeWords("  '  "), [])

  Test.assertDeepEquals(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
  mind, there lived not long since one of those gentlemen that keep a lance
  in the lance-rack, an old buckler, a lean hack, and a greyhound for
  coursing. An olla of rather more beef than mutton, a salad on most
  nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
  on Sundays, made away with three-quarters of his income.`), ['a','of','on'])
  });
});


