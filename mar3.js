/////////// Modifying Array values using index //////////

let sampleArray = [45, 34, 23];

sampleArray[3] = 100; // we can update values of array with index using bracket notation;

sampleArray[5] = 200;


///////////////// working with multidimentional arrays /////////////////

// This is now assignments

const myArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
console.log(myData);

// print only 8
// push assignment  => Array.push()

let arr1 = ['a', 'b', 'c', 'd', 'e']; // append this array with your name.
arr1.push("Muhammad Ali");
console.log(arr1);

// Array.pop();

// const threeArr = [1, 4, 6]; //remove
// const lastItem = threeArr.pop();
// console.log(lastItem);
// console.log(threeArr);

// Array.pop() Assignment

// Setup
const myPopArray = [
	['John', 23],
	['cat', 2],
];
let removedFromMyArray = myPopArray.pop();
console.log(removedFromMyArray);
console.log(myPopArray);

/*Use the .pop() function to remove the last item from myPopArray and assign the popped off value to a new variable, removedFromMyArray.
 */

// push(), pop(), youtube on it.
