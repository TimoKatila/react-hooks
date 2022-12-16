import { useState } from "react";

function App() {
  const [activated, setActivated] = useState(false);
  const [count, setCount] = useState(0);
  const buttonText = activated ? "Active" : "Inactive";

  // Boolean example
  const onClick = () => {
    setActivated(!activated);
  };

  // Count example
  // Way 1
  const handleIncrease = () => {
    setCount(count + 1);
  };
  // Way 2
  const handleDecrease = () =>
    setCount((prevCount) => {
      return prevCount - 1;
    });

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      {/* Boolean example */}
      {/* Way 1 */}
      <button onClick={() => setActivated(!activated)}>{buttonText}</button>
      <br />
      <br />
      {/* Way 2 */}
      <button onClick={onClick}>{buttonText}</button>
      <br />
      <hr />

      {/* Counter example */}
      <button onClick={handleIncrease}>Increase value</button>
      <button onClick={handleDecrease}>Decrease value</button>
      <button onClick={handleReset}>Reset counter</button>
      <h2>{count}</h2>
    </>
  );
}

export default App;

//lesson 10
