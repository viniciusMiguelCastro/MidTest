const readline = require('readline-sync');

const lst = []

const nome = readline.question('Nome do aluno? ')

for (let i = 1; i <= 3; i++) {
    const materia = readline.question(`\nMateria ${i}: `)
    const nota1 = readline.questionFloat('Digite a primeira nota: ')
    const nota2 = readline.questionFloat('Digite a segunda nota: ')
    const nota3 = readline.questionFloat('Digite a terceira nota: ')
    const media = (nota1 + nota2 + nota3) / 3
    lst.push(`Matéria ${i}: ${materia} com Média de: ${media.toFixed(2)} \n`)
}

console.log(`\nAluno: ${nome}`)
console.log(lst.join(''))