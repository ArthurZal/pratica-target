function isFibonacci(number) {

    let a = 0;
    let b = 1;

    if (number === a || number === b) {
        return alert(`O número ${number} pertence a sequência Fibonacci`);
    }

    while (b < number) {

        let temporaryValue = b;
        b = a + b;
        a = temporaryValue;
    }


}