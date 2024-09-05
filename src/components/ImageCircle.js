import React from 'react';
import './ImageCircle.css';

const ImageCircle = () => {
  const textSections = [
    {
      title: 'ABOUT AUTHENTIC',
      description: 'Is A CREATIVE Agency Specialized In Brand Communications, Digital & Social and ECRM. We Put Creativity At The Core Of Our Philosophy And Delivered As The Driving Factor Behind Every Brands We Serve.'
    },
    {
      title: 'DIGITAL & SOCIAL',
      description: 'We Are Reliable With Capability Of Digital & Social Know-How, Provide Business Partner Skillful Services Among Two Major Scopes.'
    },
    {
      title: 'CRM & SCRM',
      description: 'Constructive Procedure For Brands Lifecycle Management That Return Of Investment With Effectiveness And Efficiency.'
    }
  ]
  return (
    <div className="image-circle">
      {textSections.map((section, index) => (
        <div key={index} className='text-section'>
          <h3 className="text-section-title">{section.title}</h3>
          <p className='text-section-paragraph'>{section.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageCircle;
