import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './files/Home.tsx';
import me from './files/me.jpg'


const projectsData=[{
  "id": 1,
  "title":"house renting",
  "frameworks":"html css js",
  "image":me,
},
{
  "id":2,
  "title":"house renting",
  "frameworks":"html css js",
  "image":me,
},{
  "id":3,
  "title":"house renting",
  "frameworks":"html css js",
  "image":me,
},{
  "id":4,
  "title":"house renting",
  "frameworks":"html css js",
  "image":me,
},{
  "id":5,
  "title":"house renting",
  "frameworks":"html css js",
  "image":me,
}]



function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home projectsData={projectsData}/>}/>
    </Routes>
    </Router>
  );
}

export default App;
