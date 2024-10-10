function checkLetterA() {

    let inputString = prompt("Digite uma string para verificar a letra 'a':");

    let lowerCaseString = inputString.toLowerCase();

    let count = 0;

    for (let i = 0; i < lowerCaseString.length; i++) {
        if (lowerCaseString[i] === 'a') {
            count++;
        }
    }

    if (count > 0) {
        alert(`A letra 'a' aparece ${count} vezes na string.`);
    } else {
        alert("A letra 'a' não foi encontrada na string.");
    }
}

checkLetterA();