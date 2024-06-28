import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [pressTime, updatePressTime] = useState(0);

  const ClickTimeUp = () => {
    updatePressTime(pressTime + 1);
  };

  return (
    <div className="App">
      <h1>버튼을 눌러봐!</h1>
      <p onClick={ClickTimeUp}>버튼</p>
      <p>{pressTime}</p>
    </div>
  );
}

export default App;
