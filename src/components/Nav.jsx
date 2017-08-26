import React from 'react';

import Navigation from 'react-toolbox/lib/navigation';
import theme from './NavTheme.css';


const actions = [
  { label: "Home" },
  { label: "Event Info" },
  { label: "History" },
  { label: "Gallery" },
  { label: "Contestants" },
  { label: "Vendors" },
  { label: "Volunteers" },
  { label: "Supporters" },
  { label: "Store" },
  { label: "Contact" }

]
export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <Navigation className={theme.container} theme={theme} type='vertical' actions={actions} />
      </div>
    )
  }
}