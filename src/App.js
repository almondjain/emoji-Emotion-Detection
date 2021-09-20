import React, { useState } from "react";
import "./styles.css";

var emojiMeaningDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "😀": "Grining face",
  "😉": "Winking face",
  "😠": "Angry face",
  "🥡": "takeout box",
  "😑": "annoyance",
  "😗": "Kissing face",
  "🤑": "Money mouth face",
  "😐": "Neutral face",
  "❤️": "love",
  "💋": "Kiss",
  "💀": "Skull",
  "👽": "Alien",
  "🤖": "Robot",
  "👌": "Ok hand",
  "🙏": "Folded hands"
};

//It will return all the emoji,, i.e. keys of our emoji dictionary
var emojisCollection = Object.keys(emojiMeaningDictionary);
console.log(emojisCollection);

export default function App() {
  const [meaning, setMeaning] = useState("");

  // Handler called when we input anything
  function emojiInputHandler(event) {
    var userInputEmoji = event.target.value;
    // We will fetch the meaning of emoji which user enter from the dictionary we Made
    var meaning = emojiMeaningDictionary[userInputEmoji];

    //check if user enter emoji which is not in our dictionary
    if (meaning === undefined) {
      meaning =
        "We don't have this Emoji in our Database. Please try another one!";
    }
    //updating useState fnx, with variable meaning(data which we fetch)
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    console.log("Hello");
    var meaning = emojiMeaningDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Emotion Detection</h1>
      <h3>Enter your favourite Emoji</h3>

      {/* Taking Input as input box and applying handler onchange of each char */}
      <input
        placeholder="Enter your favourite emoji"
        onChange={emojiInputHandler}
      />
      <h2>{meaning}</h2>

      <h4>List of Emoji</h4>

      {/* loop the list and print the list of keys of dictionary */}
      {emojisCollection.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
