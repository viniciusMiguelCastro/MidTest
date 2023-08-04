const readline = require('readline-sync');

function simpleCalculator(mathOperation) {
    const lstOperators = ['+', '-', '*', '/']
    const operator = lstOperators.find((op) => op == mathOperation.split(' ')[1] || op == mathOperation.split('')[1] || op == mathOperation.split('')[2])
    const numbers = mathOperation.split(operator) || mathOperation.split(' ')

    return (
        operator == '+' ? ~~numbers[0] + ~~numbers[1] || (~~numbers[0].split('')[0] + ~~numbers[0].split('')[3]) :
            operator == '-' ? ~~numbers[0] - ~~numbers[1] || (~~numbers[0].split('')[0] - ~~numbers[0].split('')[3]) :
                operator == '*' ? ~~numbers[0] * ~~numbers[1] || (~~numbers[0].split('')[0] * ~~numbers[0].split('')[3]) :
                    operator == '/' ? ~~numbers[0] / ~~numbers[1] || (~~numbers[0].split('')[0] / ~~numbers[0].split('')[3]) :
                        'Error'
    )
}

// EX: 5 * 5
console.log(simpleCalculator(readline.question('Digite: ')))