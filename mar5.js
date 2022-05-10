// function returnSum(a, b) {
// 	let c = a + b;
// }

// let result = returnSum(5, 10);

function tellMyAge(birthYear) {
	let age = 2022 - birthYear;
	return age;
}

/// I am {yourAge} years old.
//console.log('I am ' + myAge + ' years old.');

function getFullName(firstName, lastName) {
	let fullName = firstName + ' ' + lastName;
	return fullName;
}

function getMyIntro(firstName, lastName, birthYear) {
	let myFullName = getFullName(firstName, lastName);

	let myAge = tellMyAge(birthYear);

	let myIntro = 'I am ' + myFullName + ' and I am ' + myAge + ' years old.';
	return myIntro;
}

let myIntro = getMyIntro('Basit', 'Ali', 1995);
