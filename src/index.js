var messages = require('./messages');

var app = document.getElementById('app');
app.innerHTML = `<p>Hello ${messages.hi}!</p>`;

if (module.hot) {
  module.hot.accept();
}