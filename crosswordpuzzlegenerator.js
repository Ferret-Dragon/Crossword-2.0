const attemptsToFitWords = 5000;
const gridsToMake = 20;
const gridSize = 20;

let directionListFinale = [];

let usedWords = [];
let generatedGrids = [];
let goodStartingLetters = new Set();

let slots = gridSize * gridSize;
let gridDiv = document.getElementById("grid");
let row = 0;
let column = 0;
for (let slot = 0; slot < slots; slot++) {
  let div = document.createElement("DIV");
  div.id = row + "_" + column;
  div.classList.add("slot");
  div.style.border = '1px solid #e9e9e9';
  div.style.backgroundColor = '#e9e9e9';
  gridDiv.appendChild(div);
  column++;
  if (column >= gridSize) {
    column = 0;
    row++;
  }
}

let createCrossWordPuzzle = function() {
  //directionsDirectionList = [];

  let attemptToPlaceWordOnGrid = function(grid, word) {
    let text = getAWordToTry();
    for (let row = 0; row < gridSize; ++row) {
      for (let column = 0; column < gridSize; ++column) {
        word.text = text;
        word.row = row;
        word.column = column;
        word.vertical = Math.random() >= 0.5;

        if (grid.isLetter(row, column)) {
          if (grid.update(word)) {
            pushUsedWords(word.text);
            return true;
          }
        }
      }
    }
    return false;

  }

  let getAWordToTry = function() {
    let word = getRandomWord(words);
    let goodWord = isGoodWord(word);

    while (usedWords.includes(word) || !goodWord) {
      word = getRandomWord(words);
      goodWord = isGoodWord(word);
    }
    return word;
  }

  let getBestGrid = function(grids) {
    let bestGrid = grids[0];
    for (let grid of grids) {
      if (grid.getIntersections() >= bestGrid.getIntersections()) {
        bestGrid = grid;
      }
    }
    return bestGrid;
  }

  let isGoodWord = function(word) {
    let goodWord = false;
    for (let letter of goodStartingLetters) {
      if (letter === word.charAt(0)) {
        goodWord = true;
        break;
      }
    }
    return goodWord;
  }

  let generateGrids = function() {
    generatedGrids = [];

    for (let gridsMade = 0; gridsMade < gridsToMake; gridsMade++) {
      let grid = new CrosswordPuzzle();
      let word = new Word(getRandomWordOfSize(getUnusedWords(), 9),
        0, 0, false);
      grid.update(word);
      pushUsedWords(word.text);

      let continuousFails = 0;
      for (let attempts = 0; attempts < attemptsToFitWords; ++attempts) {
        let placed = attemptToPlaceWordOnGrid(grid, word);
        if (placed) {
          continuousFails = 0;
        }
        else {
          continuousFails++;
        }
        if (continuousFails > 470) {
          break;
        }
      }

      generatedGrids.push(grid);
      if (grid.getIntersections() >= 4) {
        break;
      }
      usedWords = [];
    }
  }

  let displayCrosswordPuzzle = function(bestGrid) {
    for (let row = 0; row < gridSize; ++row) {
      for (let column = 0; column < gridSize; ++column) {
        let slot = document.getElementById(row + "_" + column);
        if (bestGrid.isLetter(row, column)) {
          slot.innerHTML = bestGrid.grid[row][column];
          slot.style.borderBottom = '1px solid #9a8e9a';
          slot.style.borderRight = '1px solid #9a8e9a';
          slot.style.backgroundColor = 'rgb(102, 178, 255)';
        }
        else {
          slot.innerHTML = "";
          slot.style.border = '1px solid #e9e9e9';
          slot.style.backgroundColor = '#e9e9e9';
        }
      }
    }
  }

  let pushUsedWords = function(text) {
    usedWords.push(text);
    text.split('').filter(char => goodStartingLetters.add(char));
  }

  generateGrids();
  let bestGrid = getBestGrid(generatedGrids);
  let list_of_directions = bestGrid.directions;
  let list_of_words = bestGrid.words;
  let list_of_rows = bestGrid.rows;
  let list_of_columns = bestGrid.columns;

  let arrayOfWordObj = [];
  let leHint = '';
  let hintsList = JSON.parse(localStorage.getItem("clues"));
  let extras = ["The word \"nerd\" was first coined by Dr. Seuss in his book \"If I Ran the Zoo.\"","The tallest mammal is the giraffe, which can grow up to 18 feet (5.5 meters) tall.","A group of flamingos is called a flamboyance.","The longest recorded flight of a chicken is thirteen seconds.","The Pacific Ocean is the largest ocean on Earth","The skin is the largest organ on the human body"];
  hintsList = hintsList.concat[extras];
  alert(hintsList);
  for (var k = 0; k < (bestGrid.words).length; k++) {
    //for every item in **list, lowercase the item.  if it contains word.text, remove that word, then add that item as the clue
    //let wordObj = word_answer;
    leHint = 'ERROR LOADING';
    for(var h = 0; h < hintsList.length; h++){
      if(hintsList[h].includes(list_of_words[k])){
        leHint = modifySentence(list_of_words[k],hintsList[h]);
      }
    }

    var wordObj = {number: k+1, direction: list_of_directions[k], row: list_of_rows[k]+1, column: list_of_columns[k]+1, clue: leHint, answer: list_of_words[k], hint: 'http://www.angelo.edu/asu_facts/history.php'};
  console.log(wordObj);
/*wordObj.number = k + 1;
wordObj.direction = list_of_directions[k];
wordObj.row = list_of_rows[k];
wordObj.column = list_of_columns[k];
wordObj.answer = list_of_words[k];*/

arrayOfWordObj.push(wordObj);
  }

//displayCrosswordPuzzle(bestGrid);
//alert("array: " + JSON.stringify(arrayOfWordObj));
alert(arrayOfWordObj.length);
localStorage.setItem('wordList', (JSON.stringify(arrayOfWordObj)));
location.replace("puzzle.html");
}





function getUnusedWords() {
  return words.filter(val => !usedWords.includes(val));
}

function getRandomWordOfSize(wordList, wordSize) {
  let properLengthWords = wordList.filter(val => val.length >= wordSize);
  return properLengthWords[getRandomInt(properLengthWords.length)]
}

function getRandomWord(wordList) {
  let words = getUnusedWords();
  return words[getRandomInt(words.length)]
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}