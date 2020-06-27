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
      <div className="rounded overflow-hidden shadow-lg border-gray-400 border w-full md:w-10/12 lg:w-6/12 m-auto">
        <div className="w-full px-8 pt-8 text-center">
          <h2 className="text-3xl mb-2">Password Generator</h2>
          <p>Generate a secure, random passowrd</p>
        </div>
        <div className="passwordInput w-11/12 py-4 text-center border border-gray-200 text-2xl my-6 mx-auto cursor-pointer">
          <p className="vertical-middle">
            {(conditionals.specialChar ||
              conditionals.lowerLetters ||
              conditionals.upperLetters ||
              conditionals.numbers) &&
              password && <span>{password}</span>}
          </p>
        </div>
        <div className="flex">
          <div className="w-full md:w-1/2 px-8 pt-4 pb-8">
            <ul>
              <li>
                <input
                  type="checkbox"
                  checked={conditionals.specialChar}
                  className="form-checkbox h-6 w-6"
                  onChange={(e) => {
                    setConditionals({
                      ...conditionals,
                      specialChar: !conditionals.specialChar,
                    });
                  }}
                />
                <span className="align-top text-xl">&nbsp;&nbsp;Symbols</span>
              </li>
              <li>
                <input
                  type="checkbox"
                  checked={conditionals.upperLetters}
                  className="form-checkbox h-6 w-6"
                  onChange={(e) => {
                    setConditionals({
                      ...conditionals,
                      upperLetters: !conditionals.upperLetters,
                    });
                  }}
                />
                <span className="align-top text-xl">&nbsp;&nbsp;Uppercase</span>
              </li>
              <li>
                <input
                  type="checkbox"
                  checked={conditionals.lowerLetters}
                  className="form-checkbox h-6 w-6"
                  onChange={(e) => {
                    setConditionals({
                      ...conditionals,
                      lowerLetters: !conditionals.lowerLetters,
                    });
                  }}
                />
                <span className="align-top text-xl">&nbsp;&nbsp;Lowercase</span>
              </li>
              <li>
                <input
                  type="checkbox"
                  checked={conditionals.numbers}
                  className="form-checkbox h-6 w-6"
                  onChange={(e) => {
                    setConditionals({
                      ...conditionals,
                      numbers: !conditionals.numbers,
                    });
                  }}
                />
                <span className="align-top text-xl">&nbsp;&nbsp;Numbers</span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 px-8 pt-4 pb-8">
            <span className="align-top text-xl">Length</span>
            <br />
            <input
              type="range"
              className="range-slider w-full"
              min="8"
              max="60"
              value={conditionals.length}
              onChange={(e) => {
                setConditionals({
                  ...conditionals,
                  length: e.target.value,
                });
              }}
            />
            <br />
            <br />
            <input
              type="number"
              min="8"
              max="60"
              className="numberInput shadow appearance-none border border-gray-400 rounded w-19 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              value={conditionals.length}
              onChange={(e) => {
                let max = parseInt(e.target.max);
                let value = parseInt(e.target.value);

                if (value > max) {
                  value = max;
                }
                setConditionals({
                  ...conditionals,
                  length: value,
                });
              }}
            />
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow float-right"
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
