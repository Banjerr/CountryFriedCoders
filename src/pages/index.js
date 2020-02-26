import React from "react"
// import { Link } from "gatsby"

import Terminal from 'terminal-in-react';
import "../lib/console-style";

import Layout from "../components/layout"
import SEO from "../components/seo"

let doConsoleStuff = () => {
  console.style('<css="font-size:70px;color:#fff;text-shadow:0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);">country-fried-coders</css>');
  console.log(`%cGood morning, and in case I don't see ya, good afternoon, good evening, and good night!`, 'padding:70px 320px;line-height:200px;background:url("https://78.media.tumblr.com/b555b9b1e526a2a61f29d378f5f3d1af/tumblr_mvzd3kZDCQ1rrxe89o6_250.gif") no-repeat;');
  console.style('<img="background:url(http://goo.gl/EGlS7v);width:40px;height:40px">');
}

let aboutMe = () => `Father, husband, old-time music enthusiast/musician, amateur banjo builder, professional web dev {PHP, JS:{Angular.js, ES6+, Node, React}, MySQL, Mongo, PostgreSQL, RethinkDB}`;

let contactMe = function () {
  window.open('mailto:admin@countryfriedcoders.me', '_self');
};

let openLink = function (service) {
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

let toggleTerminal = () => console.log('close it');

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    {doConsoleStuff()}

    <Terminal
      color="green"
      backgroundColor="#222"
      barColor="#222"
      allowTabs={false}
      style={{ fontWeight: "bold", fontSize: "1em" }}
      actionHandlers={{
        handleClose: () => {
          toggleTerminal()
        },
      }}
      commands={{
        "open-github": () => openLink("github"),
        "open-linkedin": () => openLink("linkedin"),
        "open-reddit": () => openLink("reddit"),
        "open-facebook": () => openLink("facebook"),
        "open-twitter": () => openLink("twitter"),
        "open-instagram": () => openLink("instagram"),
        "contact-me": () => contactMe(),
        "about-bengineer": () => aboutMe(),
      }}
      descriptions={{
        "open-github": "opens my GitHub profile",
        "open-linkedin": "opens my LinkedIn profile",
        "open-reddit": "opens my Reddit profile",
        "open-facebook": "opens my FaceBook profile",
        "open-twitter": "opens my Twitter profile",
        "open-instagram": "opens my InstaGram profile",
        "about-bengineer": "displays info about Benjamin Redden",
        "contact-me": "opens up an email to me",
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

    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
