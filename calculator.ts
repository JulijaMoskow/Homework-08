class Calculator {

    addition(num1: number, num2: number): number {
        return num1 + num2;
    }

    isGreater(num1: number, num2: number): boolean {
        return num1 > num2;
    }

}

const calc = new Calculator();

console.log(calc.addition(5, 3));
console.log(calc.isGreater(10, 7));
console.log(calc.isGreater(2, 8));