// Função para calcular o dígito verificador do número de container
function calculateContainerDigit(containerNumber) {
    const letterValues = [
        10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24,
        25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37, 38
    ];

    let sum = 0;

    for (let i = 0; i < containerNumber.length; i++) {
        const ch = containerNumber.charAt(i);
        const positionValue = isNaN(ch) ? letterValues[ch.charCodeAt(0) - 'A'.charCodeAt(0)] : parseInt(ch);
        const position = 2 ** i;
        sum += positionValue * position;
    }

    const divSum = Math.floor(sum / 11);
    const multSum = divSum * 11;
    const containerDigit = multSum - sum;

    return containerDigit;
}

// Função para gerar um número de container válido com 11 caracteres
function generateContainerNumber() {
    const letters = Array.from({ length: 3 }, () => String.fromCharCode('A'.charCodeAt(0) + Math.floor(Math.random() * 26)));
    const numbers = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join('');
    const containerNumber = `${letters.join('')}U${numbers}`;
    const containerDigit = calculateContainerDigit(containerNumber);

    return containerNumber + containerDigit;
}

// Gera e imprime um número de container válido com 11 caracteres

function gerarNumeroContainer(){
    const containerNumber = generateContainerNumber();
   // console.log(`Número de container gerado: ${containerNumber}`);
    document.getElementById("container").value = containerNumber;
}

