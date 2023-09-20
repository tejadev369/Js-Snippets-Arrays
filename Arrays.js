

const fruits = ['🍎','🍌','🍇','🍓','🍈','🍐','🍏'];


// Convert the array to String 
//fruits.toString()
console.log(fruits.toString()) //  🍎,🍌,🍇,🍓,🍈,🍐,🍏

// push the element into the array
fruits.push('🍒') 
console.log(fruits)  //   [  '🍎', '🍌', '🍇',  '🍓', '🍈', '🍐', '🍏', '🍒' ]

// Removes the  Last element of an array 
fruits.pop('🍒')
console.log(fruits) // [ '🍎', '🍌', '🍇', '🍓', '🍈', '🍐', '🍏' ]


// Return the length of the array  
let lengthOfArray = fruits.length;  
console.log(lengthOfArray)        //  7


// Removes the first element of the array 
let removes = fruits.shift()
console.log(fruits)         // [ '🍌', '🍇', '🍓', '🍈', '🍐', '🍏' ]
console.log((removes))     // 🍎



// Adds '🥭' to the beginning of the array 
fruits.unshift('🥭')
console.log(fruits)   //  [ '🥭', '🍌', '🍇', '🍓', '🍈', '🍐','🍏']



// checks if the array contains an element 
console.log(fruits.includes('🍉')) // false
 

// returns the index of an element 
console.log(fruits.indexOf('🍓'))   // 3



// join the element of the array with given seperation 
console.log(fruits.join('+'))   // 🍎+🍌+🍇+🍓+🍈+🍐+🍏



// returns the portion of the array 
// syntax array.slice(start, end-1) returns endposition -1 )
console.log(fruits.slice(1,3));  //  [ '🍌', '🍇' ]


// add element to the array  
// syntax 
//array.splice(start, deleteCount, item1, item2, ...)

const removed = fruits.splice(1,2,'🥑','🍉'); //  
console.log(fruits) // [  '🍎', '🥑', '🍉', '🍓', '🍈', '🍐', '🍏']
console.log(removed) // [ '🍌', '🍇' ]