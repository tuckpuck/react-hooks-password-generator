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
          className="w-full h-48 object-cover object-center"
          src={require("./img/lock.jpg")}
          alt="Security lock"
        />
        <div className="w-full px-8 pt-8">
          <h2 className="font-bold text-2xl mb-2">Password Generator</h2>
        </div>
        <div className="flex">
          <div className="w-full md:w-1/2 px-8 pt-4 pb-8">
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
                <span className="range-slider-value">
                  {conditionals.length}
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 px-8 pt-4 pb-8">
            <p>
              {(conditionals.specialChar ||
                conditionals.lowerLetters ||
                conditionals.upperLetters ||
                conditionals.numbers) &&
                password && <span>{password}</span>}
            </p>
            <br />
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              onClick={() => {
                randomPassword();
              }}
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
