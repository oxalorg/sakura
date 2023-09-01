import './css/normalize.css'

import sakura from './scss/sakura.scss?inline'
import earthly from './scss/sakura-earthly.scss?inline'
import vader from './scss/sakura-vader.scss?inline'
import dark from './scss/sakura-dark.scss?inline'

console.log("Loading preview.js")

const head = document.head
const themes = [
  {
    name: "Sakura (default)",
    css: sakura,
  },
  {
    name: "sakura-earthly",
    css: earthly,
  },
  {
    name: "sakura-vader",
    css: vader,
  },
  {
    name: "sakura-dark",
    css: dark
  },

];

const styles = themes.map(({ css, name }) => {
  const element = document.createElement('style');
  element.setAttribute('disabled', 'disabled');
  element.innerHTML = css;
  element.dataset.name = name;
  return { element, name };
});

styles.forEach(({ element }) => head.appendChild(element));
let current = 0;

const toggleButton = document.getElementById('toggle-button');
const switchContainer = document.getElementById('switch-container');
const switchButton = document.getElementById('switch-button');
const currentTheme = document.getElementById('current-theme');

setSakura();

function setSakura() {
  const { element, name } = styles[current];
  styles.forEach(({ element }) => element.disabled = true);
  element.disabled = false;
  currentTheme.innerHTML = name;
}

var toggled = true;
function toggleStyle() {
  const { element } = styles[current];
  toggled = !toggled
  if (toggled) {
    element.disabled = false;
  } else {
    element.disabled = true;
  }
  switchContainer.classList.toggle('disabled');
}
toggleButton.addEventListener('click', toggleStyle);

function switchStyle() {
  current = (current + 1) % styles.length;
  setSakura();
}
switchButton.addEventListener('click', switchStyle);
