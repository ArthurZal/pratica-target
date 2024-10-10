function isFibonacci(number) {

    let a = 0;
    let b = 1;

    if (number === 0 || number === 1) {
        return alert(`O número ${number} pertence a sequência de Fibonacci`);
    }

    while (b < number) {

        let temporaryValue = b;
        b = a + b;
        a = temporaryValue;
    }

    if (b === number) {
        
        return alert(`O número ${number} pertence a sequência de Fibonacci`);
    
    } else {
        return alert(`O número ${number} NÃO pertence a sequência de Fibonacci`);
    }
}

let number = Number(prompt("Por favor, digite um número para verificar se ele pertence a sequência de Fibonacci"))

isFibonacci(number)

