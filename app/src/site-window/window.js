import React, { Component } from 'react';
import Rnd from 'react-rnd';
import './window.css';

const Underlay = () => (
  <div className="underlay"></div>
);

const AppWindow = () => (
  <Rnd
    default={{
      x: 0,
      y: 0,
      width: 320,
      height: 200,
    }}
  >
    <Underlay />
    <div className="content">
      <h2>Check me out</h2>
    </div>
  </Rnd>
);

class SiteWindow extends Component {
  render() {
    return (
      <div>
        <AppWindow />
      </div>
    );
  }  
}

export default SiteWindow;
