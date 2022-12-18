//// useContext is designed to solve a specific problem which is passing data down from the top of a componentry
import React, { createContext, useContext, useState } from "react";

const NameContext = createContext();

const App = () => {
  const [name, setName] = useState("Billy Shakespeare");

  return (
    <div>
      <NameContext.Provider value={name}>
        <Child />
      </NameContext.Provider>
    </div>
  );
};
const Child = () => {
  return (
    <section className="child">
      <Grandchild />
    </section>
  );
};

const Grandchild = () => {
  return (
    <div className="grandchild">
      <Button />
    </div>
  );
};

const Button = () => {
  // Hre we want use uper level coponents state (NameContext.Provider)
  const name = useContext(NameContext);
  return <button>{name}</button>;
};

export default App;
