function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Деление на ноль невозможно.");
    }
    return a / b;
}

function power(a, b) {
    return Math.pow(a, b);
}

function factorial(n) {
    if (n < 0) {
        throw new Error("Факториал отрицательного числа не определен.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}


