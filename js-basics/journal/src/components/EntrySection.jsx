import React from "react";

const EntriesSection = ({ entries }) => {
  return (
    <section>
      <div className="tab-bar">{/* Add tab bar content here */}</div>
      <div className="entry-list">
        {entries.map((entry, index) => (
          <div key={index}>
            <h2>{entry.motto}</h2>
            <p>{entry.notes}</p>
            {/* Render other entry details */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EntriesSection;
