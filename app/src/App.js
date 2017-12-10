import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './App.css';

class App extends Component {
aboutMe = () => `Father, old-time music enthusiast, amateur banjo builder, professional web dev {PHP, JS:{Angular.js, ES6, Node, React}, MySQL, Mongo, PostgreSQL, RethinkDB}`;

contactMe = () => '<a href="mailto:admin@countryfriedcoders.me">admin@countryfriedcoders.me</a>'

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Terminal
          color='green'
          backgroundColor='#222'
          barColor='#222'
          allowTabs={false}
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{
            'open-github': () => window.open('https://github.com/Banjerr', '_blank'),
            'open-reddit': () => window.open('https://www.reddit.com/user/banjerr/', '_blank'),
            'open-facebook': () => window.open('https://www.facebook.com/benjamminredden', '_blank'),
            'open-twitter': () => window.open('https://twitter.com/_bengineer_', '_blank'),
            'open-instagram': () => window.open('https://www.instagram.com/banjerr/', '_blank'),
            'contact-me': () => window.open('mailto:admin@countryfriedcoders.me', '_self'),
            'about-bengineer': this.aboutMe,
          }}
          descriptions={{
            'open-github': 'opens my GitHub profile',
            'open-reddit': 'opens my Reddit profile',
            'open-facebook': 'opens my FaceBook profile',
            'open-twitter': 'opens my Twitter profile',
            'open-instagram': 'opens my InstaGram profile',
            'about-bengineer': 'displays info about Benjamin Redden',
            'contact-me': 'opens up an email to me'
          }}
          msg="
 _____             _              _____     _       _    _____       _
|     |___ _ _ ___| |_ ___ _ _   |   __|___|_|___ _| |  |     |___ _| |___ ___ ___
|   --| . | | |   |  _|  _| | |  |   __|  _| | -_| . |  |   --| . | . | -_|  _|_ -|
|_____|___|___|_|_|_| |_| |_  |  |__|  |_| |_|___|___|  |_____|___|___|___|_| |___|
<=========================|___|===================================================>
----------------------------------------------------------------------------------
======================== Type 'help' to get started ==============================
=-=-=-=-=-=-=-=-=- (and yes, tab for auto-complete works) -=-=-=-=-=-=-=-=-=-=-=-="
        />
      </div>
    );
  }
}

export default App;
