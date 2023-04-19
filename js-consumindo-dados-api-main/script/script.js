async function buscaEndereco(cep) {
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCep.json();
        if (consultaCEPConvertida.erro) {
            alert('CEP não existe!');
            throw Error('CEP não existe!');
        }

        var cidade = document.getElementById('cidade');
        var estado = document.getElementById('estado');
        var endereco = document.getElementById('endereco');
        var bairro = document.getElementById('bairro');

        cidade.value = consultaCEPConvertida.localidade;
        endereco.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        bairro.value = consultaCEPConvertida.bairro;
        
        console.log(consultaCEPConvertida);
    } catch (erro) {
        alert('Erro encontrado no CEP informado!');
        console.log(erro);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
