var numbers = [45, 65, 66, 77, 65, 78];
// get element by index
// console.log(numbers[2]);
var element = numbers[1];
console.log(element);
// added new element in array by index
numbers[1] = 77;
console.log(numbers);

// find index of an element
var positionIndex = numbers.indexOf(65);
console.log(positionIndex);