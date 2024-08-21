let listaSorteados = [];
let limiteNumeroSorteado = 10;
let numeroAleatorio = geraNumero();
let numeroTentativas = 1;
let tent = '';


function mostraTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mostraTextos() {
    mostraTexto('h1', 'Jogo do número secreto!');
    mostraTexto('p', 'escolha um número entre 1 e 10');
}

mostraTextos();

function geraNumero() {
    let numeroEscolhido = parseInt(Math.random() * limiteNumeroSorteado + 1);
    let quantidadeNumerosLista = listaSorteados.length;
    if (quantidadeNumerosLista == limiteNumeroSorteado) {
        listaSorteados = [];
    }
    if (listaSorteados.includes(numeroEscolhido)) {
        return geraNumero();
    } else {
        listaSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}



function limparCampo() {
    document.querySelector('.container__input').value = '';
}

function habilitarBotao() {
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function desabilitarBotao() {
    document.getElementById('reiniciar').setAttribute('disabled', 'disabled');
}

function reiniciarChute() {
    desabilitarBotao();
    numeroTentativas = 1;
    mostraTextos();

    numeroAleatorio = geraNumero();
}

function verificarChute() {
    console.log(listaSorteados);
    let chute = document.querySelector('.container__input').value;
    if (numeroAleatorio == chute) {
        tent = numeroTentativas > 1 ? 'tentativas' : 'tentativa';
        mostraTexto('h1', 'Acertou!');
        mostraTexto('p', `Você descobriu o número secreto com ${numeroTentativas} ${tent}!`);
        habilitarBotao()
    } else if (numeroAleatorio != chute) {
        mostraTexto('h1', 'Tente novamente, errou!');
        if (numeroAleatorio > chute) {
            mostraTexto('p', 'O número é maior!');
        } else if (numeroAleatorio < chute) {
            mostraTexto('p', 'O número é menor!');
        }
    }
    numeroTentativas++;
    limparCampo();
    console.log(numeroAleatorio);
}


