import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

import photo from '../../media/nav/img.svg';
import video from '../../media/nav/video.svg';

const Home = () => {

  return (
    <div className='home'>
      <section className="home-container">
        <NavLink
          exact to='/photos'
          className="home-container-button"
        >
          <img
            className="home-container-button-img"
            alt="Lien vers la page d'accueil"
            src={photo}
          />
        </NavLink>

        <NavLink
          exact to='/videos'
          className="home-container-button"
        >
          <img
            className="home-container-button-img"
            alt="Lien vers la page d'accueil"
            src={video}
          />
        </NavLink>
      </section>
    </div>
  );
};

export default Home;