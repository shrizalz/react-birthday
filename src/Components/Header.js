import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#details">
                Details
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">Happy Birthday !!</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>You are invited to join us for a fabulous birthday bash in honor of ….</h3>
            </Fade>
            <Fade bottom duration={1200}>
              <h2 className="name">Ayish. Ahnaa. Arwaa. Areesya.</h2>
            </Fade>
            <hr />
            {/* <Fade bottom duration={2000}>
              <ul className="social">
                <a className="button btn project-btn">
                  <i className="fa fa-waze"></i>Project
                </a>
                <a className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade> */}
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#details">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
