// Question 2: Write a javascript function that takes an array of numbers and a target number.
// The function should find two different numbers in the array that, when added together, 
// give the target number. For example: sumPairs([1,2,3], 4)should return [1,3]

function findSumPairs(array, number) {
    for (const element of array) {
        if (array.includes(number-element)) {
            return[element, number-element];
            break;
        }
    };
    
    return "There is no answer.";
}

console.log(findSumPairs([-1,2,3,6], "5")); // [-1, 6]
console.log(findSumPairs([-1,2,3,6], "0")); // "There is no answer."