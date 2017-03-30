const messages = require('./messages');

import Button from './button';
import Image from './image';

let getContent = () => (
  `
    <div>${Image}</div>
    <div>${Button.button}</div>
  `
);

let app = document.getElementById('app');
app.innerHTML = getContent();
Button.attachEl();

if (module.hot) {
  module.hot.accept();
}