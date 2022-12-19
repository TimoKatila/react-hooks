import { useState, useEffect } from "react";

function App() {
  const userText = useKeyPress("Once upon time...");

  return (
    <div>
      <h1>Feel to free type! Your text will show up below!</h1>
      <blockquote>{userText}</blockquote>
    </div>
  );
}

//Custom hook (useKeyPress) begins here
const useKeyPress = (startingValue) => {
  const [userText, setUserText] = useState(startingValue);

  const handleUserKeypress = (event) => {
    const { keyCode, key } = event;
    if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) {
      setUserText(`${userText}${key}`);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeypress);
    return () => {
      window.removeEventListener("keydown", handleUserKeypress);
    };
  });

  return userText;
};

export default App;
