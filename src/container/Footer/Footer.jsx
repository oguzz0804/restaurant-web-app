import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants'
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="contact">

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Location</p>
        <p className="p__opensans">Phone</p>
        <p className="p__opensans">Mail</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.rosemary} alt="" />
        <p className="p__opensans">&quot;Make your own future. Make your own past. It is all right now.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Rosemary</p>
    </div>

  </div>
);

export default Footer;
