import React from 'react';

import Landing from './Landing.jsx';
import Nav from './Nav.jsx';

const nextEvent = new Date('5/27/2018');

export default class App extends React.Component{
  render() {
    return (
      <div>
        <Nav />
        <Landing date={nextEvent.toDateString()} />
      </div>
    );
  }
}