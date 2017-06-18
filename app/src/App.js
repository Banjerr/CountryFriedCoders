import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// import Header from './header/header.js';
// import Footer from './footer/footer.js';
import SiteDock from './dock/dock.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="App">
          <div className="App-header">
            <span role="img" aria-label="frying-pan-emoji" className="App-logo">🍳</span>
            <h2>Country Fried Coders</h2>
          </div>
          
          <SiteDock />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
