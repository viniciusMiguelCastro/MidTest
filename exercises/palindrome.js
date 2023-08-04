const readline = require('readline-sync');

function palindrome(str) {
    let result = str.split('').reverse().join('')
    return result.split(' ').join('').toLocaleLowerCase().replace(/[\W_]/g, '') === str.split(' ').join('').toLocaleLowerCase().replace(/[\W_]/g, '') ?
        'Is a palindrome' : 'Not it is a palindrome'
}

// 'socorram-me subi no onibus em marrocos'
console.log(palindrome(readline.question('Digite: ')))

