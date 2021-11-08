import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './style.scss';

import Nav from '../Nav';
import Home from '../Home';
import Photos from '../Photos';
import Videos from '../Videos';
import Contact from '../Contact';

const App = () => {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/photos" component={Photos} />
        
        <Route exact path="/videos" component={Videos} />

        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;
