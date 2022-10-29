const initScroll = () => {
  const root = document.querySelector('.marquee');
  if (!root) return;
  const ul = root.querySelector('ul');
  ul.innerHTML += ul.innerHTML;
};

const init = () => {
  initScroll();
  let maxWidth = localStorage.getItem('maxWidth') === 'true';
  if (maxWidth) {
    document.querySelector('.container').classList.add('max-width');
  }
};

addEventListener('DOMContentLoaded', init);
console.log("%c 作者：roll-day(misaka-mikoto-love) %c https://github.com/roll-day ", "color: #fff; margin: 1em 0; padding: 5px 0; background: #E18393;", "margin: 1em 0; padding: 5px 0; background: #efefef;")