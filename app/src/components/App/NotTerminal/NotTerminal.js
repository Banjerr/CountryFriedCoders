import React, { Component } from 'react';
import './NotTerminal.css';

class NotTerminal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      terminalOpen: true
    }
  }

  render() {
    return (
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
    );
  }
}

export default NotTerminal;