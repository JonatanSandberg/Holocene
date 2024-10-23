import React, { memo } from 'react';
import LazyLoad from 'react-lazyload';
import '../styles/About.css';
import background from '../assets/About.jpg';
import logo from '../assets/logo.svg';

const About: React.FC = () => {
  return (
    <div
      className="about-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <header className="about-header">
        <LazyLoad once height={100} offset={100}>
          <h1>
            <img
              src={logo}
              alt="Logo"
              className="about-logo"
              loading="lazy"
            />
            ABOUT THIS PROJECT
          </h1>
        </LazyLoad>
      </header>

      <div className="about-grid">
        <div className="about-box">
          <h2>Project Goals</h2>
          <p>
            This project focuses on highlighting indigenous tribes from various regions, emphasizing how climate change disproportionately affects those most vulnerable.
            By mapping their stories, we not only highlight their resilience but also underscore the urgent need to address the environmental crisis that is threatening their existence.
            Climate change is not an abstract concept for these communities—it is an immediate, lived reality.
          </p>
        </div>

        <LazyLoad height={250} offset={100}>
          <div className="about-image-box about-image-box-1" />
        </LazyLoad>

        <div className="about-box">
          <h2>The Complexity of Indigenous Definitions</h2>
          <p>
            Defining what constitutes an indigenous tribe can be complex and multifaceted. Indigenous peoples are often recognized as the original inhabitants of a region, with deep cultural and historical ties to their lands.
            UNESCO emphasizes that self-identification and preservation of unique cultural practices play crucial roles in recognizing indigenous status, leading to ongoing debates on these definitions.
          </p>
        </div>

        <LazyLoad height={250} offset={100}>
          <div className="about-image-box about-image-box-2" />
        </LazyLoad>

        <div className="about-box">
          <h2>The Challenges of Mapping Indigenous Territories</h2>
          <p>
            Assigning specific coordinates to tribes can be limiting, as many are traditionally nomadic and traverse vast landscapes.
            This movement is integral to their cultural identity and way of life, making it difficult to pinpoint their existence to fixed locations.
            Recognizing this fluidity is essential in understanding the diverse experiences of indigenous peoples worldwide.
          </p>
        </div>

        <LazyLoad height={250} offset={100}>
          <div className="about-image-box about-image-box-3" />
        </LazyLoad>

        <div className="about-box">
          <h2>Climate Models Used</h2>
          <p>
            The EC_Earth3P_HR and NICAM16_8S models are combined to simulate climate changes over a 100-year timespan until 2050.
            EC_Earth3P_HR focuses on regional climate variability and atmospheric processes, while NICAM16_8S emphasizes cloud dynamics and interactions.
            Together, they enhance accuracy in predicting future climate patterns and extreme weather events.
          </p>
        </div>

        <div className="about-empty-box" />

        <div className="about-box">
          <h2>Abstract</h2>
          <p>
            This project integrates weather data, indigenous cultures, and climate models, using tools like Globe.gl, React, and APIs.
            It visualizes global tribes' locations, explores how climate change affects them, and includes an interactive quiz on indigenous peoples.
            The project raises awareness of climate impacts on vulnerable communities and emphasizes environmental sustainability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(About);
































