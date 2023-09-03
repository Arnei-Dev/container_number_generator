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
    const containerDigit = sum - multSum;

    return containerDigit;
}

// Função para gerar um número de container válido com 11 caracteres
function generateContainerNumber() {
    const letters = Array.from({ length: 3 }, () => String.fromCharCode('A'.charCodeAt(0) + Math.floor(Math.random() * 26)));
    const numbers = Array.from({ length: 6 }, () => Math.floor(Math.random() * 9)).join('');
    const containerNumber = `${letters.join('')}U${numbers}`;
    const containerDigit = calculateContainerDigit(containerNumber);

    return containerNumber + "-" + containerDigit;
}

// Gera e imprime um número de container válido com 11 caracteres

function gerarNumeroContainer() {
    const containerNumber = generateContainerNumber();
    //Condição para atender a regra de identificação do container: Exibir somente 11 digitos
    if (containerNumber.length == 12) {
        document.getElementById("container").value = containerNumber;
        //Exibi botão para copiar o código
        document.getElementById('btn-copy').style.visibility = "visible";
    } else {
        //Função recursiva
        gerarNumeroContainer();
    }
}

//Seleciona e copia o número gerado na tela pelo usúario
document.getElementById('btn-copy').addEventListener('click', inputCopy);
function inputCopy() {
    document.querySelector("#container").select();
    document.execCommand("copy");
    document.getElementById('btn-copiado').style.display = "block";
    document.getElementById('btn-cop').style.display = "block";
    document.getElementById('btn-copy').style.visibility = "hidden";

    setTimeout(function() {
        $('#btn-cop').fadeOut(3000);
     }, 400);

     setTimeout(function() {
        $('#btn-copiado').fadeOut(3000);
     }, 1000);
}
