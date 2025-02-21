import React, { useState } from 'react';
import '../files/Home.css';
import me from '../files/images/myMe.jpeg';
import ttt from '../files/images/ttt.png'
import beyti from '../files/images/beyti.png'
import mobileBeyti from '../files/images/mobileBeyti.jpeg'
import beyti2 from '../files/images/beyti2.jpeg'
import beyti3 from '../files/images/beyti3.jpeg'
import linkedIn from '../files/images/linkedin.png'
import github from '../files/images/github-logo.png'
import gmail from '../files/images/email.png'

function Home() {
  
  const handleHireMeClick = () => {
    window.location.href = "mailto:ahmadalarab011@gmail.com?subject=Hiring%20Inquiry&body=Hello%20Ahmad,%20I%20am%20interested%20in%20hiring%20you.";
  }

  return (
    <div>
      {/* Home Section */}
      <div className="home-container">
          <div className="home-left">
            <div className="home-info-container">
              <div className="home-name">
              hello I'm <br /></div>
              <div className="home-full-name">Ahmad AL ARAB</div>
              <div className="motivation-sentence">Bringing skills in both frontend and backend to create effective solutions.</div>
          </div>
          </div>
          <div className="home-right">
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
      <div className="ttt-content">Time to Travel is an easy-to-use platform where you can log in or sign up
         to book tickets to any country of your choice.
         Simply fill in your travel details,
         and you'll be able to purchase your ticket in no time,
          making your travel planning smoother and more efficient.</div>
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
      <div className="mobileBeyti-content">Beyti is a mobile application designed to assist Lebanese people in finding rental homes amidst the ongoing war. The app enables users to post their own properties for rent,
         offering a crucial service to those seeking housing throughout Lebanon.</div>
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
        <div className="pink-indicator"></div>
        </div>
        <div className="text-info">
        <p className="color-name">goals</p>
        </div>
        </div>
        <div className="all-info">
        <div className="color-info">
        <div className="orange-indicator"></div>
        </div>
        <div className="text-info">
        <p className="color-name">interests</p>
        </div>
        </div>
        <div className="all-info">
        <div className="color-info">
        <div className="green-indicator"></div>
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
            <div className="about-orange-green">
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
              <li>chess</li>
              <li>sports</li>
              <li>meditation</li>
            </ul>
          </div>
          <div className="about-green-2">
            <ul className="skills-data">
              <li>reading (ar, en)</li>
              <li>writing (ar)</li>
              <li>english self development</li>
            </ul>
          </div>
          </div>
          </div>
          <div className="about-pink">
          <div className="about-pink-1">
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
    <div className="about-pink2">
    <div className="about-pink-2">
            <ul className="skills-data">
              <p>working on many project that improve my skills in web dev. 
                developing my problem solving skills and Staying up-to-date with the latest versions of
                 frameworks and languages. <br/><br/> Preparing myself to effectively contribute to team projects
                  or manage tasks individually, depending on the requirements of the job. <br/> <br/>
                  Capable of acquiring new skills rapidly and adjusting to various work environments with ease.</p>
            </ul>
         </div> </div>
    </div>
    </div>
    

      <div className="contact-container">
        <div className="contact-content">
          <div className="congrats-top-left">🎉</div>
          <div className="congrats-top-right">🎉</div>
        <p className="contact-title">Get in touch!🚀 </p>
        <div className="link-container"><b><a href="mailto:ahmadalarab011@gmail.com?subject=Hiring%20Inquiry&body=Hello%20Ahmad,%20I%20am%20interested%20in%20hiring%20you." className="contact-a"><span className='contact-emoji'>👉</span><span className="contact-link">ahmadalarab011@gmail.com</span></a></b></div>
        <button className="contact-button" onClick={handleHireMeClick}>HIRE ME</button>
        <div className="congrats-bottom-left">🎉</div>
        <div className="congrats-bottom-right">🎉</div>
      </div>
</div>
      <div className="footer-container">
        <div className="footer-name-container">
<p className="footer-name">AHMAD AL ARAB</p>
</div>
        <div className="footer-links">
          <div className="footer-icons">
          <a href="linkedin.com/in/ahmad-alarab-7973842b6"><img className="footer-icon" src={linkedIn} alt="hehe"></img></a>
          <a href="https:github.com/ahmed-alarab"><img className="footer-icon" src={github} alt="hehe"></img></a>
          <a href="mailto:ahmadalarab011@gmail.com"><img className="footer-icon" src={gmail} alt="hehe"></img></a>
        </div>
        </div>
        
    
      </div>




    </div>
  );
}

export default Home;
