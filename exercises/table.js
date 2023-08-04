const readline = require('readline-sync');

function table(num) {
    for (let count = 1; count <= 10; count++) {
        console.log(`${num} x ${count} = ${num * count}`)
    }
}

table(`\n${readline.questionInt('Digite: ')}`)