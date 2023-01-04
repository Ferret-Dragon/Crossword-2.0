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
