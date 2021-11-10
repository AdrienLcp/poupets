import React, { useState } from 'react';

import './style.scss';

import photos from '../../data/cats.json';

const Photos = () => {

  const [poupette, setPoupette] = useState(true);
  const [poupineau, setPoupineau] = useState(true);
  const [others, setOthers] = useState(true);

  return (
    <section className='photos'>
      <div className='photos-cats'>
        <button
          className='photos-cats-button'
          style={ poupette ? {backgroundColor: '#f65868'} : {backgroundColor: 'rgb(230, 230, 230)'} }
          onClick={() => {setPoupette(!poupette)}}
        >
          Poupette
        </button>
        <button
          className='photos-cats-button'
          style={ poupineau ? {backgroundColor: '#5375e2'} : {backgroundColor: 'rgb(230, 230, 230)'} }
          onClick={() => {setPoupineau(!poupineau)}}
        >
          Poupineau
        </button>
        <button
          className='photos-cats-button'
          style={ others ? {backgroundColor: '#f3aa92'} : {backgroundColor: 'rgb(230, 230, 230)'} }
          onClick={() => {setOthers(!others)}}
        >
          Autres
        </button>
      </div>

      <ul className='photos-list'>
        {
          photos.map(photo => {
            const altImg = 'Photo de ' + photo.cat;

            if (poupette === true && photo.cat.includes('Poupette')) {
              return (
                <li
                  className="photos-list-item"
                  key={photo.id}
                >
                  <img
                    className="photos-list-item-img"
                    src={photo.img}
                    alt={altImg}
                  />
                </li>
              );
            }

            if (poupineau === true && photo.cat.includes('Poupineau')) {
              return (
                <li
                  className="photos-list-item"
                  key={photo.id}
                >
                  <img
                    className="photos-list-item-img"
                    src={photo.img}
                    alt={altImg}
                  />
                </li>
              );
            }

            if (others === true && photo.cat.includes('Autre')) {
              return (
                <li
                  className="photos-list-item"
                  key={photo.id}
                >
                  <img
                    className="photos-list-item-img"
                    src={photo.img}
                    alt={altImg}
                  />
                </li>
              );
            }
          })
        }
      </ul>
    </section>
  );
};

export default Photos;