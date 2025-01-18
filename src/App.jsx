import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Services from "./components/Services";

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
      <Services/>
    </div>
    </>
  );
}

export default App;
