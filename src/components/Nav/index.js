import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

import home from '../../media/nav/home.svg';
import photo from '../../media/nav/img.svg';
import video from '../../media/nav/video.svg';

const Nav = () => {

  return (
    <section className='nav'>
      <h1 className="nav-title">Les Poupets</h1>

      <h2 className="nav-subtitle">Photos et vidéos de la petite famille des Poupets</h2>

      <nav className="nav-buttons">
        <NavLink
          exact to='/'
          className="nav-buttons-item"
          activeClassName="navActive"
        >
          <img
            className="nav-buttons-item-img"
            alt="Lien vers la page d'accueil"
            src={home}
          />
          <p className="nav-buttons-item-text">Accueil</p>
        </NavLink>

        <NavLink
          exact to='/photos'
          className="nav-buttons-item"
          activeClassName="navActive"
        >
          <img
            className="nav-buttons-item-img"
            alt="Lien vers les photos"
            src={photo}
          />
          <p className="nav-buttons-item-text">Photos</p>
        </NavLink>

        <NavLink
          exact to='/videos'
          className="nav-buttons-item"
          activeClassName="navActive"
        >
          <img
            className="nav-buttons-item-img"
            alt="Lien vers les vidéos"
            src={video}
          />
          <p className="nav-buttons-item-text">Vidéos</p>
        </NavLink>
      </nav>
    </section>
  );
};

export default Nav;