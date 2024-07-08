// iconMappings.js (or any appropriate file)

const iconMapping = {
    "good morning": "good morning 🌞",
    "sun": "sun 🌞",
    "dog": "dog 🐕",
    "burger": "burger 🍔",
    "fries": "fries 🍟",
    "pizza": "pizza 🍕",
    "salad": "salad 🥗",
    "birthday": "birthday 🎂",
    "happy": "happy ❤",
    "hello": "hello 👋",
    "student": "student 👨‍🎓",
    "weather": "weather ⛈",
    "rainbow": "rainbow 🌈"
    // Add more mappings as needed
  };
  
  function replaceWordsWithIcons(text) {
    let result = text;
   
    // Iterate over each word-icon pair in the mapping
    for (const [word, icon] of Object.entries(iconMapping)) {
       // Create a regular expression to match the word, case-insensitive
       const regex = new RegExp(`\\b${word}\\b`, 'gi');
   
       // Replace the word with the icon
       result = result.replace(regex, icon);
    }
   
    return result;
  }
  
  module.exports = { iconMapping, replaceWordsWithIcons };
  