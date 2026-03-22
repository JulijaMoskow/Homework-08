function convertToFahrenheit(celsius: number): number {
    const result = (celsius * 9) / 5 + 32;
    return result;
}

function greetUser(firstName: string, lastName: string): string {
    const result = `Hello, ${firstName} ${lastName}!`;
    return result;
}

function calculateArea(width: number, height: number): number {
    const result = width * height;
    return result;
}

function addNumbers(a: number, b: number): number {
    const result = a + b;
    return result;
}

console.log(convertToFahrenheit(25));
console.log(greetUser("Anna", "Miller"));
console.log(calculateArea(4, 5));
console.log(addNumbers(10, 15));