function separateWord(sentence) {
  // Split the sentence into an array of words
  const words = sentence.split(" ");

  // Randomly choose an index for the important word
  const randomIndex = Math.floor(Math.random() * words.length);

  // Get the important word and remove it from the array
  const importantWord = words.splice(randomIndex, 1)[0];

  // Replace the important word in the array with underscores
  words.splice(randomIndex, 0, "____");

  // Join the words back into a sentence
  const modifiedSentence = words.join(" ");

  // Add the important word and modified sentence to separate arrays
  const importantWords = [importantWord];
  const modifiedSentences = [modifiedSentence];

  // Return the arrays
  return { impWord: importantWords, sent: modifiedSentences };
}
