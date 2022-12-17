// UseEffect -hook works by combinating componentDidMount(), componentDidUpdate(), componentWillUnMount() lifecycle methods
// adding empty array to end of useEffect will limit useEffect use only when component mount or unmount
import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  useEffect(() => {
    console.log(
      `I'm inside useEffect function. I will only run upon mouting. Current count is: ${count}`
    );

    return () => {
      console.log(
        `I'm removing anything that was setup above! I Last count was ${count} But now, now i will only run when conponent is unmounted!`
      );
    };
  }, []);

  return (
    <div>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
      <h3>{count}</h3>
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
