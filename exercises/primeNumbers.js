const readline = require('readline-sync');

function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false
    return num > 1;
}

function primeNumbers(num = 30) {
    let numbers = new Array();
    for (var x = 0; x <= num; x++) {
        if (isPrime(x)) numbers.push(x)
    }
    return numbers;
}

console.log(`${isPrime(readline.questionInt('Digite: '))} \n10 first prime numbers: ${primeNumbers()}`);
