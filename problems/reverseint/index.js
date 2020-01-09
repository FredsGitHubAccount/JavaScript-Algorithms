// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {

//     let reversed = n.toString().split("").reverse().join("")



//     return parseInt(reversed) * Math.sign(n)

// }

// console.log(reverseInt(830))



let practice = arr => {

for(let i = 1; i<arr.length; i++){

    let min = arr[i]

    for(j = i-1; arr[j]>min;j--){

        arr[j+1] = arr[j]
    }
    arr[j+1] = min

}

return arr
}




console.log(practice([5, 3, 1, 9, 1]))
// 5 3 1 9 1
// 3 5 1 9 1
// 3 5 5 9 1
// 3 3 5 9 1
// 1 3 5 9 1




// module.exports = reverseInt;
