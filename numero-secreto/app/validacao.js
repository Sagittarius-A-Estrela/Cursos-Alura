function validaChuteCorreto(chute) {
    const numero = +chute;

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML +='<div>Valor informado Invalido</div>';
        return;
    };

    if (valorMaiorMenosPermitidonumero(numero)) {
        elementoChute.innerHTML +=`<div>Valor precisa estar entre ${menorValor} e ${maiorValor}</div>`;
        return;
    };

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você Acertou!<h2>
        <h3>A resposta era: ${numeroSecreto}
        <br>
        <button id='jogar-novamente' class='btn-jogar'>Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O numero secreto é MENOR que o informado!`;
    } else {
        elementoChute.innerHTML += `<div>O numero secreto é MAIOR que o informado!`;
    };
};

function valorMaiorMenosPermitidonumero(numero) {
    return numero > maiorValor || numero < menorValor;
};

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
};

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    };
});
