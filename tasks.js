"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Task 1
let length = 4;
let width = 5;
let area;
area = length * width;
console.log(area);
//Task 2
let weight = 70;
let height = 1.75;
let bmi = weight / (height * height);
console.log(bmi);
//Task 3
let celsius = 20;
let fahrenheit;
fahrenheit = celsius * 9 / 5 + 32;
console.log(fahrenheit);
//Task 4
let age = 18;
let isAdult = age >= 18;
console.log(isAdult);
//Task 5
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Full name: " + fullName);
//Task 6
let requiredAge = 18;
let userAge = 18;
let hasAccess = userAge === requiredAge;
console.log(hasAccess);
//Task 7
let userInput = "18";
let actualAge = 18;
let isEqualLoose = Number(userInput) == actualAge;
let isEqualStrict = Number(userInput) === actualAge;
console.log(isEqualLoose);
console.log(isEqualStrict);
//Task 8
let stringNumber = "456";
let convertedNumber = Number(stringNumber);
console.log("String value: " + stringNumber);
console.log("Converted number: " + convertedNumber);
//Task 9
let originalNumber = 789;
let stringFromNumber = String(originalNumber);
console.log("Original number: " + originalNumber);
console.log("Converted string: " + stringFromNumber);
//# sourceMappingURL=tasks.js.map