setInterval(() => { changeButtonStyle() }, 1400)

const buttonColors = [
  {
    background: 'red',
    color: 'white'
  }, {
    background: 'green',
    color: 'white'
  }, {
    background: 'black',
    color: 'white'
  }, {
    background: 'white',
    color: 'black'
  }, {
    background: 'rgb(52, 36, 143)',
    color: 'white'
  }, {
    background: 'yellow',
    color: 'black'
  }, {
    background: 'tomato',
    color: 'white'
  }, {
    background: 'pink',
    color: 'black'
  }
];

function changeButtonStyle() {
  const button = document.querySelector('.login-button');

  const random = Math.floor(Math.random() * buttonColors.length);
  const buttonObj = buttonColors[random];
  const { background, color } = buttonObj;

  button.style.background = background;
  button.style.color = color; 
}