import React from 'react';
import '../files/Home.css';
import ttt from '../files/images/ttt.png';
import beyti from '../files/images/beyti.png';
import mobileBeyti from '../files/images/mobileBeyti.jpeg';
import beyti2 from '../files/images/beyti2.jpeg';
import beyti3 from '../files/images/beyti3.jpeg';

function Projects() {
  return (
    <div className="projects-container">
      <div className="ttt-container">
        <div className="ttt-right-container">
          <img className="ttt-image" src={ttt} alt="time to travel"></img>
        </div>
        <div className="ttt-left-container">
          <div className="ttt-title">time to travel</div>
          <div className="ttt-content">Time to Travel is an easy-to-use platform where you can log in or sign up to book tickets to any country of your choice. Simply fill in your travel details, and you'll be able to purchase your ticket in no time, making your travel planning smoother and more efficient.</div>
          <div className="ttt-frameworks-container">
            <div className="ttt-frameworks">html</div>
            <div className="ttt-frameworks">css</div>
            <div className="ttt-frameworks">js</div>
          </div>
        </div>
      </div>
      <div className="beyti-container">
        <div className="beyti-right-container">
          <img className="beyti-image" src={beyti} alt="beyti"></img>
        </div>
        <div className="beyti-left-container">
          <div className="beyti-title">beyti</div>
          <div className="beyti-content">Beyti is a platform dedicated to helping Lebanese people find rental homes during the ongoing war. The website allows users to post their own properties for rent, providing a valuable resource for those in need of housing across the entire country.</div>
          <div className="beyti-frameworks-container">
            <div className="beyti-frameworks">react</div>
          </div>
        </div>
      </div>
      <div className="mobileBeyti-container">
        <div className="mobileBeyti-right-container">
          <div className="mobileBeyti-images">
            <img className="mobileBeyti-image" src={beyti2} alt="mobileBeyti"></img>
            <img className="mobileBeyti2-image" src={mobileBeyti} alt="mobile beyti"></img>
            <img className="mobileBeyti3-image" src={beyti3} alt="mobile beyti"></img>
          </div>
        </div>
        <div className="mobileBeyti-left-container">
          <div className="mobileBeyti-title">mobile beyti</div>
          <div className="mobileBeyti-content">Beyti is a mobile application designed to assist Lebanese people in finding rental homes amidst the ongoing war. The app enables users to post their own properties for rent, offering a crucial service to those seeking housing throughout Lebanon.</div>
          <div className="mobileBeyti-frameworks-container">
            <div className="mobileBeyti-frameworks">react native</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;