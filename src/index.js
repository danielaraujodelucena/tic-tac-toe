import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import Top from './components/Top';
import Game from './components/Game';

ReactDOM.render(
  <React.StrictMode>
    <Top />
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);

