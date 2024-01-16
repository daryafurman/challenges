import React from "react";
import "./styles.css";

export default function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Hi!</h2>
      <label htmlFor="inputField">Input Field:</label>
      <input id="inputField" type="text" />
      <a className="article__link" href="https://en.wikipedia.org/">
        Wikipedia Article
      </a>
    </article>
  );
}
