import React, { useState } from 'react';
import './Home.css';
import background from './background.jpg';
import me from './myMe.jpeg';
import ttt from './ttt.png'
import beyti from './beyti.png'
import mobileBeyti from './mobileBeyti.jpeg'
import beyti2 from './beyti2.jpeg'
import beyti3 from './beyti3.jpeg'

function Home({ projectsData }) {
  const [selectedFrameworks, setSelectedFrameworks] = useState([]);
  const [activeProject, setActiveProject] = useState(null);

  // Handle framework checkbox changes
  const handleCheckboxChange = (framework) => {
    setSelectedFrameworks((prev) =>
      prev.includes(framework)
        ? prev.filter((item) => item !== framework)
        : [...prev, framework]
    );
  };

  // Filter projects based on selected frameworks
  const filteredProjects = selectedFrameworks.length
    ? projectsData.filter((project) =>
        selectedFrameworks.some((framework) =>
          project.frameworks.includes(framework)
        )
      )
    : projectsData;

  return (
    <div>
      {/* Home Section */}
      <div className="home-container">
        <div className="home-right">
          <img src={background} alt="background" className="home-background-image" />
          <div className="home-buttons-container">
            <button className="home-buttons">profile</button>
            <button className="home-buttons">projects</button>
            <button className="home-buttons">CV</button>
            <button className="home-buttons">about</button>
            <button className="home-buttons">contact</button>
          </div>
        </div>
        <div className="home-left">
          <div className="home-name">
            hello I'm <br />
            <div className="home-full-name">Ahmad AL ARAB</div>
          </div>
          <div className="home-degree">3rd year computer science student</div>
          <div className="home-uni">at antonine university</div>
          <div className="home-field">full stack web developer</div>
          <ul className="home-open">
          </ul>
          <div className="home-me-container">
            <div className="home-me-border">
              <img src={me} alt="me" className="home-me" />
            </div>
          </div>
        </div>
      </div>

<div className="ttt-container">
    <div className="ttt-right-container">
    <img className="ttt-image" src={ttt} alt="time to travel"></img>
    </div>
    <div className="ttt-left-container">
      <div className="ttt-title">time to travel</div>
      <div className="ttt-content">website allows you to create an account or login, and buy a ticket for a travel with the options shown.</div>
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
      <div className="beyti-content">website created to help people during the war to find houses for rent, user can post a property or rent a house.</div>
      <div className="beyti-frameworks-container">
          <div className="beyti-frameworks">react</div>
      </div>
    </div>
</div>
<div className="mobileBeyti-container">
    <div className="mobileBeyti-right-container">
    <img className="mobileBeyti-image" src={beyti2} alt="mobileBeyti"></img>
    <img className="mobileBeyti2-image" src={mobileBeyti} alt="mobile beyti"></img>
    <img className="mobileBeyti3-image" src={beyti3} alt="mobile beyti"></img>
    </div>
    <div className="mobileBeyti-left-container">
      <div className="mobileBeyti-title">mobile beyti</div>
      <div className="mobileBeyti-content">mobile application created for helping people to find houses during the war.</div>
      <div className="mobileBeyti-frameworks-container">
          <div className="mobileBeyti-frameworks">react native</div>
      </div>
    </div>
</div>
    <div className="about-container">
        <div className="about-board">
          <div className="about-blue">
          <div className="about-blue-1"></div>
          <div className="about-blue-2"></div>
          <div className="about-blue-3"></div>
          <div className="about-blue-4"></div>
          </div>
          <div className="about-right">
          <div className="about-orange">
          <div className="about-orange-1"></div>
          <div className="about-orange-2"></div>
          </div>
          <div className="about-green">
          <div className="about-green-1"></div>
          <div className="about-green-2"></div>
          </div>
          <div className="about-pink"></div>
          </div>
        </div>
    </div>
      
      <div className="cv-container">
        <div className='cv-text'>click here to download cv</div>
        <a className="cv-download-button" href='Ahmad Alarab_CV(1)'>download</a>
      </div>
    </div>
  );
}

export default Home;
