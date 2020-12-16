import React, { useState, useEffect } from "react";
import { useClipboard } from "use-clipboard-copy";

import "./styles/App.css";

function App() {
  const [conditionals, setConditionals] = useState({
    specialChar: true,
    lowerLetters: true,
    upperLetters: true,
    numbers: true,
    length: 30,
  });
  const [password, setPassword] = useState(" ");
  const [securityScore, setSecurityScore] = useState(70);
  const [copyNotify, setCopyNotify] = useState(false);
  const clipboard = useClipboard();

  useEffect(() => randomPassword(), [conditionals]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopyNotify(false);
    }, 900);
    return () => clearTimeout(timer);
  }, [copyNotify]);

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

    evaluatePasswordStrength(conditionals);

    let characterList = characters;
    let password = "";
    for (let i = 0; i < length; ++i) {
      password += characterList[getRandomInt(0, characterList.length - 1)];
    }
    setPassword(password);
  };

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function evaluatePasswordStrength(conditionals) {
    let total = 0;

    if (conditionals.lowerLetters) {
      total += 10;
    }

    if (conditionals.upperLetters) {
      total += 10;
    }

    if (conditionals.numbers) {
      total += 10;
    }

    if (conditionals.specialChar) {
      total += 10;
    }
    total += Number(conditionals.length);
    setSecurityScore(total);
    if (securityScore >= 55) {
    }
  }

  function copyToClipboard() {
    clipboard.copy();
    setCopyNotify(true);
  }

  return (
    <div className="flex justify-center h-screen">
      <div className="rounded overflow-hidden shadow-lg border-gray-400 border w-full md:w-10/12 lg:w-7/12 m-auto p-8">
        <div className="w-full px-8 pt-8 pb-4 text-center">
          <h2 className="text-3xl bold mb-2">Password Generator</h2>
          <p>Generate a secure, random password</p>
        </div>
        <div className="passwordInputContainer">
          <div className="w-11/12 mx-auto">
            <span
              className={`copyNotification ${
                copyNotify ? "copyNotificationShow" : "copyNotificationHide"
              }`}
            >
              Copied!
            </span>
          </div>
          <div
            className="passwordInput w-11/12 py-4 text-center border border-gray-200 text-2xl my-6 mx-auto cursor-pointer relative"
            onClick={copyToClipboard}
          >
            <span className="ml-4 absolute left-0 securityContainer">
              <svg
                className={`fill-current inline-block h-6 w-6 vertical-middle securityScoreSVG ${
                  securityScore < 50 // if
                    ? "text-red-600"
                    : securityScore >= 50 && securityScore < 55 // else if
                    ? "text-red-500"
                    : securityScore >= 55 && securityScore < 60 // else if
                    ? "text-orange-500"
                    : securityScore >= 60 && securityScore < 65 // else if
                    ? "text-yellow-500"
                    : securityScore >= 65 //else
                    ? "text-green-500"
                    : null // else
                }`}
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 299.995 299.995"
                style={{ enableBackground: "new 0 0 299.995 299.995" }}
              >
                <g>
                  <g>
                    <g>
                      <path
                        d="M149.997,161.485c-8.613,0-15.598,6.982-15.598,15.598c0,5.776,3.149,10.807,7.817,13.505v17.341h15.562v-17.341
				c4.668-2.697,7.817-7.729,7.817-13.505C165.595,168.467,158.611,161.485,149.997,161.485z"
                      />
                      <path
                        d="M150.003,85.849c-13.111,0-23.775,10.665-23.775,23.775v25.319h47.548v-25.319
                        C173.775,96.516,163.111,85.849,150.003,85.849z"
                      />
                      <path
                        d="M149.995,0.001C67.156,0.001,0,67.159,0,149.998c0,82.837,67.156,149.997,149.995,149.997s150-67.161,150-149.997
				C299.995,67.159,232.834,0.001,149.995,0.001z M196.085,227.118h-92.173c-9.734,0-17.626-7.892-17.626-17.629v-56.919
				c0-8.491,6.007-15.582,14.003-17.25v-25.697c0-27.409,22.3-49.711,49.711-49.711c27.409,0,49.709,22.3,49.709,49.711v25.697
				c7.993,1.673,14,8.759,14,17.25v56.919h0.002C213.711,219.225,205.819,227.118,196.085,227.118z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </span>
            {(conditionals.specialChar ||
              conditionals.lowerLetters ||
              conditionals.upperLetters ||
              conditionals.numbers) &&
              password && (
                <div className="passwordDisplayContainer">
                  <input
                    ref={clipboard.target}
                    type="text"
                    className="passwordDisplay vertical-middle inline-block cursor-pointer"
                    onClick={copyToClipboard}
                    onChange={() => {
                      randomPassword();
                    }}
                    readOnly
                    disabled
                    value={password}
                  />
                </div>
              )}
            <span
              className="mr-4 absolute right-0 w-10 h-10 copyContainer"
              onClick={copyToClipboard}
            >
              <svg
                className="vertical-middle fill-current inline-block"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Copy">
                  <path
                    d="M18.5,21H9.1a.5.5,0,1,1,0-1h9.4a.5.5,0,0,0,.5-.5V7.5a.5.5,0,0,0-.5-.5H8.5a.5.5,0,0,0-.5.5v12a.5.5,0,0,1-1,0V7.5A1.5,1.5,0,0,1,8.5,6h10A1.5,1.5,0,0,1,20,7.5v12A1.5,1.5,0,0,1,18.5,21Z"
                    style={{ fill: "#2b3344" }}
                  />
                  <path
                    d="M17.5,5a.5.5,0,0,1-.35-.851.361.361,0,0,1,.16-.109.5.5,0,0,1,.54.109.485.485,0,0,1,0,.7.372.372,0,0,1-.16.11A.406.406,0,0,1,17.5,5Z"
                    style={{ fill: "#2b3344" }}
                  />
                  <path
                    d="M5.5,19a.5.5,0,0,1-.5-.5V5.5A1.5,1.5,0,0,1,6.5,4h9.156a.5.5,0,0,1,0,1H6.5a.5.5,0,0,0-.5.5v13A.5.5,0,0,1,5.5,19Z"
                    style={{ fill: "#2b3344" }}
                  />
                </g>
              </svg>
            </span>
          </div>
        </div>
        <div className="flex">
          <div className="w-full md:w-1/4 px-8 pt-4 pb-8">
            <span className="align-top text-sm mb-3 uppercase">Settings</span>
            <ul>
              <li className="mt-2">
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
              <li className="">
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
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-8 pt-4 pb-8">
            <span className="align-top text-sm mb-3 uppercase">&nbsp;</span>
            <ul>
              <li className="mt-2">
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
              <li className="">
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

          <div className="w-full md:w-2/4 px-8 pt-4 pb-8">
            <span className="align-top text-sm mb-3 uppercase">Length</span>
            <br />

            <div className="lengthInputBox flex mt-2">
              <input
                type="number"
                min="1"
                max="60"
                className="numberInput shadow appearance-none border border-gray-400 rounded w-19 py-4 px-3 mr-3 leading-tight focus:outline-none focus:shadow-outline text-xl"
                value={conditionals.length}
                onBlur={(e) => {
                  setConditionals({
                    ...conditionals,
                    length: e.target.value || 30,
                  });
                }}
                onChange={(e) => {
                  let max = parseInt(e.target.max);
                  let min = parseInt(e.target.min);
                  let value = parseInt(e.target.value);
                  if (value > max) {
                    value = max;
                  }
                  if (value < min) {
                    value = min;
                  }
                  setConditionals({
                    ...conditionals,
                    length: value,
                  });
                }}
              />
              <input
                type="range"
                className="range-slider flex-grow"
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
            </div>
          </div>
        </div>
        <div className="w-11/12 py-4 text-center my-2 mx-auto relative">
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full"
            onClick={() => {
              randomPassword();
            }}
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
