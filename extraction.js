function separateWord(sentence) {
  
  sentence = sentence.replace(/,/g, ";");
  modsList.push(sentence);
  // Split the sentence into an array of words
  let wordsB = sentence.split(" ");

  // Randomly choose an index for the important word
  var randomIndex = Math.floor(Math.random() * wordsB.length);

  // Get the important word and remove it from the array
  var importantWord = '';

  while(importantWord.length <= 3 && wordsB[randomIndex] != "that" && wordsB[randomIndex] != "very" && wordsB[randomIndex] != "every"){
    randomIndex = Math.floor(Math.random() * wordsB.length);
    importantWord = wordsB[randomIndex];
  }
  importantWord = (importantWord.replace(".","")).replace('-','');

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
}

function strip(phrase){
  let newValue = phrase.toLowerCase()
  return (((newValue.replace(".","")).replace('-','')).replace(",","")).replace(";","");
}

