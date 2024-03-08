import { useState } from "react";
import "./index.css";

function App() {
  const [status, setStatus] = useState(true);

  let firstWord = {
    transform: status ? `translateX(${-350}px)` : `translateX(${0}px)`,
    opacity: status ? 0 : 1,
  };

  let secondWord = {
    transform: status ? `translateX(${-350}px)` : `translateX(${0}px)`,
    opacity: status ? 0 : 1,
    transitionDelay: "0.5s",
  };

  let thirdWord = {
    transform: status ? `translateX(${-350}px)` : `translateX(${0}px)`,
    opacity: status ? 0 : 1,
    transitionDelay: "1s",
  };

  return (
    <div className="App">
      <div className="mainContainer">
        <header>
          <h4 onClick={() => setStatus(!status)}>MENU</h4>
        </header>

        <h1 style={firstWord}>WORKS</h1>
        <h1 style={secondWord}>ABOUT</h1>
        <h1 style={thirdWord}>CONTACT</h1>
      </div>
    </div>
  );
}

export default App;
