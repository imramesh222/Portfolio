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
      <div className="mt-24 mb-40">
      <Intro />
      </div>
      <About/>
    </div>
    </>
  );
}

export default App;
