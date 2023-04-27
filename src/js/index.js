


const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice)=> {
    botao.addEventListener('click', () => {
     
      desmarcarBotãoSelecionado();

      selecionarBotão(botao);

      esconderImagemAtiva();
      
      mostrarImagemFundo(indice);
    })
})

function mostrarImagemFundo(indice) {
  imagens[indice].classList.add('ativa');
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector('.ativa');
  imagemAtiva.classList.remove('ativa');
}

function selecionarBotão(botao) {
  botao.classList.add("selecionado");
}

function desmarcarBotãoSelecionado() {
  const botaoSelecionado = document.querySelector(".selecionado");
  botaoSelecionado.classList.remove("selecionado");
}

