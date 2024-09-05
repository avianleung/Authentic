import React from 'react';
import './About.css';

import RecognitionList from '../components/RecognitionList';

const About = () => {
  return (
    <div>
        <div className="container">
            <section className="section about-one">About</section>
            <section className="section about-two">
                <div styl={{ display: 'flex' }}>
                    <RecognitionList /> 
                    <div>asdf</div>
                </div>
            </section>
        </div>
    </div>
  )
};

export default About;
