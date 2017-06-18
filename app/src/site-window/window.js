import React, { Component } from 'react';
import Rnd from 'react-rnd';
import { TitleBar, Toolbar } from 'react-desktop/macOs';
import About from '../about/about.js';
import Settings from '../settings/settings.js';
import Music from '../music/music.js';
import Code from '../code/code.js';
import Blog from '../blog/blog.js';
import './window.css';

let AppContent = [];
AppContent['about'] = <About />;
AppContent['settings'] = <Settings />;
AppContent['about'] = <About />;
AppContent['settings'] = <Settings />;
AppContent['code'] = <Code />;
AppContent['music'] = <Music />;
AppContent['blog'] = <Blog />;


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

  getContent() {
    let currentContent = this.props.content;
    return AppContent[currentContent];
  }

  render() {
    const WindowContent = () => (
      <div>
        content is {this.props.content}
        {this.getContent()}
      </div>
    );

    const AppTitle = this.props.content;

    return (
      <div>
      { this.state.appVisible ?
        <Rnd
          default={{
            x: -300,
            y: -160,
            width: this.state.isFullscreen ? this.state.width : 600,
            height: this.state.isFullscreen ? (this.state.height - 100) : 400,
          }}
        >
          <div className="content">
            <TitleBar title={AppTitle} controls inset isFullscreen={this.state.isFullscreen}
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
