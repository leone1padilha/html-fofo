function fugir() {
  const btn = document.getElementById("nao");
  const container = document.querySelector(".botoes");

  const maxX = container.clientWidth - btn.offsetWidth;
  const maxY = container.clientHeight - btn.offsetHeight;

  const randX = Math.floor(Math.random() * maxX);
  const randY = Math.floor(Math.random() * maxY);

  btn.style.left = randX + "px";
  btn.style.top = randY + "px";
}

const btn = document.getElementById('btn-coracoes');

btn.addEventListener('click', () => {
  for (let i = 0; i < 20; i++) {
    criarCoracao();
  }
});

function criarCoracao() {
  const coracao = document.createElement('div');
  coracao.classList.add('coracao');

  const rect = btn.getBoundingClientRect();

  // Posicionar no centro do botão
  coracao.style.left = (rect.left + rect.width / 2) + 'px';
  coracao.style.top = (rect.top + rect.height / 2) + 'px';

  // Direção horizontal aleatória entre -150px e +150px
  const randomX = (Math.random() * 300 - 150).toFixed(2) + 'px';

  // Direção vertical aleatória entre -300px e -150px (voando pra cima)
  const randomY = (Math.random() * -150 - 150).toFixed(2) + 'px';

  coracao.style.setProperty('--x', randomX);
  coracao.style.setProperty('--y', randomY);

  document.body.appendChild(coracao);

  coracao.addEventListener('animationend', () => {
    coracao.remove();
  });
}

