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
            width="560"
            height="315"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            src={video.link}>
          </iframe>
        ))
      }
    </div>
  );
};

export default Videos;