import './App.css';
import Navbar from './Components/Navbar'
import Textbar from './Components/Textbar'
 import About from './Components/About'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useState } from 'react'



function App() {
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = "grey"

    }
    else {
      setmode("light")
      document.body.style.backgroundColor = "white"
    }

  }

  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/" element={
            <Textbar name="Enter the text to analyse below ~" mode={mode} />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </BrowserRouter>




    </>

  );
}

export default App;
