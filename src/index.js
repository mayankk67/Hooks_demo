import React from "react";
import ReactDOM from "react-dom";
import Palindrome from "./Components/HomePage";
import ClassPage from "./Components/ClassPage";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Palindrome />
      <ClassPage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
