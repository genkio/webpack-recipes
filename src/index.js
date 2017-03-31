const style = require('./style/globalStyle.css');

const messages = require('./messages');

import Button from './button';
import Image from './image';
import Logo from './logo';
import { add } from './math';

let getContent = () => (
  `
    <div class="${style.box}">
      <div>${Image}${Logo}</div>
      <div>${Button.button}</div>
      <div>${add(1, 1)}</div>
      <div>DEV: ${DEVELOPMENT.toString()}</div>
      <div>PROD: ${PRODUCTION.toString()}</div>
    </div>
  `
);

let app = document.getElementById('app');
app.innerHTML = getContent();
Button.attachEl();

if (DEVELOPMENT) {
  if (module.hot) {
    module.hot.accept();
  }
}