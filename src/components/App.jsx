import React from 'react';

import { Layout, Panel } from 'react-toolbox/lib'

import Landing from './Landing.jsx';
import Nav from './Nav.jsx';

import theme from './App.css';

const nextEvent = new Date('5/27/2018');

export default class App extends React.Component{
  render() {
    return (
      <div>
        <Layout theme={theme}>
            <Nav />
            <Panel className={theme.navPadding}>
              <Landing date={nextEvent.toDateString()} />
            </Panel>
        </Layout>
      </div>
    );
  }
}