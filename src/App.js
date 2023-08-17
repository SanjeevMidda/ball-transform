import "./index.css";
import Ball from "./components/Ball";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  const [location, setLocation] = useState("");

  let newColor = () => {
    return setColor([randomColor(), randomColor(), randomColor()]);
  };

  let randomColor = () => {
    return Math.floor(Math.random() * 255);
  };

  setInterval(newColor, 1000);

  console.log(color);

  let position = () => {
    return Math.floor(Math.random() * 500);
  };

  let newPosition = () => {
    setLocation({ top: position(), left: position() });
  };

  setInterval(newPosition, 1000);

  return (
    <div className="App">
      <Ball color={color} location={location} />
    </div>
  );
}

export default App;
