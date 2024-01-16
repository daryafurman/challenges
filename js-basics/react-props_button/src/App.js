import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("Button clicked from App component!");
  }
  return (
    <div>
      <Button
        color="red"
        disabled={true}
        text="Disabled button"
        onHandleClick={handleClick}
      />
      <Button
        color="green"
        disabled={false}
        text="Enabled button"
        onHandleClick={handleClick}
      />
    </div>
  );
}

function Button({ color, disabled, text, onHandleClick }) {
  // const handleClick = () => {
  //   console.log("Button clicked!");
  // };
  return (
    // <div onClick={() => alert("You clicked me!")}>
    <button
      style={{ color: color, backgroundColor: "white" }}
      disabled={disabled}
      // onClick={() => handleClick()}
      onClick={onHandleClick}
    >
      {text}
    </button>
    // </div>
  );
}
