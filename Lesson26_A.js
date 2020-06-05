// We have 3 kinds of scope:
// 1. Global scope (window.a)... --> City
// 2. Function scope --> Neighborhood
// 3. Block scope --> Area

// We have 3 types of variables
// 1. var age = 30;
// 2. let age = 30;
// 3. const age = 30;

// When creating variables, we have to first "Declare" and then "Initialize"
// 1. Declaration: var age;
// 2. Initialization: age = 30
	//var age;	
	//age = 30;
	//console.log(age);

// ------------------------------------------------------------------------

// Vars can be declared again!
	 // var age = 40; // Global scope
	 // var age = 50; // Global scope
	 // console.log(age);
	 

// ------------------------------------------------------------------------

// How about this?
	// var age = 60;
	// findAge();

	//function findAge() {
		// Function scope
	//	var age = 70;
	//	console.log(age);
	//}
	// Global scope
	// console.log(age);
	
// ------------------------------------------------------------------------

// What is block scope? 
	// var age = 20;
	// {
	//	 console.log(age);
	//	 age = age + 2;
	// }

	//if (age > 10) {
		// ....
	//}
	

// ------------------------------------------------------------------------

// But vars have a problem in block scope!
// Block scope is used in if statments, for-loops, etc.
   var age = 60;
   if (age > 60) {
	 var age = age - 10;
	 console.log(age);
   }
   console.log(age);
	   

// Problem with Var is that it leaks in block scope!!!

// ----------------------------------------------------------------------------------
// in 2015 ES6 (new Javascript standard) came out. Now we have "let" and "const" also
// ----------------------------------------------------------------------------------
	// let age = 10;
	// let age = 20;  // error!!! age cannot be declared again!

// let is like var but it does not leak in function scope or block scope:
	//let age = 60;
	//if (age > 50)
	//{
	//	let age = 10;
	//	console.log(age);
	//}
	//console.log(age);

// ----------------------------------------------------------------------------------

	// let age = 70;
	// calculateAge();
	
	// function calculateAge() {
		//let age = 80;
		// console.log(age);
	// }
	//console.log(age);

// ----------------------------------------------------------------------------------

	const youngage = 5;
	const maxage = 90;
	const minage = 10;
	
	//youngage = 10; // error!
	let age = 2;
	
	if (age > youngage) {
		console.log(age);
	}
	
	// let age = 20;
	// const old-age = 50;
	
	// console.log(age);
 
	// let age = 60;
	// if (age > 20)
	// {
	//  minage= 20;  // invalid left-handside assignment
	//	console.log(age);
	//}
	//console.log(age);

	








