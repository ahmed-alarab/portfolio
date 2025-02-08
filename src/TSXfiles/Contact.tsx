import React from 'react';
import '../files/Home.css';
import linkedIn from '../files/images/linkedin.png';
import github from '../files/images/github-logo.png';
import gmail from '../files/images/email.png';

function Contact() {
  const handleHireMeClick = () => {
    window.location.href = "mailto:ahmadalarab011@gmail.com?subject=Hiring%20Inquiry&body=Hello%20Ahmad,%20I%20am%20interested%20in%20hiring%20you.";
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="congrats-top-left">🎉</div>
        <div className="congrats-top-right">🎉</div>
        <p className="contact-title">Get in touch!🚀 </p>
        <div className="link-container">
          <b>
            <a href="mailto:ahmadalarab011@gmail.com?subject=Hiring%20Inquiry&body=Hello%20Ahmad,%20I%20am%20interested%20in%20hiring%20you." className="contact-a">
              <span className='contact-emoji'>👉</span>
              <span className="contact-link">ahmadalarab011@gmail.com</span>
            </a>
          </b>
        </div>
        <button className="contact-button" onClick={handleHireMeClick}>HIRE ME</button>
        <div className="congrats-bottom-left">🎉</div>
        <div className="congrats-bottom-right">🎉</div>
      </div>
      <div className="footer-container">
        <div className="footer-name-container">
          <p className="footer-name">AHMAD AL ARAB</p>
        </div>
        <div className="footer-links">
          <div className="footer-icons">
            <a href="linkedin.com/in/ahmad-alarab-7973842b6"><img className="footer-icon" src={linkedIn} alt="linkedin"></img></a>
            <a href="https:github.com/ahmed-alarab"><img className="footer-icon" src={github} alt="github"></img></a>
            <a href="mailto:ahmadalarab011@gmail.com"><img className="footer-icon" src={gmail} alt="gmail"></img></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;