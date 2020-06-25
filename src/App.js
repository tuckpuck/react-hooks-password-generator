import React, { useState, useEffect } from "react";
import "./styles/App.css";

function App() {
  const [conditionals, setConditionals] = useState({
    specialChar: true,
    lowerLetters: true,
    upperLetters: true,
    numbers: true,
    length: 30,
  });
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(
      `specialChar:${conditionals.specialChar}, lowerLetters:${conditionals.lowerLetters},upperLetters:${conditionals.upperLetters}, numbers:${conditionals.numbers}`
    );
  }, [conditionals]);

  useEffect(() => randomPassword(), [conditionals]);

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
      characters += "!@$%^&*()<div>,.?/[]{}-=_+";
    }

    let characterList = characters;
    console.log(characterList);
    let password = "";
    for (let i = 0; i < length; ++i) {
      password += characterList[getRandomInt(0, characterList.length - 1)];
    }
    setPassword(password);
  };

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="flex justify-center h-screen">
      <div className="rounded overflow-hidden shadow-lg w-full md:w-10/12 lg:w-8/12 m-auto">
        <img
          className="w-full"
          src="/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #winter
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* <div>
      Password Generator
      <br />
      <ul>
        <li>
          Special Characters
          <input
            type="checkbox"
            checked={conditionals.specialChar}
            onChange={(e) => {
              setConditionals({
                ...conditionals,
                specialChar: !conditionals.specialChar,
              });
            }}
          />
        </li>
        <li>
          Upper case letters
          <input
            type="checkbox"
            checked={conditionals.upperLetters}
            onChange={(e) => {
              setConditionals({
                ...conditionals,
                upperLetters: !conditionals.upperLetters,
              });
            }}
          />
        </li>
        <li>
          Lower case letters
          <input
            type="checkbox"
            checked={conditionals.lowerLetters}
            onChange={(e) => {
              setConditionals({
                ...conditionals,
                lowerLetters: !conditionals.lowerLetters,
              });
            }}
          />
        </li>
        <li>
          Numbers
          <input
            type="checkbox"
            checked={conditionals.numbers}
            onChange={(e) => {
              setConditionals({
                ...conditionals,
                numbers: !conditionals.numbers,
              });
            }}
          />
        </li>
        <li>
          Length
          <input
            type="range"
            className="range-slider"
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
          <span className="range-slider-value">{conditionals.length}</span>
        </li>
      </ul>
      <button
        onClick={() => {
          randomPassword();
        }}
      >
        Generate
      </button>
      <p>
        Password:
        {(conditionals.specialChar ||
          conditionals.lowerLetters ||
          conditionals.upperLetters ||
          conditionals.numbers) &&
          password && <span>{password}</span>}
      </p>
    </div> */
}
