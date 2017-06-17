import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Rnd from 'react-rnd';

import Header from './header/header.js';
// import Footer from './footer/footer.js';
import SiteDock from './dock/dock.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />

          <div className="App-header">
            <span role="img" aria-label="frying-pan-emoji" className="App-logo">🍳</span>
            <h2>Country Fried Coders</h2>
          </div>

          <Rnd
            default={{
              x: 0,
              y: 0,
              width: 320,
              height: 200,
            }}
          >
            Rnd
          </Rnd>

          <SiteDock />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
