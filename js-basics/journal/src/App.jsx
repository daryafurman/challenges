import React from "react";
import Header from "./components/Header.jsx";
import EntryField from "./components/EntryField.jsx";
import EntriesSection from "./components/EntriesSection.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryField />
        <EntriesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
