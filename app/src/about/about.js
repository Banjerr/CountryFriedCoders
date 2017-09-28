import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
// import Avatar from 'material-ui/Avatar';
import { SegmentedControl, SegmentedControlItem, Text, View } from 'react-desktop/macOs';
import MotionMenu from 'react-motion-menu';
import './about.css';

const SocialMedia = () => (
  <View
    background="transparent"
    horizontalAlignment="center"
    verticalAlignment="center"
    width="100%"
    height="100%"
    padding="160px 0 0">
    <MotionMenu
      type="circle"
      margin={120}
    >
      <div className="button avatar-button">
        <img alt="avatar" src="https://en.gravatar.com/userimage/8689522/ab40580acfebad77a09c304579815be3.jpeg" />
      </div>
      <div className="button">
        <a rel="noopener noreferrer" target="_blank" href="https://www.reddit.com/user/banjerr/"><i className="fa fa-reddit-alien"></i></a>
      </div>
      <div className="button">
        <a rel="noopener noreferrer" href="https://www.facebook.com/benjamminredden" target="_blank"><i className="fa fa-facebook"></i></a>
      </div>
      <div className="button">
        <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/_bengineer_"><i className="fa fa-twitter"></i></a>
      </div>
      <div className="button">
        <a rel="noopener noreferrer" href="https://www.instagram.com/banjerr/" target="_blank"><i className="fa fa-instagram"></i></a>
      </div>
      <div className="button">
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/Banjerr"><i className="fa fa-github-alt"></i></a>
      </div>
    </MotionMenu>
  </View>
);

const AboutContent = () => (
  <View background="transparent"
    horizontalAlignment="center"
    verticalAlignment="center"
    width="100%"
    padding="160px 0 0"
    height="100%">
    <code>Father, old-time music enthusiast, amateur banjo builder, professional web dev (PHP, JS (Angular, ES6, Node, React), HTML/CSS, MySQL, Mongo.DB)</code>
  </View>
);

class About extends Component {
  constructor() {
    super();
    this.state = { selected: 2 }
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
      this.renderItem(2, 'About', <Paper zDepth={2} className="paper"><AboutContent /></Paper>),
      this.renderItem(1, 'Social Media', <Paper zDepth={2} className="paper"><SocialMedia /></Paper>),
      this.renderItem(3, 'Analytics', <Paper zDepth={2} className="paper"><figure><embed src="https://wakatime.com/share/@bengineer/c27a51aa-ae1a-43fb-b13c-ef23cc8f372b.svg"></embed></figure></Paper>)
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
