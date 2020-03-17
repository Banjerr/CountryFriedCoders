import React, { Component } from "react"

import Terminal from 'terminal-in-react';
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faEnvelope, faTerminal } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AllPastRecordedThoughts from "./thoughts"
import { Link } from "gatsby";

library.add(fab, faEnvelope, faTerminal)

class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      terminalOpen: true,
    }
  }

  aboutMe = () =>
    `Father, husband, old-time music enthusiast/musician, amateur banjo builder, professional web dev {PHP, JS:{Angular.js, ES6+, Node, React}, MySQL, Mongo, PostgreSQL, RethinkDB}`

  contactMe = function() {
    window.open("mailto:admin@countryfriedcoders.me", "_self")
  }

  openLink = function(service) {
    switch (service) {
      case "github":
        window.open("https://github.com/Banjerr", "_blank")
        break
      case "reddit":
        window.open("https://www.reddit.com/user/banjerr/", "_blank")
        break
      case "facebook":
        window.open("https://www.facebook.com/benjamminredden", "_blank")
        break
      case "twitter":
        window.open("https://twitter.com/_bengineer_", "_blank")
        break
      case "instagram":
        window.open("https://www.instagram.com/banjerr/", "_blank")
        break
      case "linkedin":
        window.open("https://www.linkedin.com/in/benjaminredden/", "_blank")
        break
      case "node":
        window.open("https://nodejs.org/en/", "_blank")
        break
      case "javascript":
        window.open("https://www.javascript.com/", "_blank")
        break
      case "react":
        window.open("https://reactjs.org/", "_blank")
        break
      case "html5":
        window.open(
          "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
          "_blank"
        )
        break
      case "css3":
        window.open(
          "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3",
          "_blank"
        )
        break
      case "git":
        window.open("https://git-scm.com/", "_blank")
        break
      case "babel":
        window.open("https://babeljs.io/", "_blank")
        break
      case "webpack":
        window.open("https://webpack.js.org/", "_blank")
        break
      case "vscode":
        window.open("https://vscode.com/", "_blank")
        break
      default:
        break
    }
  }

  toggleTerminal = () =>
    this.setState({ terminalOpen: !this.state.terminalOpen })

  render() {
    return (
      <Layout>
        <SEO title="Home" />

        <Link to="/thoughts">AllPastRecordedThoughts</Link>

        {this.state.terminalOpen ? (
          <Terminal
            color="green"
            backgroundColor="#222"
            barColor="#222"
            allowTabs={false}
            style={{ fontWeight: "bold", fontSize: "1em" }}
            actionHandlers={{
              handleClose: () => {
                this.toggleTerminal()
              },
            }}
            commands={{
              "open-github": () => this.openLink("github"),
              "open-linkedin": () => this.openLink("linkedin"),
              "open-reddit": () => this.openLink("reddit"),
              "open-facebook": () => this.openLink("facebook"),
              "open-twitter": () => this.openLink("twitter"),
              "open-instagram": () => this.openLink("instagram"),
              "contact-me": this.contactMe,
              "about-bengineer": this.aboutMe,
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
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="
          />
        ) : (
          <section className={"terminal-closed"}>
            <h2>Thanks for payin' me a visit!</h2>
            <h4>Give me a follow/star/email/like/something too?</h4>
            <ul className={"social-list"}>
              {/* <li
                className={"hvr-outline-out"}
                onClick={() => this.openLink("github")}
                onKeyDown={() => this.openLink("github")}
              >
                <DevIcon icon="github" />
              </li> */}
              <li
                className={"hvr-outline-out"}
                onClick={() => this.openLink("instagram")}
                onKeyDown={() => this.openLink("instagram")}
              >
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </li>
              <li
                className={"hvr-outline-out"}
                onClick={() => this.openLink("linkedin")}
                onKeyDown={() => this.openLink("linkedin")}
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </li>
              <li
                className={"hvr-outline-out"}
                onClick={() => this.openLink("reddit")}
                onKeyDown={() => this.openLink("reddit")}
              >
                <FontAwesomeIcon icon={["fab", "reddit"]} />
              </li>
              <li
                className={"hvr-outline-out"}
                onClick={() => this.openLink("facebook")}
                onKeyDown={() => this.openLink("facebook")}
              >
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </li>
              <li
                className={"hvr-outline-out"}
                onClick={() => this.openLink("twitter")}
                onKeyDown={() => this.openLink("twitter")}
              >
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </li>
              <li
                className={"hvr-outline-out"}
                onClick={() => this.contactMe()}
                onKeyDown={() => this.contactMe()}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </li>
            </ul>
            {/* <h4>This site has been brought to you by...</h4> */}
            {/* <ul className={"tech-list"}>
              <li
                className={"hvr-outline-out"}
                onClick={() => this.openLink("node")}
                onKeyDown={() => this.openLink("node")}
              >
                <DevIcon icon="nodejs" />
              </li>
              <li
                className={"hvr-outline-out"}
                onClick={() => this.openLink("javascript")}
                onKeyDown={() => this.openLink("javascript")}
              >
                <DevIcon icon="javascript" />
              </li>
              <li
                className={"hvr-outline-out"}
                onClick={() => this.openLink("react")}
                onKeyDown={() => this.openLink("react")}
              >
                <DevIcon icon="react" />
              </li>
              <li
                className={"hvr-outline-out"}
                onClick={() => this.openLink("html5")}
                onKeyDown={() => this.openLink("html5")}
              >
                <DevIcon icon="html5" />
              </li>
              <li
                className={"hvr-outline-out"}
                onClick={() => this.openLink("css3")}
                onKeyDown={() => this.openLink("css3")}
              >
                <DevIcon icon="css3" />
              </li>
              <li
                className={"hvr-outline-out"}
                onClick={() => this.openLink("git")}
                onKeyDown={() => this.openLink("git")}
              >
                <DevIcon icon="git" />
              </li>
              <li
                className={"hvr-outline-out"}
                onClick={() => this.openLink("yarn")}
                onKeyDown={() => this.openLink("yarn")}
              >
                <DevIcon icon="npm" />
              </li>
              <li
                className={"hvr-outline-out"}
                onClick={() => this.openLink("webpack")}
                onKeyDown={() => this.openLink("webpack")}
              >
                <DevIcon icon="webpack" />
              </li>
              <li
                className={"hvr-outline-out"}
                onClick={() => this.openLink("vscode")}
                onKeyDown={() => this.openLink("vscode")}
              >
                <DevIcon icon="visualstudio" />
              </li>
            </ul> */}
            <p onClick={this.toggleTerminal} onKeyDown={this.toggleTerminal}>
              And of course, lots of time spent with the{" "}
              <FontAwesomeIcon
                icon={faTerminal}
                className={" terminal-icon hvr-buzz"}
              />
            </p>
          </section>
        )}
      </Layout>
    )
  }
}

export default IndexPage