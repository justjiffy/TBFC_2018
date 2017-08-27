import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { Layout, NavDrawer, Panel, AppBar } from 'react-toolbox/lib';

import Landing from './Landing.jsx';
import Event from './Event.jsx';
import Nav from './Nav.jsx';

import theme from './App.css';

const nextEvent = new Date('5/27/2018');

export default class App extends React.Component{
  state = {
    drawerActive: false,
    drawerPinned: false
  }

  toggleDrawerActive = () => {
      this.setState({ drawerActive: !this.state.drawerActive });
  }


  render() {
    return (
      <div>
        <Layout>
            <NavDrawer active={this.state.drawerActive}
                pinned={this.state.drawerPinned}
                onOverlayClick={ this.toggleDrawerActive }>
                 <Nav />
            </NavDrawer>
            <Panel>
                <AppBar rightIcon='menu' onRightIconClick={ this.toggleDrawerActive } flat />
                  <Switch>
                    <Route exact path='/' component={Landing}/>
                    <Route path='/event' component={Event}/>
                  </Switch>
            </Panel>
        </Layout>
      </div>
    );
  }
}