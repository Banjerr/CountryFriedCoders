import React, { Component } from 'react';
import Dock from 'react-dock'
import ReactHoverObserver from 'react-hover-observer';
import FontIcon from 'material-ui/FontIcon';
import SiteWindow from '../site-window/window.js';
import './dock.css';

const iconStyles = {
  marginRight: 12,
  marginLeft: 12,
  fontSize: 70,
  cursor: 'pointer'
};

class SiteDock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovering: false,
      appVisible: false,
      content: null
    };

    this.onHoverChanged = this.onHoverChanged.bind(this);
  }

  onHoverChanged({ isHovering }) {
    this.setState({
      isHovering
    });
  }

  handleClick(content) {
    this.setState({
      appVisible: !this.state.appVisible,
      content: content || null
    });
  }

  handleState() {
    this.setState({
      appVisible: !this.state.appVisible
    });
  }

  render() {
    const HoverBar = ({ isHovering = false }) => (
      <div className="footer">
        <FontIcon className="material-icons about" style={iconStyles}>explore</FontIcon>
      </div>
    );

    let contentState = this.state.content;

    return (
      <div>
        { this.state.appVisible ? <SiteWindow content={contentState} handleState={this.handleState.bind(this)} /> : null}

        <ReactHoverObserver className="site-dock" hoverDelayInMs={300}
        hoverOffDelayInMs={200} {...{onHoverChanged: this.onHoverChanged}}>
          <HoverBar />
          <Dock dimMode="transparent" position='bottom' isVisible={this.state.isHovering}>
            <ul>
              <li onClick={() => this.handleClick('about')}>
                <FontIcon className="material-icons about" style={iconStyles}>mood</FontIcon>
              </li>
              <li onClick={() => this.handleClick('settings')}>
                <FontIcon className="material-icons settings" style={iconStyles}>settings</FontIcon>
              </li>
              <li onClick={() => this.handleClick('code')}>
                <FontIcon className="material-icons code" style={iconStyles}>code</FontIcon>
              </li>
              <li onClick={() => this.handleClick('music')}>
                <FontIcon className="material-icons music" style={iconStyles}>music_note</FontIcon>
              </li>
              <li onClick={() => this.handleClick('blog')}>
                <FontIcon className="material-icons blog" style={iconStyles}>book</FontIcon>
              </li>
            </ul>
          </Dock>
        </ReactHoverObserver>
      </div>
    );
  }
}

export default SiteDock;
