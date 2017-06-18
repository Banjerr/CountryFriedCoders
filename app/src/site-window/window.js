import React, { Component } from 'react';
import Rnd from 'react-rnd';
import { TitleBar, Toolbar, Text } from 'react-desktop/macOs';
import './window.css';

class SiteWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFullscreen: false,
      appVisible: true,
      width: '0',
      height: '0',
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const WindowContent = () => (
      <div>
        content is {this.props.content}
      </div>
    );

    return (
      <div>
      { this.state.appVisible ?
        <Rnd
          default={{
            x: 0,
            y: 0,
            width: this.state.isFullscreen ? this.state.width : 320,
            height: this.state.isFullscreen ? (this.state.height - 100) : 200,
          }}
        >
          <div className="content">
            <TitleBar controls inset isFullscreen={this.state.isFullscreen}
              onCloseClick={() => this.props.handleState()}
              onMaximizeClick={() => console.log('max')}
              onMinimizeClick={() => this.props.handleState()}
              onResizeClick={() => this.setState({ isFullscreen: !this.state.isFullscreen })}>
              <Toolbar height="43" horizontalAlignment="center"/>
            </TitleBar>

            <WindowContent />
          </div>
        </Rnd> : null }

      </div>
    );
  }
}

SiteWindow.propTypes = {
  handleState: React.PropTypes.func
}

export default SiteWindow;
