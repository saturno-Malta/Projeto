const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');
let isJumping = false;

const jump = () => {
  if (!isJumping) {
    isJumping = true;
    mario.classList.add('jump');
    setTimeout(() => {
      mario.classList.remove('jump');
      isJumping = false;
    }, 300);
  }
};

const loop = setInterval(() => {
  console.log('loop');
  const tuboPosition = tubo.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  if (tuboPosition <= 120 && marioPosition >= 0 && marioPosition <= 80) {
    tubo.style.animationPlayState = 'paused';
    tubo.style.left = `${tuboPosition}px`;
    mario.style.animationPlayState = 'paused';
    mario.style.bottom = `${marioPosition}px`;
    mario.src = './imagem/mario2.png';
    mario.style.width = '75px';
    mario.style.marginLeft ='50px';
    clearInterval(loop);
  }
}, 10);

document.addEventListener('keydown', jump);
