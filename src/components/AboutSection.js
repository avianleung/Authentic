import React from 'react';
import './AboutSection.css';
import TextSection from './TextSection';
import ImageCircle from './ImageCircle';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.25, // Trigger when 25% of the section is in view
  });

  const textSpring = useSpring({
    transform: inView ? 'translateX(0%)' : 'translateX(-100%)',
    opacity: inView ? 1 : 0,
    config: { tension: 250, friction: 30 },
  });

  const imageSpring = useSpring({
    transform: inView ? 'translateX(0%)' : 'translateX(100%)',
    opacity: inView ? 1 : 0,
    config: { tension: 250, friction: 30 },
  });

  return (
    <div ref={ref} className="about-section">
      <animated.div style={textSpring}>
        <TextSection />
      </animated.div>
      <animated.div style={imageSpring}>
        <ImageCircle />
      </animated.div>
    </div>
  );
};

export default AboutSection;
