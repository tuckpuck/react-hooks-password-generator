import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [conditionals, setConditionals] = useState({
    specialChar: false,
    letters: false,
    numbers: false,
  });

  useEffect(() => {
    console.log(
      `specialChar:${conditionals.specialChar}, letters:${conditionals.letters}, numbers:${conditionals.numbers}`
    );
  }, [conditionals]);

  return (
    <>
      Password Generator
      <br />
      Special Characters
      <input
        type="checkbox"
        onChange={(e) => {
          setConditionals({
            ...conditionals,
            specialChar: !conditionals.specialChar,
          });
        }}
      />
      Letters
      <input
        type="checkbox"
        onChange={(e) => {
          setConditionals({ ...conditionals, letters: !conditionals.letters });
        }}
      />
      Numbers
      <input
        type="checkbox"
        onChange={(e) => {
          setConditionals({ ...conditionals, numbers: !conditionals.numbers });
        }}
      />
    </>
  );
}

export default App;
