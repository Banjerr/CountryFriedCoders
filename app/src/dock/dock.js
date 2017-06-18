import React, { Component } from 'react';
import Dock from 'react-dock'
import ReactHoverObserver from 'react-hover-observer';
import FontIcon from 'material-ui/FontIcon';
import SiteWindow from '../site-window/window.js';
import './dock.css';

const iconStyles = {
  marginRight: 6,
  marginLeft: 6,
  fontSize: 70,
  cursor: 'pointer'
};

class SiteDock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovering: false,
      appVisible: false
    };

    this.onHoverChanged = this.onHoverChanged.bind(this);
  }

  onHoverChanged({ isHovering }) {
    this.setState({
      isHovering
    });
  }

  _onClick() {
    this.setState({
      appVisible: !this.state.appVisible
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

    return (
      <div>
        { this.state.appVisible ? <SiteWindow handleState={this.handleState.bind(this)} /> : null}

        <ReactHoverObserver className="site-dock" hoverDelayInMs={300}
        hoverOffDelayInMs={200} {...{onHoverChanged: this.onHoverChanged}}>
          <HoverBar />
          <Dock dimMode="transparent" position='bottom' isVisible={this.state.isHovering}>
            <FontIcon onClick={() => this.setState({ isHovering: !this.state.isHovering })} className="material-icons code pull-right" style={iconStyles}>close</FontIcon>

            <ul>
              <li onClick={() => this.setState({ appVisible: !this.state.appVisible })}>
                <FontIcon className="material-icons about" style={iconStyles}>mood</FontIcon>
              </li>
              <li onClick={() => this.setState({ appVisible: !this.state.appVisible })}>
                <FontIcon className="material-icons code" style={iconStyles}>code</FontIcon>
              </li>
              <li onClick={() => this.setState({ appVisible: !this.state.appVisible })}>
                <FontIcon className="material-icons music" style={iconStyles}>music_note</FontIcon>
              </li>
              <li onClick={() => this.setState({ appVisible: !this.state.appVisible })}>
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
