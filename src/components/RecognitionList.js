import React from 'react';
import ListItem from './ListItem';
import './ProjectList.css';

const projectData = [
  { title: "Network of the Decade, Cannes Lions, 2020, BBDO Worldwide" },
  { title: "Network of the Year, Cannes Lions, 2007, 2008, 2009, 2010, 2011, 2017, 2018, BBDO Worldwide" },
  { title: "Network of the Year, Clio Awards 2022, BBDO Worldwide" },
  { title: "Most Effective Network in the World, Global Effie Index, 2011, 2014, 2015, 2017, 2020, BBDO Worldwide" },
  { title: "Network of the Year, World Advertising Research Center, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, BBDO Worldwide" },
  { title: "Global Creative Network of the Year, The Big Won Report, 2007, 2008, 2009, 2010, 2011, 2012, 2014, 2015, 2016, 2018, BBDO Worldwide" },
  { title: "Global Network of the Year, Adweek Magazine, 2011, 2014, BBDO Worldwide" },
  { title: "Network of the Year, Campaign Magazine, 2005, 2007, 2008, 2011, 2015, 2017, BBDO Worldwide" },
  { title: "Most Strategic Network in the World, WARC 100, 2014, 2015, 2016, 2017, 2018, BBDO Worldwide" },
  { title: "WARC “Best of the Best” Network 2019, BBDO Worldwide" },
  { title: "MENA Network of the Year, Cannes Lions 2023, BBDO Worldwide" },
  { title: "Pacific Network of the Year, Cannes Lions 2023, BBDO Worldwide" },
];

const ProjectList = () => {
  return (
    <div className='project-list-container' style={{ display: 'flex', alignItems: 'start', justifyContent: 'center' }}>
        <div style={{color: 'black', fontSize: '32px', fontWeight: 'bold', marginRight: '3em'}}>
            RECOGNITIONS:
        </div>
        <div className="project-list">
            <div>
                <div style={{color: 'black', fontSize: '26px', fontWeight: 'bold'}}>Worldwide</div>
            </div>
            <div className="list">
                {projectData.map((project, index) => (
                <ListItem key={index} {...project} recognition={true} />
                ))}
            </div>
        </div>
    </div>
  );
};

export default ProjectList;
