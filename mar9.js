/////////// Stand in line //////////
function nextInLine(arr,item){
arr.push(item);
let removed = arr.shift();
return removed; 
}
let testArr =[1,2,3,4,5,6];
console.log("Befor: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 7));
console.log(nextInLine(testArr, 8));
console.log("After: " + JSON.stringify(testArr));