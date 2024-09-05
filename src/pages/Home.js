import React from 'react';
import './Home.css';

import AboutSection from '../components/AboutSection';
import ProjectList from '../components/ProjectList';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <div className="container">
            <section className="section one"></section>
            <section className="section two">
                <div className="container" style={{overflowY: 'auto'}}>
                    <AboutSection />
                </div>
            </section>
            <section className="section three">
            </section>
            <section className="section four">
                <ProjectList /> 
            </section>
        </div>
    </div>
  )
};

export default Home;
