import React, { useState } from "react";
import data from "./data";
import List from "./list"; // Capitalized the component name

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people} /> {/* Updated List here */}
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
