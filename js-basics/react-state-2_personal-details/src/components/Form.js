import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = event.target.elements;
    setName(formData.name.value);
    setEmail(formData.email.value);
    event.target.reset();
  }

  return (
    <form
      className="form"
      aria-labelledby="user-details"
      onSubmit={handleSubmit}
    >
      <h2 id="user-details">Please enter your details here!</h2>
      <label htmlFor="name">Name: {name}</label>
      <input id="name" name="name" type="text" placeholder="John Doe" />
      <label htmlFor="email">Email: {email}</label>
      <input id="email" name="email" type="email" placeholder="john@doe.com" />
      <button className="form__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}
