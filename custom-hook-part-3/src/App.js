import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange,
  };
};

const App = () => {
  return (
    <form>
      <input type="text" placeholder="Name" {...useInput} />
      <input type="text" placeholder="Surname" {...useInput} />
      <input type="number" placeholder="Age" {...useInput} />
    </form>
  );
};

// All three input fields get value and onChange method from useInput hook. {...useInput}

export default App;
