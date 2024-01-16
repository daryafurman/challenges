import React, { useState } from "react";

export default function EntryField() {
  const [motto, setMotto] = useState("");
  const [notes, setNotes] = useState("");

  const handleMottoChange = (event) => {
    setMotto(event.target.value);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Pass the motto and notes values to the parent
    //component or perform any other necessary actions
  };

  return (
    <>
      <h1>NEW ENTRY</h1>
      <form id="entry-form" onSubmit={handleSubmit}>
        <label>Motto</label>
        <textarea
          id="motto"
          name="motto"
          cols="70"
          rows="4"
          value={motto}
          onChange={handleMottoChange}
          required
        ></textarea>
        <label>Notes</label>
        <textarea
          id="notes"
          name="notes"
          cols="70"
          rows="10"
          value={notes}
          onChange={handleNotesChange}
          required
        ></textarea>
        <button className="create-btn" type="submit">
          Create
        </button>
      </form>
    </>
  );
}
