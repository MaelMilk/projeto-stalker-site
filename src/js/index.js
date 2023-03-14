/*
OBJETIVO - quando clicar no botão mostrar imagem correspondente

1 - dar um jeito de pegar o elemnto html dos botões 

2 - dar um jeito de identificar o clique do usuario no botão

3 - desmarcar o botão selecionado anterior 

4 - marcar o botão selecionado anterior

5 - esconder a imagem anterior

6 - fazer aparecer a imagem correspondente ao botão clicado

*/

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
             
        desativarBotaoSelecionado();
       
        selecionarBotaoCarrosel(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

