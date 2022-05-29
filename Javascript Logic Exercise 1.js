// input: an array with strings, numbers, can be nested
// output: an array with grouped and sorted values, numbers and strings are split in two seperate groups
const sortedGroupedArray = (array) => {
	if(array.length === 0) {return array};
	
	array = array.flat(Infinity);

	// Initialization
	let stringArray, numberArray = [];

	stringArray = array.filter(element => typeof element === "string");
	stringArray.sort();
	stringArray = groupArray(stringArray);

	numberArray = array.filter(element => typeof element === "number");
	numberArray.sort((a, b) => {return a - b});
	numberArray = groupArray(numberArray);

	// elements that are not a string and not a number get ignored for now ;)

	if(numberArray.length > 0 && stringArray.length > 0) {
		return [numberArray, stringArray];
	} else {
		return numberArray.concat(stringArray);
	}
}

// input: a sorted and flat array
// return: an array with same values grouped into an array
const groupArray = (sortedArray) => {
	if(sortedArray.length === 0) {return sortedArray};

	// put all values in an array of length 1
	const nestedArray = sortedArray.map(element => [element]); 
	
	// Initialization
	const groupedArray = [nestedArray[0]];
	
	nestedArray.forEach((element, index, array) => {
		if(index > 0) {
			if(element[0] === array[index-1][0]) {
				const newElement = groupedArray.pop().concat(element);
				groupedArray.push(newElement);
			} else {
				groupedArray.push(element);
			}
		}
	});

	// arrays of length 1 are converted to just their value
	groupedArray.forEach((element, index) => {
		if (element.length === 1) {
			groupedArray[index] = groupedArray[index][0];
		}
	})

	return groupedArray;
}

const inputArray = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const inputArray2 = [];
const inputArray3 = [[1,2,4,591,392],391,2,5,10,2,1,1,1,20,20, "1", "b", "c"];
const inputArray4 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20, "1", "b", "b", "c"];
console.log(sortedGroupedArray(inputArray));
console.log(sortedGroupedArray(inputArray2));
console.log(sortedGroupedArray(inputArray3));
console.log(sortedGroupedArray(inputArray4));




// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
// make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. 
// i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
