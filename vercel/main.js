import './style.css'
import '../css/normalize.css';

import sakura from '../css/sakura.css?raw';
import earthly from '../css/sakura-earthly.css?raw';
import vader from '../css/sakura-vader.css?raw';
import dark from '../css/sakura-dark.css?raw';

const head = document.head;
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
].map(({ css, name }) => {
  const element = document.createElement('style');
  element.setAttribute('disabled', 'disabled');
  element.innerHTML = css;
  element.dataset.name = name;
  return { element, ...name };
});
styles.forEach(({ element }) => head.appendChild(element));
let current = 0;

const toggleButton = document.getElementById('toggle-button');
const switchContainer = document.getElementById('switch-container');
const switchButton = document.getElementById('switch-button');
const currentTheme = document.getElementById('current-theme');

setSakura();

function setSakura() {
  const { element } = styles[current];
  styles.forEach(({ element }) => element.disabled = true);
  element.disabled = false;
  currentTheme.innerHTML = `Current theme: ${name}`;
}

function toggleStyle() {
  const { element } = styles[current];
  const { disabled } = element;
  styles.forEach(({ element }) => element.disabled = true);
  element.disabled = !disabled;
  switchContainer.classList.toggle('disabled');
}
toggleButton.addEventListener('click', toggleStyle);

function switchStyle() {
  current = (current + 1) % styles.length;
  setSakura();
}
switchButton.addEventListener('click', switchStyle);
