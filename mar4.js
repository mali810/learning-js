

/*Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e */

// ['Biscuits',35]
let myList = [
    ["Chocolates", 15],
    ["Stings", 5],
    ["Coffees", 3],
    ["Bags", 4],
    ["Laptops", 2],
    ["Keybord", 1],
]
//console.log(myList);



function getMyIntro(firstName,LastName,birthYear)
{
    let myAge = 2022-birthYear;
    let myIntro = 'I am '+firstName+' '+LastName+' and I am '+myAge+' years old';
    return myIntro;
}

let myIntoduction = getMyIntro('Basit','Ali',1995);
console.log(myIntoduction);