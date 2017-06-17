import React, { Component } from 'react';
import Dock from 'react-dock'
import ReactHoverObserver from 'react-hover-observer';
import './dock.css';

class SiteDock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovering: true
    };

    this.onHoverChanged = this.onHoverChanged.bind(this);
  }

  onHoverChanged({ isHovering }) {
    this.setState({
      isHovering
    });
  }

  render() {
    const Label = ({ isHovering = false }) => (
      <div className="footer">
      isHovering: { isHovering ? 'true' : 'false' }
      </div>
    );

    return (
      <ReactHoverObserver className="site-dock" hoverDelayInMs={300}
      hoverOffDelayInMs={200} {...{onHoverChanged: this.onHoverChanged}}>
        <Label />
        <Dock position='bottom' isVisible={this.state.isHovering}>
          <div onClick={() => this.setState({ isHovering: !this.state.isHovering })}>X</div>
        </Dock>
      </ReactHoverObserver>
    );
  }
}

export default SiteDock;
