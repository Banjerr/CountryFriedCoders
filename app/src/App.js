import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header/header.js';
import Footer from './footer/footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <span role="img" aria-label="frying-pan-emoji" className="App-logo">🍳</span>
          <h2>Country Fried Coders</h2>
        </div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
