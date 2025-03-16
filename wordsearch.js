const wordSearch = (letters, word) => {
  // Check if the matrix is an empty array and return false if it is
  if (letters.length === 0) {
    return false;
  }

  // Check the horizontal arrays by turning them into strings
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      console.log("Word found:", word);
      return true;
    }
  }

  // Create an array of vertical letters, turn it into a string, and check for the word
  for (let x = 0; x < letters[0].length; ++x) {
    // Fix the loop to iterate correctly
    let temp = [];
    for (let y = 0; y < letters.length; ++y) {
      temp.push(letters[y][x]);
    }
    if (temp.join("").includes(word)) {
      console.log("Word found:", word);
      return true;
    }
  }

  // Return false if the word is not present

  return false;
};

wordSearch(
  [
    ["A", "W", "C", "F", "Q", "U", "A", "L"],
    ["S", "E", "I", "N", "F", "E", "L", "D"],
    ["Y", "F", "C", "F", "Q", "U", "A", "L"],
    ["H", "M", "J", "T", "E", "V", "R", "G"],
    ["W", "H", "C", "S", "Y", "E", "R", "L"],
    ["B", "F", "R", "E", "N", "E", "Y", "B"],
    ["U", "B", "T", "W", "A", "P", "A", "I"],
    ["O", "D", "C", "A", "K", "U", "A", "S"],
    ["E", "Z", "K", "F", "Q", "U", "A", "L"],
  ],
  "QUAL"
);
