//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
function fruit() {
	this.fruitType = 'apples'
}

fruit.prototype.color = function() {
	console.log('My color is green, but ' + this.fruitType + ' comes in several colors.');
}

var fruitFact = new fruit();
console.log(fruitFact);

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
var numbers = [1,2,3,4,5,6,7,8,9,10];

function numbersSlice() {
	return	console.log(numbers.slice(0,4) + ',' + numbers.slice(5,10));
}

numbersSlice()

//3. Delete the last number in the array that you created above.
delete numbers[9];

	console.log(numbers);

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 

function fruitSwitch() {
	var  fruitText = 'Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.';
			fruitText = fruitText.replace('strawberry', 'banana');
			fruitText = fruitText.replace('strawberries', 'bananas');
			fruitText = fruitText.replace('Strawberry', 'Banana'); // To deal with captial letters
			fruitText = fruitText.replace('Strawberries', 'Bananas'); // To deal with captial letters
	console.log(fruitText);
}

fruitSwitch();

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
var arrayValues = ['Manchester United', 'Manchester City', 'Liverpool', 'Arsenal'];

	console.log(arrayValues);

	arrayButton.addEventListener(
		'click',function(){
		arrayValues.splice(0,4);
		console.log(arrayValues);
		arrayValues.push('BMW', 'Volvo', 'Ford', 'Audi')
		console.log(arrayValues);
    }
);

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
var people = [
	{person: 'Geir', age: 25},
	{person: 'Rolf', age: 30},
	{person: 'Olga', age: 35}
];

var names = people.filter(function(nameFilter){
    return (nameFilter.person === 'Rolf');
})

console.log(names)

//7. Create a simple function that logs the date.

function getDate() {
	var today = new Date();
	console.log(today);
}

getDate();