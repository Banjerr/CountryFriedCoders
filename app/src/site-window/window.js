import React, { Component } from 'react';
import Rnd from 'react-rnd';
import { TitleBar, Toolbar, Text } from 'react-desktop/macOs';
import './window.css';

class SiteWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFullscreen: false,
      appVisible: true
    };
  }

  _onClick() {
    this.setState({
      appVisible: !this.state.appVisible
    });
  }

  render() {
    return (
      <div>
      { this.state.appVisible ?
        <Rnd
          default={{
            x: 0,
            y: 0,
            width: 320,
            height: 200,
          }}
        >
          <div className="content">
            <TitleBar controls inset isFullscreen={this.state.isFullscreen}
              onCloseClick={() => this.setState({ appVisible: !this.state.appVisible })}
              onMinimizeClick={() => this.setState({ appVisible: !this.state.appVisible })}
              onMaximizeClick={() => console.log('Mazimize window')}>
              <Toolbar height="43" horizontalAlignment="center"/>
            </TitleBar>

            <h2>Check me out</h2>
          </div>
        </Rnd> : null }

      </div>
    );
  }
}

export default SiteWindow;
