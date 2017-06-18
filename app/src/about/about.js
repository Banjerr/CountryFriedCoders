import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { SegmentedControl, SegmentedControlItem, Text } from 'react-desktop/macOs';
import './about.css';

const styles = {
  background: '#fff'
};

class About extends Component {
  constructor() {
    super();
    this.state = { selected: 1 }
  }

  render() {
    return (
      <SegmentedControl box>
        {this.renderItems()}
      </SegmentedControl>
    );
  }

  renderItems() {
    return [
      this.renderItem(1, 'Social Media', <Paper styles={styles} zDepth={2} className="paper"><Text>Content 1</Text></Paper>),
      this.renderItem(2, 'About', <Paper styles={styles} zDepth={2} className="paper"><Text>Content 2</Text></Paper>),
      this.renderItem(3, 'Analytics', <Paper styles={styles} zDepth={2} className="paper"><Text>Content 3</Text></Paper>)
    ];
  }

  renderItem(key, title, content) {
    return (
      <SegmentedControlItem
        key={key}
        title={title}
        selected={this.state.selected === key}
        onSelect={() => this.setState({ selected: key })}
      >
        {content}
      </SegmentedControlItem>
    );
  }
}

export default About;
