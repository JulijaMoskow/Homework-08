//Task 1
let length: number = 4;
let width: number = 5;
let area: number;
area = length * width;
console.log(area);
//Task 2
let weight: number = 70;
let height: number = 1.75;
let bmi: number = weight / (height * height);
console.log(bmi);
//Task 3
let celsius: number = 20;
let fahrenheit: number;
fahrenheit = celsius * 9 /5 + 32
console.log(fahrenheit);
//Task 4
let age: number = 18;
let isAdult: boolean = age >=18;
console.log(isAdult)
//Task 5
let firstName: string = "John";
let lastName: string = "Doe";
let fullName: string = firstName + " " + lastName;
console.log("Full name: " + fullName);
//Task 6
let requiredAge: number = 18;
let userAge: number = 18;
let hasAccess: boolean = userAge === requiredAge;
console.log(hasAccess)
//Task 7
let userInput: string = "18";
let actualAge: number = 18;
let isEqualLoose: boolean = Number(userInput) == actualAge;
let isEqualStrict: boolean = Number(userInput) === actualAge;
console.log(isEqualLoose);
console.log(isEqualStrict);
//Task 8
let stringNumber: string = "456";
let convertedNumber: number = Number(stringNumber);
console.log("String value: " + stringNumber);
console.log("Converted number: " + convertedNumber);
//Task 9
let originalNumber: number = 789;
let stringFromNumber: string = String(originalNumber);
console.log("Original number: " + originalNumber);
console.log("Converted string: " + stringFromNumber);