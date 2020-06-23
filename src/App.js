import React, { useState } from "react";
import "./App.css";

function App() {
  const [conditionals, setConditionals] = useState({
    specialChar: true,
    lowerLetters: true,
    upperLetters: true,
    numbers: true,
    length: 30,
  });
  const [password, setPassword] = useState("");

  const randomPassword = () => {
    let characters = "";
    let length = conditionals.length;

    if (conditionals.lowerLetters) {
      characters += "abcdefghijklmnopqrstuvwxyz";
    }

    if (conditionals.upperLetters) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (conditionals.numbers) {
      characters += "0123456789";
    }

    if (conditionals.specialChar) {
      characters += "!@$%^&*()<>,.?/[]{}-=_+";
    }

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let characterList = characters;
    var password = "";
    if (characterList.length <= 0) {
      return "Select some options to continue";
    }
    for (let i = 0; i < length; ++i) {
      password += characterList[getRandomInt(0, characterList.length - 1)];
    }
    console.log(password);
    setPassword(password);
    return password;
  };

  return (
    <>
      Password Generator
      <br />
      <ul>
        <li>
          Special Characters
          <input
            type="checkbox"
            onChange={(e) => {
              setConditionals({
                ...conditionals,
                specialChar: !conditionals.specialChar,
              });
            }}
            checked={conditionals.specialChar}
          />
        </li>
        <li>
          Upper case letters
          <input
            type="checkbox"
            onChange={(e) => {
              setConditionals({
                ...conditionals,
                upperLetters: !conditionals.upperLetters,
              });
            }}
            checked={conditionals.upperLetters}
          />
        </li>
        <li>
          Lower case letters
          <input
            type="checkbox"
            onChange={(e) => {
              setConditionals({
                ...conditionals,
                lowerLetters: !conditionals.lowerLetters,
              });
            }}
            checked={conditionals.lowerLetters}
          />
        </li>
        <li>
          Numbers
          <input
            type="checkbox"
            onChange={(e) => {
              setConditionals({
                ...conditionals,
                numbers: !conditionals.numbers,
              });
            }}
            checked={conditionals.numbers}
          />
        </li>
        <li>
          Length
          <input
            type="number"
            min="8"
            max="50"
            value={conditionals.length}
            onChange={(e) => {
              setConditionals({
                ...conditionals,
                length: e.target.value,
              });
            }}
          />
        </li>
      </ul>
      <button
        onClick={() => {
          randomPassword();
        }}
      >
        Generate
      </button>
      {password && <p>Password: {password}</p>}
    </>
  );
}

export default App;
