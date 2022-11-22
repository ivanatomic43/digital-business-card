import React from "react";
import facebook from '../icons/Facebook.png'
import github from '../icons/GitHub.png'
import twitter from '../icons/Twitter.png'
import instagram from '../icons/Instagram.png'
import linkedin from '../icons/Linkedin.png'

const Footer = () => {
    return(
        <div className="footer-div">
           <div>
                <div  className="icons-div"><img className="footer-icon" src={twitter} /></div>
                <div  className="icons-div"><img className="footer-icon" src={facebook} /></div>
                <div  className="icons-div"><img className="footer-icon" src={instagram} /></div>
                <div  className="icons-div"><img className="footer-icon" src={linkedin} /></div>
                <div  className="icons-div"><img className="footer-icon" src={github} /></div>
           </div>
        </div>
    );
}

export default Footer;