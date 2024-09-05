import React from 'react';
import './News.css';
import ImageNewsItem from '../components/ImageNewsItem';
import TextNewsItem from '../components/TextNewsItem';
import imageSrc from '../assets/David_Lubars.webp';

const newsData = [
  { type: 'image', imageSrc: imageSrc, title: "Advertising legend David Lubars is retiring", date: "April 16, 2024", description: "Over the past two decades, Lubars has overseen iconic ad work for brands like…" },
  { type: 'text', title: "Guinness makes its Premier League debut with its biggest-ever campaign", date: "August 20, 2024", description: "As millions of fans eagerly anticipate the opening weekend of the 2024/25 season…" },
  { type: 'text', title: "Guinness makes its Premier League debut with its biggest-ever campaign", date: "August 20, 2024", description: "As millions of fans eagerly anticipate the opening weekend of the 2024/25 season…" },
  { type: 'text', title: "Guinness makes its Premier League debut with its biggest-ever campaign", date: "August 20, 2024", description: "As millions of fans eagerly anticipate the opening weekend of the 2024/25 season…" },
  { type: 'text', title: "Guinness makes its Premier League debut with its biggest-ever campaign", date: "August 20, 2024", description: "As millions of fans eagerly anticipate the opening weekend of the 2024/25 season…" },
  // More items here...
];

const News = () => {
  return (
    <div className="news-page" style={{ marginTop: '5em' }}>
      <h1 style={{ color: 'black' }}>TOP NEWS</h1>
      <div className="news-grid">
        {newsData.map((newsItem, index) => 
          newsItem.type === 'image' ? (
            <ImageNewsItem key={index} {...newsItem} />
          ) : (
            <TextNewsItem key={index} {...newsItem} />
          )
        )}
      </div>
    </div>
  );
};

export default News;
