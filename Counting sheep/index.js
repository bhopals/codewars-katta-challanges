
// Katta challange - https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
// Alternative Solution - https://www.codewars.com/kata/54edbc7200b811e956000556/solutions/javascript
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]
//   The correct answer would be 17.

function countSheeps(arrayOfSheep) {
   return arrayOfSheep.filter((sheep) => sheep === true || sheep === 'true').length
}

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length
 }