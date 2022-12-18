import { useState, useEffect } from "react";

function App() {
  const [userText, setUserText] = useState("");

  const handleUserKeypress = (event) => {
    const { key, keyCode } = event;
    if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) {
      setUserText(`${userText}${key}`);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeypress);
    return () => {
      // This return removes previous eventlistener so they wont stack.
      window.removeEventListener("keydown", handleUserKeypress);
    };
  });

  return (
    <div>
      <h1>Feel free to type! Your text will show up below!</h1>
      <blockquote> {userText}</blockquote>
    </div>
  );
}

export default App;
