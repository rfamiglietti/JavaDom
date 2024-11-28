
// Adivinhação -----------------------------------------------------------------------
function play() {
    const chute = parseInt(document.getElementById('chute').value);
    const numScreto = Math.floor(Math.random() * 10) + 1;
    const resultado = document.getElementById('resultado');

    if (!chute || chute < 1 || chute > 10) {
        resultado.textContent = 'Por favor, digite um número válido entre 1 e 10.';
        resultado.style.color = 'red';
    } else if (chute === numScreto) {
        resultado.textContent = `Parabéns, você acertou! O número era ${numScreto}.`;
        resultado.style.color = 'green';
    } else {
        resultado.textContent = `Tente novamente! O número era ${numScreto}.`;
        resultado.style.color = 'blue';

    }
}


// VERIFICAR ANO BISSEXTO ------------------------------------------------------------------------
function verificar() {
    const ano = parseInt(document.getElementById('yearInput').value);
    const resultado = document.getElementById('resultado');

    if (!ano || ano <= 0) {
        resultado.textContent = 'Por favor, insira um ano válido.';
        resultado.style.color = 'red';
    } else if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        resultado.textContent = `O ano ${ano} é bissexto!`;
        resultado.style.color = 'green';
    } else {
        resultado.textContent = `O ano ${ano} não é bissexto.`;
        resultado.style.color = 'red';
    }
}


// CALCULADORA DE GORJETA ------------------------------------------------------------------------
function calculargorjeta() {
    const valorconta = parseFloat(document.getElementById('valorconta').value);
    const nivelgorjeta = parseFloat(document.getElementById('nivelgorjeta').value);
    const resultado = document.getElementById('resultado');

    // Verifica se o valor da conta é válido
    if (isNaN(valorconta) || valorconta <= 0) {
        resultado.textContent = 'Por favor, insira um valor válido para a conta.';
        resultado.style.color = 'red';
        return;
    }

    // Calcula a gorjeta e o valor total
    const gojeta = valorconta * nivelgorjeta;
    const total = valorconta + gojeta;

    // Exibe os resultados
    resultado.textContent = `Gorjeta: R$ ${gojeta.toFixed(2)} | Total a pagar: R$ ${total.toFixed(2)}`;
    resultado.style.color = 'green';
}


// CALCULADORA DE MEDIA ESCOLAR  ------------------------------------------------------------------------
function calcularmedia() {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const n3 = parseFloat(document.getElementById('n3').value);
    const n4 = parseFloat(document.getElementById('n4').value);
    const resultado = document.getElementById('resultado');

    // Verifica se as notas são válidas
    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
        resultado.textContent = 'Por favor, insira todas as notas.';
        resultado.style.color = 'red';
        return;
    }

    // Calcula a média
    const media = (n1 + n2 + n3 + n4) / 4;

    // Define o resultado baseado na média
    if (media >= 7) {
        resultado.textContent = `Média: ${media.toFixed(2)} - Aprovado! 🎉`;
        resultado.style.color = 'green';
    } else if (media >= 5) {
        resultado.textContent = `Média: ${media.toFixed(2)} - Recuperação. ⚠️`;
        resultado.style.color = 'orange';
    } else {
        resultado.textContent = `Média: ${media.toFixed(2)} - Reprovado. ❌`;
        resultado.style.color = 'red';
    }
}


// CALCULADORA DE MEDIA ESCOLAR  ------------------------------------------------------------------------
function verificarsaudacao() {
    const dia = new Date(); // Obtém a data e hora atuais
    const hora = dia.getHours(); // Obtém somente a hora atual
    const resultado = document.getElementById('resultado');
    
    // Define a saudação com base na hora
    if (hora >= 6 && hora < 12) {
        resultado.textContent = `Bom Dia! agora são ${hora}h`;
    } else if (hora >= 12 && hora < 18) {
        resultado.textContent = `Bom Tarde! agora são ${hora}h`;
    } else {
        resultado.textContent = `Boa Noite! agora são ${hora}h`;
    }

    resultado.style.color = 'blue';
}