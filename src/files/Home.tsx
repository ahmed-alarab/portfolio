import React, { useState } from 'react';
import './Home.css';
import background from './background.jpg';
import me from './myMe.jpeg';
import ttt from './ttt.png'
import beyti from './beyti.png'
import mobileBeyti from './mobileBeyti.jpeg'
import beyti2 from './beyti2.jpeg'
import beyti3 from './beyti3.jpeg'

function Home() {
  

  return (
    <div>
      {/* Home Section */}
      <div className="home-container">
        
        <div className="home">
          <div className="navigation-bar">
            <div className="nav-buttons-container">
            <button className="nav-buttons">home</button>
            <button className="nav-buttons">projects</button>
            <button className="nav-buttons">about</button>
            <button className="nav-buttons">contact</button>
          </div>
          </div>
          <div className="home-info-container">
          <div className="home-name">
            hello I'm <br /></div>
            <div className="home-full-name">Ahmad AL ARAB</div>
          <div className="motivation-sentence">Excited to be part of a team working
             on full-stack web development.</div>
          </div>
          <div className="home-me-field">
          <div className="home-field">full stack web developer</div>
          <div className="home-me-container">
            <div className="home-me-border">
              <img src={me} alt="me" className="home-me" />
              </div>
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
      <div className="mobileBeyti-images">
    <img className="mobileBeyti-image" src={beyti2} alt="mobileBeyti"></img>
    <img className="mobileBeyti2-image" src={mobileBeyti} alt="mobile beyti"></img>
    <img className="mobileBeyti3-image" src={beyti3} alt="mobile beyti"></img>
    </div>
    </div>
    <div className="mobileBeyti-left-container">
      <div className="mobileBeyti-title">mobile beyti</div>
      <div className="mobileBeyti-content">mobile application created for helping people to find houses during the war.</div>
      <div className="mobileBeyti-frameworks-container">
          <div className="mobileBeyti-frameworks">react native</div>
      </div>
    </div>
</div>
<div className="colors-indicator-container">
      <div className="colors-indicator">
        <div className="all-info">
      <div className="color-info">
        <div className="blue-indicator"></div>
        </div>
         <div className="text-info">
        <p className="color-name">skills</p>
        </div>
        </div>
        <div className="all-info">
        <div className="color-info">
        <div className="orange-indicator"></div>
        </div>
        <div className="text-info">
        <p className="color-name">goals</p>
        </div>
        </div>
        <div className="all-info">
        <div className="color-info">
        <div className="green-indicator"></div>
        </div>
        <div className="text-info">
        <p className="color-name">interests</p>
        </div>
        </div>
        <div className="all-info">
        <div className="color-info">
        <div className="pink-indicator"></div>
        </div>
        <div className="text-info">
        <p className="color-name">growth & ambitions</p>
      </div>
      </div>
      </div>
      </div>
    <div className="about-container">
        <div className="about-board">
          <div className="about-blue">
          <div className="about-blue-1">
            <ul className="skills-data">
              <li>html</li>
              <li>css</li>
              <li>javaScript</li>
              <li>typeScript</li>
              <li>react</li>
              <li>php-laravel</li>

            </ul>
          </div>
          <div className="about-blue-2">
            <ul className="skills-data">
              <li>java</li>
              <li>javaFX</li>
              <li>c++</li>
              <li>python</li>
            </ul>
          </div>
          <div className="about-blue-3">
            <ul className="skills-data">
              <li>mySQL</li>
              <li>mongoDB</li>
              <li>PL-SQL</li>
            </ul>
          </div>
          <div className="about-blue-4"></div>
          </div>
          <div className="about-right">
          <div className="about-orange">
          <div className="about-orange-1">
            <ul className="skills-data">
              <li>become an expert in web dev</li>
              <li>gain more experience</li>
              <li>develop a sense of urgency</li>
            </ul>
          </div>
          <div className="about-orange-2">
            <ul className="skills-data">
              <li>build more relations in my field</li>
              <li>delivering quality work</li>
              <li>improving time management</li>
            </ul>
          </div>
          </div>
          <div className="about-green">
          <div className="about-green-1">
            <ul className="skills-data">
              <li>calesthenics</li>
              <li>football</li>
              <li>meditation</li>
            </ul>
          </div>
          <div className="about-green-2">
            <ul className="skills-data">
              <li>reading (ar)</li>
              <li>writing (ar)</li>
              <li>english self development</li>
            </ul>
          </div>
          </div>
          <div className="about-pink">
            <ul className="skills-data">
              <p>working on many project that improve my skills in web dev. 
                developing my problem solving skills and Staying up-to-date with the latest versions of
                 frameworks and languages. <br/><br/> Preparing myself to effectively contribute to team projects
                  or manage tasks individually, depending on the requirements of the job. <br/> <br/>
                  Capable of acquiring new skills rapidly and adjusting to various work environments with ease.</p>
            </ul>
          </div>
          </div>
        </div>
    </div>
    

      <div className="contact-container">
        <div className="contact-content">
          <div className="congrats-top-left">🎉</div>
          <div className="congrats-top-right">🎉</div>
        <p className="contact-title">Get in touch!🚀 </p>
        <div className="link-container"><b><a href="" className="contact-a"><span className='contact-emoji'>👉</span><span className="contact-link">ahmadalarab011@gmail.com</span></a></b></div>
        <button className="contact-button">HIRE ME</button>
        <div className="congrats-bottom-left">🎉</div>
        <div className="congrats-bottom-right">🎉</div>
      </div>
</div>
      <div className="footer-container">

      </div>




    </div>
  );
}

export default Home;
