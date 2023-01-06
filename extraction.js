function separateWord(sentence) {
  sentence = sentence.replace(/,/g, ".");
  // Split the sentence into an array of words
  const wordsB = sentence.split(" ");

  // Randomly choose an index for the important word
  var randomIndex = Math.floor(Math.random() * wordsB.length);

  // Get the important word and remove it from the array
  var importantWord = '';
  //importantWord = importantWord.replace(/[^\x.00-\x7F]/g, "");
  //importantWord = importantWord.replace(/['"]+/g, '');

  while(importantWord.length <= 3){
    randomIndex = Math.floor(Math.random() * wordsB.length);
    importantWord = wordsB.splice(randomIndex, 1)[0];
    importantWord = importantWord.replace(/[^\x.00-\x7F]/g, '');
    importantWord = importantWord.replace(/['"]+/g, '');
  }

  // Replace the important word in the array with underscores
  wordsB.splice(randomIndex, 0, importantWord);

  // Join the words back into a sentence
  var modifiedSentence = wordsB.join(" ");
  //alert((typeOf(modifiedSentence)));
  // Add the important word and modified sentence to separate arrays
  //const importantWords = [importantWord];
  //const modifiedSentences = [modifiedSentence];

  modsList.push(modifiedSentence);
  alert("Modified sentence:  " + modifiedSentence);
  alert("Theee lissst:  " + modsList.toString());

  // Return the arrays
  return importantWord.toLowerCase();
}

function arrayFromStorage(key){
  return JSON.parse((localStorage.getItem(key)));
}