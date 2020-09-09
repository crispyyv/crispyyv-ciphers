import React from "react";
import { Cipher } from "./components/Cipher";
import "./styles/main.scss";
function App() {
  return (
    <div className="center">
      <h1 className="title">Hello in Ceaser Cipher</h1>
      <Cipher />
    </div>
  );
}

export default App;
