import { useState } from "react";

const useCounter = (startingValue) => {
  const [count, setCount] = useState(startingValue);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return {
    count,
    increment,
    decrement,
  };
};

// Independent states
const Display = (props) => {
  // Call's useCounter hook and these functions inside it(count, increment, decrement) so we can use them in the App component
  const { count, increment, decrement } = useCounter(props.start);

  return (
    <div>
      <button onClick={decrement}>Decrease</button>
      <button onClick={increment}>Increase</button>
      <h1>{count}</h1>
    </div>
  );
};

const FancyDisplay = (props) => {
  // Call's useCounter hook and these functions inside it(count, increment, decrement) so we can use them in the App component
  const { count, increment, decrement } = useCounter(props.start);

  return (
    <section>
      <button onClick={decrement}>Decrease</button>
      <button onClick={increment}>Increase</button>
      <h2>{count}</h2>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <Display start={10} />
      <Display start={20} />
      <FancyDisplay start={30} />
    </div>
  );
};

export default App;
