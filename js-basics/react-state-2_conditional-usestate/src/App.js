import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("Secret message incoming...");

  const handleShowMessage = () => {
    setShowMessage(true);
  };

  const handleHideMessage = () => {
    setShowMessage(false);
  };

  const handleUpdateMessage = () => {
    setMessage("The secret of Monkey Island is ... wait, no spoilers!");
  };

  return (
    <div className="container">
      {!showMessage ? (
        <div>
          <h1>
            Message is hidden{" "}
            <span role="img" aria-label="scream">
              😱
            </span>
          </h1>
          <button type="button" className="button" onClick={handleShowMessage}>
            Show Message
          </button>
        </div>
      ) : (
        <div>
          <button type="button" className="button" onClick={handleHideMessage}>
            Hide Message
          </button>
          <button
            type="button"
            className="button"
            onClick={handleUpdateMessage}
          >
            Now really show the message!
          </button>
          <h2>{message}</h2>
        </div>
      )}
    </div>
  );
}
