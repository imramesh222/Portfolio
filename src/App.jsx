import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="bg-black">

      <Navbar />
      <div className="pt-28 pb-10">
      <Intro />
      </div>
      <About/>
    </div>
    </>
  );
}

export default App;
