import React from "react";
import avatar from "../img/avatar.jpg";
import Image from "./Image.js";

export default function Avatar() {
  return (
    <button
      type="button"
      onClick={() => console.log("I could toggle a profile!")}
      aria-label="toggle profile"
    >
      <Image className="round-image" src={avatar} alt="avatar" />
    </button>
  );
}
