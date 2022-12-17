import { useState } from "react";

function App() {
  // Boolean example
  const [activated, setActivated] = useState(false);
  const buttonText = activated ? "Active" : "Inactive";

  const onClick = () => {
    setActivated(!activated);
  };

  // Boolean example ends

  //Count example
  const [count, setCount] = useState(0);

  // Way 1 to incerease / decrese value 1
  const handleIncrease = () => {
    setCount(count + 1);
  };
  // Way 2 to increase / decrease value
  const handleDecrease = () => {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  };

  // Reset value to 0
  const handleReset = () => {
    setCount(0);
  };

  //Object state example
  const [location, setLocation] = useState({
    city: "",
    country: "",
  });

  const handleCityChange = (event) => {
    setLocation({
      ...location,
      city: event.target.value,
    });
  };

  const handleCountryChange = (event) => {
    setLocation({
      ...location,
      country: event.target.value,
    });
  };

  return (
    <>
      {/* Boolean example */}
      {/* Way 1 */}
      <h3>Boolean example</h3>
      <button onClick={() => setActivated(!activated)}>{buttonText}</button>
      <br />
      <br />
      {/* Way 2 */}
      <button onClick={onClick}>{buttonText}</button>
      <br />
      <br />
      <hr />

      {/* Counter example */}
      <h3>Counter example</h3>
      <button onClick={handleIncrease}>Increase value</button>
      <button onClick={handleDecrease}>Decrease value</button>
      <button onClick={handleReset}>Reset counter</button>
      <h2>{count}</h2>
      <br />
      <br />
      <hr />

      <h3>Object state example</h3>
      <form>
        <b>City name</b>
        <br />
        <input
          type="text"
          placeholder="City"
          value={location.city}
          onChange={handleCityChange}
        />
        <br />
        <b>Country</b>
        <br />
        <input
          type="text"
          placeholder="Country"
          value={location.country}
          onChange={handleCountryChange}
        />
        <br />
        <p>{`You live in the city called ${location.city}, whitch is located in ${location.country}`}</p>
      </form>
    </>
  );
}

export default App;

//lesson 10
