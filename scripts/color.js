const colors = ['red', 'yellow', 'green'];

const colorSets = [
  {
    color: 'red',
    colorSet: ['tomato', 'rgb(201, 22, 22)', 'red', 'rgb(133, 23, 23)', 'orange', 'rgb(228, 26, 26)']

  }, {
    color: 'yellow',
    colorSet: ['rgb(204, 204, 31)', 'rgb(240, 240, 32)', 'yellow', 'rgb(22, 236, 15)', 'rgb(30, 189, 25)', 'rgb(193, 206, 21)']

  }, {
    color: 'green',
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
        displayMessage(message, 'Correct!', 'green');
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
