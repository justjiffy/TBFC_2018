import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';
import theme from './components/App.css';


ReactDOM.render(
  <App theme={theme} />,
  document.getElementById('root')
);
