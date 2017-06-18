import React, { Component } from 'react';
import Rnd from 'react-rnd';
import './window.css';

const AppWindow = () => (
  <div className="content">
    <h2>Check me out</h2>
  </div>
);

const Underlay = () => (
  <div className="underlay"></div>
);

class SiteWindow extends Component {
  render() {
    return (
      <Rnd
        default={{
          x: 0,
          y: 0,
          width: 320,
          height: 200,
        }}
      >
        <Underlay />
        <AppWindow />
      </Rnd>
    );
  }
}

export default SiteWindow;
