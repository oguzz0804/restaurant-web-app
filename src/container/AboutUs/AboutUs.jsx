import React from 'react';
import images from '../../constants/images'
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section_padding" id="about">
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="R" />
    </div> */}

    <div className="app__aboutus-content flex__center">

      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__image" />
        <p className="p__opensans ">ABOUT US</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about__knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__image" />
        <p className="p__opensans ">OUR HISTORY</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
