let num = 55; // single value variable definition
let students = []; // array variable definition

console.log("Count: ", num);
console.log("Students: ", students);
console.log("Students Length: ", students.length);
// Index:    0       1            2         3
students = ["John", "Stephanie", "George", "Courtney"];
console.log("Students: ", students);
console.log("Students Length: ", students.length);

console.log("First value in the array, index 0, ", students[0]);
console.log("Second value in the array, index 1, ", students[1]);
console.log("Third value in the array, index 2, ", students[2]);
console.log("Fourth value in the array, index 3, ", students[3]);
console.log("Fifth value in the array, index 4, ", students[4]);

console.log("Adding 'Anna' to the students array");
students.push("Anna");
console.log("Students: ", students);
console.log("Students Length: ", students.length);

console.log("Remove 'Anna' from the students array");
let dropped = students.pop();
console.log("Student dropped from class, ", dropped);
console.log("Students: ", students);
console.log("Students Length: ", students.length);

console.log("----------------------------");
console.log("Practice 1");
// Practice 1
let testPhase = [];
testPhase.push("test");
testPhase.push("tested");
testPhase.push("tester");
console.log("Array length: ", testPhase.length);

// Using the specifice index to get the last value
console.log("Last value: ", testPhase[2]);

// Using the length operation to get the last value
console.log("Last value: ", testPhase[testPhase.length - 1]);
console.log("First value: ", testPhase[0]);

console.log("----------------------------");
console.log("Practice 2");
let numbers = [1, 3, 5, 8];
let count = 0;
while (count < numbers.length) {
  console.log("Value of numbers array at index ", count);
  console.log("Value is ", numbers[count]);
  count = count + 1;
}
