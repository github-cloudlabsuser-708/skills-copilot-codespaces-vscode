const readline = require('readline');

// Calculator class
class Calculator {
    constructor() {
        this.result = 0;
    }

    add(num1, num2) {
        this.result = num1 + num2;
    }

    subtract(num1, num2) {
        this.result = num1 - num2;
    }

    multiply(num1, num2) {
        this.result = num1 * num2;
    }

    divide(num1, num2) {
        if (num2 !== 0) {
            this.result = num1 / num2;
        } else {
            console.log("Error: Division by zero is not allowed.");
        }
    }

    clear() {
        this.result = 0;
    }

    getResult() {
        return this.result;
    }
}

// Usage example
const calculator = new Calculator();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
        rl.question('Enter the operation (+, -, *, /): ', (operation) => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            switch (operation) {
                case '+':
                    calculator.add(num1, num2);
                    break;
                case '-':
                    calculator.subtract(num1, num2);
                    break;
                case '*':
                    calculator.multiply(num1, num2);
                    break;
                case '/':
                    calculator.divide(num1, num2);
                    break;
                default:
                    console.log("Error: Invalid operation.");
                    break;
            }

            console.log("Result:", calculator.getResult());

            rl.close();
        });
    });
});