// Calculator class
class Calculator {
    constructor() {
        this.result = 0;
    }

    add(num) {
        this.result += num;
    }

    subtract(num) {
        this.result -= num;
    }

    multiply(num) {
        this.result *= num;
    }

    divide(num) {
        if (num !== 0) {
            this.result /= num;
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
calculator.add(5);
calculator.subtract(2);
calculator.multiply(3);
calculator.divide(4);
console.log("Result:", calculator.getResult());