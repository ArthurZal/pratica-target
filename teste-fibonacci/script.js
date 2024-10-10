function isFibonacci(number) {

    let a = 0;
    let b = 1;
   
    if (number === 0 || number === 1) {
        return alert(`O número ${number} PERTENCE a sequência de Fibonacci`);
    }

    while (b < number) {

        let temporaryValue = b;
        b = a + b;
        a = temporaryValue;
    }

    if (b === number) {
        
        return alert(`O número ${number} PERTENCE a sequência de Fibonacci`);
    
    } else {
        return alert(`O número ${number} NÃO pertence a sequência de Fibonacci`);
    }
}

let input = prompt("Por favor, digite um número para verificar se ele pertence à sequência de Fibonacci.");


if (input === "" || isNaN(Number(input))) {

    alert("Por favor, insira um número válido."); 

} else {
    
    let number = Number(input); 

    isFibonacci(number); 
}
