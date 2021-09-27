import React from 'react';

import './style.scss';

import photos from '../../data/cats.json';

const Photos = () => {

  return (
    <ul className='photos'>
      {
        photos.map(photo => {
          const altImg = 'Photo de ' + photo.cat;

          return (
            <li
              className="photos-item"
              key={photo.id}
            >
              <img
                className="photos-item-img"
                src={photo.img}
                alt={altImg}
              />
            </li>
          );
        })
      }
    </ul>
  );
};

export default Photos;