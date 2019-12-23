// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

let map = {}

for(let letter of str){


    map[letter] = map[letter] + 1 || 1
}

let max = 0
let recurring;

  for(key in map){
    
    if(map[key] > max){
        max = map[key]
        recurring = key
    }
   
  }

return [max,recurring]

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