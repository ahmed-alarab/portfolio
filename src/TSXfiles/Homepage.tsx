import React from 'react';
import '../files/Home.css';
import me from '../files/images/myMe.jpeg';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const Navigate = useNavigate();

  return (
    <div className="home-container">
        <div className="home-info-container2">
          <div className="home-name2">hello I'm </div>
          <div className="home-full-name2">Ahmad AL ARAB</div>
          <div className="motivation-sentence2">Bringing skills in both frontend and backend to create effective solutions.</div>
          <div className="home-year">3rd year computer science student eager to improve my skills in web development and gain more experience in related fields.</div>
          <div className="home-uni">at antonine university</div>
          
        </div>
        <div className="home-me-field2">
          <div className="home-field">full stack web developer</div>
          <div className="home-me-container">
            <div className="home-me-border">
              <img src={me} alt="me" className="home-me" />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Homepage;