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


    for (let i = 0; i < arr.length; i++) {
        let min = arr[i]
        console.log

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j]
            }
        }
        [arr[i],arr[min]]=[arr[min],arr[i]]
    }

    return arr

}



console.log(practice([5, 3, 1, 9, 1]))




// module.exports = reverseInt;
