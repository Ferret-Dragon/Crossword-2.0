function separateWord(sentence) {
  
  sentence = sentence.replace(/,/g, ";");
  modsList.push(sentence);
  // Split the sentence into an array of words
  let wordsB = sentence.split(" ");

  // Randomly choose an index for the important word
  var randomIndex = Math.floor(Math.random() * wordsB.length);

  // Get the important word and remove it from the array
  var importantWord = '';
  //importantWord = importantWord.replace(/[^\x.00-\x7F]/g, "");
  //importantWord = importantWord.replace(/['"]+/g, '');

  while(importantWord.length <= 3 && wordsB[randomIndex] != "that" && wordsB[randomIndex] != "very" && wordsB[randomIndex] != "every"){
    randomIndex = Math.floor(Math.random() * wordsB.length);
    importantWord = wordsB[randomIndex];
  }
  importantWord = (importantWord.replace(".","")).replace('-','');
  // Replace the important word in the array with underscores
  //wordsB.splice(randomIndex, 0, importantWord);

  // Join the words back into a sentence

  importantWord = importantWord.replace(/[^\x00-\x7F]/g, '');
    importantWord = (importantWord.replace(/['"]+/g, ''));

  return importantWord.toLowerCase();
}

function modifySentence(word,sentence){
  let wordsA = sentence.split(" ");
  let wordsC = sentence.split(" ");
  
  for(var f = 0; f < wordsA.length;f++){
    wordsA[f]=strip(wordsA[f]);
    if(wordsA[f]==(word)){
      wordsC[f]=" _______ ";
    }
  }
  return (wordsC.toString()).replace(/,/g, " ");
  //return sentence.replace(word, '_______');
}

function arrayFromStorage(key){
  return JSON.parse((localStorage.getItem(key)));
}

function strip(phrase){
  let newValue = phrase.toLowerCase()
  return ((newValue.replace(".","")).replace('-','')).replace(",","");
}