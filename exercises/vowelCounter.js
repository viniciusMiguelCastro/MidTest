const readline = require('readline-sync');

function vowelCount(str) {
    let count = 0
    for (let e of str) {
        if ('aeiouAEIOU'.includes(e)) count++
    }
    return count
}

console.log(`Total: ${vowelCount(readline.question('Digite: '))}`)



