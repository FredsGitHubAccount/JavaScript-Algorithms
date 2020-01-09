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



let practice = str => {

    str = str.toLowerCase()

    let mapped = {}
    let maxLetter = ""
    let maxNumber = 0

    for(let char of str){

        if(mapped[char]){
            mapped[char]++
        }
        else {
            mapped[char] = 1
        }
    }
    
    for(let char in mapped){

        if (mapped[char] > maxNumber){
            maxNumber = mapped[char];
            maxLetter = char
        }

    }


    return [maxLetter,maxNumber]


    

}




console.log(practice("Most Common LetterLlL"))


// module.exports = reverseInt;
