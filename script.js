let count = 55; // single value variable definition
let students = []; // array variable definition

console.log("Count: ", count);
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


