import React from "react";
import Tab from "./Tabs";
import Tabs from "./Tab";
import Badge from "./Badge";
import Entry from "./Entry";
import Divider from "./Divider";

const EntriesSection = () => {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab active>
          All Entries <Badge isActive>3</Badge>
        </Tab>
        <Tab>
          Favorites <Badge>1</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        <Entry
          date="Feb 27, 2028"
          motto="Thats life in the city"
          notes="Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
        />
        <Divider />
        <Entry
          date="Feb 26, 2028"
          motto="Thats life in the city"
          notes="Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
        />
        <Divider />
        <Entry
          date="Feb 25, 2028"
          motto="Thats life in the city"
          notes="Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
        />
      </div>
    </section>
  );
};

export default EntriesSection;
