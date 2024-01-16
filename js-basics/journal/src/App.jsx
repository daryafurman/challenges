import React, { useState } from "react";
import Header from "./components/Header.jsx";
import EntryField from "./components/EntryField.jsx";
import EntriesSection from "./components/EntriesSection.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";

function App() {
  const [entries, setEntries] = useState([]);

  const handleCreateEntry = (motto, notes) => {
    // Create a new entry object with the motto and notes values
    const newEntry = {
      motto,
      notes,
      // Add any other necessary properties to the entry object
    };

    // Update the entries state with the new entry
    setEntries([...entries, newEntry]);
  };

  return (
    <>
      <Header />
      <main>
        <EntryField onCreateEntry={handleCreateEntry} />
        <EntriesSection entries={entries} />
      </main>
      <Footer />
    </>
  );
}

export default App;
