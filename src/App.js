import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😒": "Unamused Face",
  "🥳": "Partying Face",
  "😎": "Smiling Face with Sunglasses",
  "😮": "Face with Open Mouth",
  "😲": "Astonished Face",
  "🥺": "Pleading Face",
  "😰": "Anxious Face with Sweat",
  "😱": "Face Screaming in Fear",
  "😞": "Disappointed Face",
  "😓": "Downcast Face with Sweat",
  "😤": "Face with Steam From Nose",
  "😠": "Angry Face",
  "🙅": "Person Gesturing No",
  "🙅‍♂️": "Man Gesturing No",
  "🙆": "Person Gesturing OK",
  "🙆‍♂️": "Man Gesturing OK",
  "🙆‍♀️": "Woman Gesturing OK",
  "💁": "Person Tipping Hand",
  "💁‍♂️": "Man Tipping Hand",
  "💁‍♀️": "Woman Tipping Hand",
  "🙋": "Person Raising Hand",
  "🙋‍♂️": "Man Raising Hand"
};

var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry, we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Emoji Interpreter </h1>
      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>

      <h3> Emojis We Know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "3rem", padding: " 1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
