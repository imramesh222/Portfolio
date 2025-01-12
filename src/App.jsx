import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div>
      <Intro />
      </div>
    </>
  );
}

export default App;
