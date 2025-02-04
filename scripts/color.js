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
]

renderColorGame();

function renderColorGame() {
  let html;

  const boxColor = colors[Math.floor(Math.random() * colors.length)];

  html = `
    <div class="dashboard">
      <p class="gameScore">Score: 2, High Score: 5</p>
    </div>
    <div class="color-box" style="background: ${boxColor}" data-background="${boxColor}">
      
    </div>
    <div class="color-options">
      ${displayColorOptions(boxColor)}
    </div>
  `;

  document.querySelector('.color-game').innerHTML = html;

  document.querySelectorAll('.color-option-btn').forEach(button => {
    button.addEventListener('click', () => {
      const { background } = button.dataset;
      
      if(background == boxColor) {
        alert('correct')
      } else {
        alert('wrong')
      }

    })
  });
};

function displayColorOptions(boxColor) {
  let html = '';
  let sets = '';

  colorSets.forEach(colorset => {
    if(boxColor == colorset.color) {
      sets = colorset;
    }
  });

  let coloroptions = sets.colorSet;
  coloroptions = shuffle(coloroptions);
  
  coloroptions.forEach(colorOption => {
    html += `
      <div class="color-option">
        <button style="background-color: ${colorOption}" data-background="${colorOption}" class="color-option-btn"></button>
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