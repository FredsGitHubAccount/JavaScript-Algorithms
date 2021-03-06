// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

  let map = {}

  for (let letter of str) {


    map[letter] = map[letter] + 1 || 1
  }

  let max = 0
  let recurring;

  for (key in map) {

    if (map[key] > max) {
      max = map[key]
      recurring = key
    }

  }

  return [max, recurring]

}

console.log(maxChar("Hello There!"))



module.exports = maxChar;



// let returnValues = () =>{
//     return{
//         first: "1",
//         second:"2"
//     }
// }



// let {first,second} = returnValues()


// console.log(first)



// const sorter = str => {

//   let max = 0
//   let letter = ""
//   let map = {}
//   let match = ""

//   for(let char of str){
//       map[char] = map[char] + 1 || 1

//   }
//   delete map[" "]



//   for(let key in map){
//       if(map[key]>max){
//           letter = key
//       }
//       else if(map[key]===max){
//            match = key
//       }
//       max = Math.max(max,map[key])

//   }

//   return [map,max,letter,match]

// }


// console.log(sorter("my good old fffriend"))


// Trying to retain the max char if duplicate maxes
// const sorter = str => {

//   let max = 0
//   let map = {}
//   let myObj = {}

//   for(let char of str){
//       map[char] = map[char] + 1 || 1
//   }
//   delete map[" "]

//   let i = 0

//   for(let key in map){


//       if(map[key]>max){
//           max = map[key]
//           myObj.maxLetter = key
//       }

//       else if(map[key] === max){  
//           i++
//           myObj[`nextMatch ${i}`] = key
//       }

//   }


//   return myObj


// }


// console.log(sorter("my good old fffriend"))

// let arr = [-3, -63, -20, -22, -1,-6]

// const maxSum = arr => {

//   let current = arr[0]
//   let max = arr[0]

//   for (let i = 1; i < arr.length; i++) {

//     if (current > 0) {
//       current += arr[i]
//     }
//     else if (current < 0) {
//       current = arr[i]
//     }
//     max = Math.max(current, max)

//   }
//   return max > 0 ? max : 'Your value is in the negative at ' + max
// }



// console.log(maxSum(arr))