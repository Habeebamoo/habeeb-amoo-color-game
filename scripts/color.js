const colors = ['red', 'yellow', 'green', 'blue', 'black', 'rgb(30, 58, 134)', 'white', 'purple', 'pink', 'rgb(133, 23, 23)', 'rgb(10, 173, 10)'];

const colorSets = [
  {
    color: 'red',
    colorSet: ['tomato', 'rgb(201, 22, 22)', 'red', 'rgb(133, 23, 23)', 'orange', 'rgb(228, 26, 26)']

  }, {
    color: 'yellow',
    colorSet: ['rgb(204, 204, 31)', 'rgb(240, 240, 32)', 'yellow', 'rgb(22, 236, 15)', 'rgb(30, 189, 25)', 'rgb(193, 206, 21)']

  }, {
    color: 'rgb(133, 23, 23)',
    colorSet: ['tomato', 'rgb(201, 22, 22)', 'red', 'rgb(133, 23, 23)', 'orange', 'rgb(228, 26, 26)']
  }, {
    color: 'green',
    colorSet: ['rgb(10, 173, 10)', 'green', 'rgb(19, 107, 19)', 'rgb(85, 219, 85)', 'rgb(54, 124, 54)', 'rgb(83, 212, 83)']
  }, {
    color: 'blue',
    colorSet: ['blue', 'rgb(38, 66, 143)', 'rgb(20, 53, 143)', 'rgb(30, 58, 134)', 'rgb(9, 21, 53)', 'rgb(187, 197, 223)']
  }, {
    color: 'black',
    colorSet: ['black', 'rgb(29, 27, 27)', 'rgb(56, 54, 54)', 'rgb(22, 18, 18)', 'rgb(63, 61, 61)', 'rgb(10, 10, 10)']
  }, {
    color: 'white',
    colorSet: ['white', 'rgb(230, 223, 223)', 'rgb(241, 198, 198)', 'rgb(197, 169, 169)', 'rgb(189, 170, 170)', 'rgb(238, 229, 229)']
  }, {
    color: 'rgb(30, 58, 134)',
    colorSet: ['blue', 'rgb(38, 66, 143)', 'rgb(20, 53, 143)', 'rgb(30, 58, 134)', 'rgb(9, 21, 53)', 'rgb(187, 197, 223)']
  }, {
    color: 'purple',
    colorSet: ['purple', 'rgb(107, 20, 103)', 'rgb(82, 24, 79)', 'rgb(150, 22, 143)', 'rgb(63, 11, 60)', 'rgb(59, 22, 58)']
  }, {
    color: 'pink',
    colorSet: ['pink', 'rgb(180, 131, 172)', 'rgb(219, 157, 209)', 'rgb(243, 122, 223)', 'rgb(236, 166, 225)', 'rgb(206, 180, 202)']
  }, {
    color: 'rgb(10, 173, 10)',
    colorSet: ['rgb(10, 173, 10)', 'green', 'rgb(19, 107, 19)', 'rgb(85, 219, 85)', 'rgb(54, 124, 54)', 'rgb(83, 212, 83)']
  }
];

renderColorGame();
const score = document.querySelector('.gameScore');

function renderColorGame() {
  const boxColor = colors[Math.floor(Math.random() * colors.length)];

  const html = `
    <div class="color-box" style="background: ${boxColor}" data-background="${boxColor}" data-testid="colorBox">
      
    </div>
    <div class="color-options">
      ${displayColorOptions(boxColor)}
    </div>
  `;

  document.querySelector('.color-game').innerHTML = html;

  document.querySelectorAll('.color-option-btn').forEach(button => {
    button.addEventListener('click', () => {
      const { background } = button.dataset;
      const message = document.querySelector('.game-status');
      
      if(background == boxColor) {

        score.innerHTML++;
        displayMessage(message, 'Wow Correct!', 'green');
        setTimeout(() => {
          message.style.display = 'none';
        }, 1000);

      } else {

        displayMessage(message, 'Oops try again!', 'red')
        setTimeout(() => {
          message.style.display = 'none';
        }, 1000);

      }

      renderColorGame();
      message.style.display = 'block';
    })
  });
};

function displayColorOptions(boxColor) {
  let html = '';
  let buttonSets = '';

  colorSets.forEach(colorset => {
    if(boxColor == colorset.color) {
      buttonSets = colorset;
    }
  });

  let coloroptions = buttonSets.colorSet;
  coloroptions = shuffle(coloroptions);
  
  coloroptions.forEach(colorOption => {
    html += `
      <div class="color-option">
        <button style="background-color: ${colorOption}" data-background="${colorOption}" class="color-option-btn" data-testid="colorOption"></button>
      </div>
    `;
  });

  return html;
}

function shuffle(coloroptions) {
  const newArray = [...coloroptions];

  for(let i = newArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }

  return newArray;
}

function displayMessage(elem, message, color) {
  elem.innerText = message;
  elem.style.color = color;
}

function newGame() {
  window.location.reload()
}
