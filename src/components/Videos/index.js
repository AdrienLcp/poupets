import React from 'react';

import './style.scss';

import videos from '../../data/vids.json';

const Videos = () => {

  return (
    <div className='videos'>
      {
        videos.map(video => (
          <iframe
            className="videos-item"
            title={video.description}
            key={video.id}
            width="560"
            height="315"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            src={video.link}>
          </iframe>
        ))
      }
    </div>
  );
};

export default Videos;