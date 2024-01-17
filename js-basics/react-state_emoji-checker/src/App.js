import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  // let code = "?";
  let [code, setCode] = useState("?");

  const validCode = "🐡🐠🐋";

  function handleClick(emoji) {
    setCode((code) => code + emoji);
  }
  function handleReset() {
    setCode("");
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleReset("");
            handleClick("🐡");
            // console.log("Update Code!");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
            // console.log("Update Code!");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
            // console.log("Update Code!");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          setCode();
          handleReset("");
          // console.log("Reset Code!");
        }}
      >
        Reset
      </button>
      <h2>{code}</h2>

      {setCode === validCode && <p>Valid code!</p>}
    </div>
  );
}
