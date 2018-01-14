import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      terminalOpen: true
    }
  };

  aboutMe = () => `Father, husband, old-time music enthusiast/musician, amateur banjo builder, professional web dev {PHP, JS:{Angular.js, ES6+, Node, React}, MySQL, Mongo, PostgreSQL, RethinkDB}`;

  contactMe = function() {
    window.open('mailto:admin@countryfriedcoders.me', '_self');
  };

  openLink = function(service) {
    switch (service) {
      case 'github':
        window.open('https://github.com/Banjerr', '_blank');
        break;
      case 'reddit':
        window.open('https://www.reddit.com/user/banjerr/', '_blank');
        break;
      case 'facebook':
        window.open('https://www.facebook.com/benjamminredden', '_blank');
        break;
      case 'twitter':
        window.open('https://twitter.com/_bengineer_', '_blank');
        break;
      case 'instagram':
        window.open('https://www.instagram.com/banjerr/', '_blank');
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/in/benjaminredden/', '_blank');
        break;
      case 'linux':
        window.open('https://alpinelinux.org/', '_blank');
        break;
      case 'docker':
        window.open('https://www.docker.com/', '_blank');
        break;
      case 'nginx':
        window.open('https://www.nginx.com/', '_blank');
        break;
      case 'node':
        window.open('https://nodejs.org/en/', '_blank');
        break;
      case 'javascript':
        window.open('https://www.javascript.com/', '_blank');
        break;
      case 'react':
        window.open('https://reactjs.org/', '_blank');
        break;
      case 'html5':
        window.open('https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5', '_blank');
        break;
      case 'css3':
        window.open('https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3', '_blank');
        break;
      case 'git':
        window.open('https://git-scm.com/', '_blank');
        break;
      case 'babel':
        window.open('https://babeljs.io/', '_blank');
        break;
      case 'webpack':
        window.open('https://webpack.js.org/', '_blank');
        break;
      case 'atom':
        window.open('https://atom.io/', '_blank');
        break;
      default:
        break;
    }
  }

  toggleTerminal = () => this.setState({ terminalOpen: !this.state.terminalOpen});

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
        { this.state.terminalOpen ? (
        <Terminal
          color='green'
          backgroundColor='#222'
          barColor='#222'
          allowTabs={false}
          style={{ fontWeight: "bold", fontSize: "1em" }}
          actionHandlers={{
            handleClose: () => {
              this.toggleTerminal();
            }
          }}
          commands={{
            'open-github': () => this.openLink('github'),
            'open-linkedin': () => this.openLink('linkedin'),
            'open-reddit': () => this.openLink('reddit'),
            'open-facebook': () => this.openLink('facebook'),
            'open-twitter': () => this.openLink('twitter'),
            'open-instagram': () => this.openLink('instagram'),
            'contact-me': this.contactMe,
            'about-bengineer': this.aboutMe,
          }}
          descriptions={{
            'open-github': 'opens my GitHub profile',
            'open-linkedin': 'opens my LinkedIn profile',
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
      )
        : (
          <section className={'terminal-closed'}>
            <h2>Thanks for payin' me a visit!</h2>
            <h4>Give me a follow/star/email/like/something too?</h4>
            <ul className={'social-list'}>
              <li className={'hvr-outline-out'} onClick={() => this.openLink('github')}><i className={'fa fa-github-alt'}></i></li>
              <li className={'hvr-outline-out'} onClick={() => this.openLink('instagram')}><i className={'fa fa-instagram'}></i></li>
              <li className={'hvr-outline-out'} onClick={() => this.openLink('linkedin')}><i className={'fa fa-linkedin'}></i></li>
              <li className={'hvr-outline-out'} onClick={() => this.openLink('reddit')}><i className={'fa fa-reddit'}></i></li>
              <li className={'hvr-outline-out'} onClick={() => this.openLink('facebook')}><i className={'fa fa-facebook'}></i></li>
              <li className={'hvr-outline-out'} onClick={() => this.openLink('twitter')}><i className={'fa fa-twitter'}></i></li>
              <li className={'hvr-outline-out'} onClick={() => this.contactMe()}><i className={'fa fa-envelope'}></i></li>              
            </ul>
            <h4>This site has been brought to you by...</h4>
            <ul className={'tech-list'}>
              <li className={'hvr-outline-out'} onClick={() => this.openLink('docker')}><i className={'devicon-docker-plain colored'}></i></li>
              <li className={'hvr-outline-out'} onClick={() => this.openLink('nginx')}><i className={'devicon-nginx-original colored'}></i></li>
              <li className={'hvr-outline-out'} onClick={() => this.openLink('linux')}><i className={'devicon-linux-plain colored'}></i></li>
              <li className={'hvr-outline-out'} onClick={() => this.openLink('node')}><i className={'devicon-nodejs-plain colored'}></i></li>
              <li className={'hvr-outline-out'} onClick={() => this.openLink('javascript')}><i className={'devicon-javascript-plain colored'}></i></li>
              <li className={'hvr-outline-out'} onClick={() => this.openLink('react')}><i className={'devicon-react-original colored'}></i></li>
              <li className={'hvr-outline-out'} onClick={() => this.openLink('html5')}><i className={'devicon-html5-plain colored'}></i></li>
              <li className={'hvr-outline-out'} onClick={() => this.openLink('css3')}><i className={'devicon-css3-plain colored'}></i></li>   
              <li className={'hvr-outline-out'} onClick={() => this.openLink('git')}><i className={'devicon-git-plain colored'}></i></li>
              <li className={'hvr-outline-out'} onClick={() => this.openLink('babel')}><i className={'devicon-babel-plain colored'}></i></li>
              <li className={'hvr-outline-out'} onClick={() => this.openLink('webpack')}><i className={'devicon-webpack-plain colored'}></i></li>
              <li className={'hvr-outline-out'} onClick={() => this.openLink('atom')}><i className={'devicon-atom-original colored'}></i></li>
            </ul>
            <p onClick={this.toggleTerminal}>And of course, lots of time spent with the <i className={'fa fa-terminal terminal-icon hvr-buzz'}></i></p>
          </section>          
        )
        }
      </div>
    );
  }
}

export default App;
