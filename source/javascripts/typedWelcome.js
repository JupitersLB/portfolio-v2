import Typed from 'typed.js';

const innerContainer = document.getElementById('inner-container')
const typedWelcomeEl = document.getElementById('typed-welcome')

innerContainer.style.opacity = 0


const options = {
  strings: ['Welcome to <i>JupitersLB</i>', 'My name is <i>Liam</i>'],
  startDelay: 1000,
  fadeOut: true,
  fadeOutDelay: 750,
  typeSpeed: 40,
  onComplete: (message) => {
    setTimeout(() => typedWelcomeEl.style.opacity = 0, 1000)
    setTimeout(() => message.destroy(), 2000)
  },
  onDestroy: () => innerContainer.style.opacity = 1
};

export const typedWelcome = new Typed('#typed-welcome', options);
