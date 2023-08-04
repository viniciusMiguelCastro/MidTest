const readline = require('readline-sync');

function factorialize(num = 0) {
    if (num == 0) return 1;
    else {
        return (num * factorialize(num - 1));
    }
}
console.log(`${factorialize(readline.questionInt('Digite: '))}`)