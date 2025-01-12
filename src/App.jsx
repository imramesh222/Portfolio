import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="bg-black h-screen">

      <Navbar />
      <div className="pt-28 pb-10">
      <Intro />
      </div>
    </div>
    </>
  );
}

export default App;
