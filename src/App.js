import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './TSXfiles/Home.tsx';
import Homepage from './TSXfiles/Homepage.tsx'
import Contact from './TSXfiles/Contact.tsx'
import About from './TSXfiles/About.tsx'
import Projects from "./TSXfiles/Projects.tsx";


function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/homepage' element={<Homepage/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </Router>
  );
}

export default App;
