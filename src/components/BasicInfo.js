import React from "react";
import { ReactDOM } from "react";
import profilePhoto from '../images/profile-pic.JPG';

const BasicInfo = () => {
    return(
        <div className="info-container">
            <div >
              <img className="img-container" src={profilePhoto} />
            </div>
            <div className="basic-info-container">
              <h1>Ivana Tomić</h1>
              <h4>Software developer</h4>
              <h5>https://github.com/ivanatomic43</h5>
               
              <a href="mailto: ivanatomic.work@gmail.com" target="_blank" className="info-email">
                <span>Email</span>
              </a>
              <a href="https://www.linkedin.com/in/ivana-tomicc/" target="_blank" className="info-linkedin">
                <span>LinkedIn</span>
              </a>
            </div>
        </div>
    );
}

export default BasicInfo;