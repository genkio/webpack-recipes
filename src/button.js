export default {
  button: '<button id="myButton">Click me</button>',
  attachEl: () => {
    document.getElementById('myButton').addEventListener('click', () => {
      console.log('clicked');
    });
  }
};