// UseEffect -hook works by combinating componentDidMount(), componentDidUpdate(), componentWillUnMount() lifecycle methods
// adding empty array to end of useEffect will limit useEffect use only when component mount or unmount
import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("salmon");
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  useEffect(() => {
    console.log(`Current count is: ${count}`);

    return () => {
      console.log(
        `I'm removing anything that was setup above! The last count was ${count} `
      );
    };
  }, [count]);
  // [] - Array includes state(s) when we want trigger use useeffect function. Empy array means we run only useEffect only when we load page.

  const handleColorChange = () => {
    const nextColor = color === "salmon" ? "gold" : "salmon";
    setColor(nextColor);
  };

  return (
    <div>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleColorChange}>Change COLOR</button>
      <button onClick={handleIncrease}>Increase</button>
      <h2 style={{ color }}>{count}</h2>
    </div>
  );
};

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        Show / Hide the Counter component
      </button>

      {visible && <Counter />}
    </div>
  );
};

export default App;

//17
