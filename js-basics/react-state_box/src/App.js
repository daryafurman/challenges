import "./styles.css";
import { useState } from "react";

export default function App() {
  // let isActive = false;
  let [isActive, setIsActivate] = useState(false);
  function handleClick() {
    isActive = !isActive;
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <p>State:</p>
      <button
        onClick={() => {
          setIsActivate(!isActive);
        }}
      >
        {isActive ? <span>Activate</span> : <span>Deactivate</span>}
      </button>
    </main>
  );
}
