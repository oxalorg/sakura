import './style.css'
import '../css/normalize.css';

import sakura from '../css/sakura.css?raw';
import earthly from '../css/sakura-earthly.css?raw';
import vader from '../css/sakura-vader.css?raw';
import dark from '../css/sakura-dark.css?raw';

const styles = [
  {
    name: 'Sakura (default)',
    css: sakura
  },
  {
    name: 'sakura-earthly',
    css: earthly
  },
  {
    name: 'sakura-vader',
    css: vader
  },
  {
    name: 'sakura-dark',
    css: dark
  },
];
let current = 0;

const styleAttribute = document.getElementById('sakura-css');
const toggleButton = document.getElementById('toggle-button');
const switchContainer = document.getElementById('switch-container');
const switchButton = document.getElementById('switch-button');
const currentTheme = document.getElementById('current-theme');

setSakura(styles[current]);

function setSakura(style) {
  const { name, css } = style;
  styleAttribute.innerHTML = css
  currentTheme.innerHTML = `Current theme: ${name}`;
}

function toggleStyle() {
  styleAttribute.disabled = !styleAttribute.disabled;
  switchContainer.classList.toggle('disabled');
}
toggleButton.addEventListener('click', toggleStyle);

function switchStyle() {
  current = (current + 1) % styles.length;
  setSakura(styles[current]);
}
switchButton.addEventListener('click', switchStyle);
