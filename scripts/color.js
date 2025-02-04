const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'white', 'black'];

renderColorGame();

function renderColorGame() {
  let html;

  const random = Math.floor(Math.random() * colors.length);
  const hiddenColor = colors[random];
  console.log(`hidden color: ${hiddenColor}`);

  html = `
    <div class="dashboard">
      <p class="gameScore">Score: 20</p>
    </div>
    <div class="hidden-color-box">
      <p data-hidden-color="${hiddenColor}">?</p>
    </div>
    <div class="color-options">
      ${colorOptions(hiddenColor)}
    </div>
  `;

  document.querySelector('.color-box').innerHTML = html;
};

function getRandomColors() {
  const colorArray = [];

  while(colorArray.length < 5) {
    let random = colors[Math.floor(Math.random() * colors.length)];
    if(!colorArray.includes(random)) {
      colorArray.push(random);
    }
  };

  return colorArray;
}

function colorOptions(hiddenColor) {
  let html = '';
  let pushStatus;

  const colorArray = getRandomColors();

  if(!colorArray.includes(hiddenColor)) {
    pushStatus = 'false';
  } else {
    pushStatus = 'true';
  }

  if(pushStatus == 'false') {
    colorArray.push(hiddenColor);
  } else {
    colors.forEach(color => {
      if(!colorArray.includes(color)) {
        colorArray.push(color)
      }
    })
  };

  console.log(`itContains: ${pushStatus}`);

  filterThe(colorArray);
  console.log(colorArray);

  html = `
    <div class="color-option">
      <button></button>
    </div>
    <div class="color-option">
      <button>Yellow</button>
    </div>
    <div class="color-option">
      <button>White</button>
    </div>
    <div class="color-option">
      <button>Blue</button>
    </div>
    <div class="color-option">
      <button>Green</button>
    </div>
    <div class="color-option">
      <button>Pink</button>
    </div>
  `;

  return html;
};

/*
function shuffle(colorArray) {
  const newArray = [...colorArray];

  for(let i = newArray.length - 1; i > 0; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    newArray[i], newArray[j] = newArray[j], newArray[i]
  };

  return newArray;
}*/

function filterThe(colorArray) {
  while(colorArray.length > 6) {
    colorArray.pop();
  }
}