function extractKeyword(sentence) {
  // Split the sentence into words
  const words = sentence.split(' ');

  // Create a list to store the keywords
  const keywords = [];

  // Iterate through the words and keep only those that are longer than 3 characters
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 3) {
      keywords.push(words[i]);
    }
  }

  // Select a random keyword
  const keyword = keywords[Math.floor(Math.random() * keywords.length)];

  // Replace the keyword with "___" in the sentence
  const modifiedSentence = sentence.replace(keyword, "___");

  // Return the modified sentence and the keyword
  return { modifiedSentence, keyword };
}

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
  return { importantWords, modifiedSentences };
}