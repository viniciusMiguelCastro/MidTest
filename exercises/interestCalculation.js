const readline = require('readline-sync')

function interestCalculation(initialCapital, interestRate, investimentTime){
    return (initialCapital * (interestRate/100)) * investimentTime + initialCapital
}

const initialCapital = readline.questionFloat(`\nDigite o capital inicial: `)
const interestRate = readline.questionFloat(`Digite a taxa de juros: `)
const investimentTime = readline.questionFloat(`Digite o tempo de investimento: `)

console.log(`\nTotal de: ${interestCalculation(initialCapital, interestRate, investimentTime).toFixed(2)}`)