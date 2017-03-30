var messages = require('./messages');
import Button from './button';

var app = document.getElementById('app');
app.innerHTML = Button.button;

Button.attachEl();

if (module.hot) {
  module.hot.accept();
}