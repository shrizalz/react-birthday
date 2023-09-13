import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {

    return (
      <section id="details">
        <Fade duration={1000}>
          <div className="row">
            <div className="four columns">
              <div>
                <img
                  className="profile-pic"
                  src={"images/ayish.jpg"}
                  alt="Nordic Giant Profile Pic"
                />
                <img
                  className="profile-pic"
                  src={"images/ahnaa.jpg"}
                  alt="Nordic Giant Profile Pic"
                />
                <img
                  className="profile-pic"
                  src={"images/arwaa.jpg"}
                  alt="Nordic Giant Profile Pic"
                />
                <img
                  className="profile-pic"
                  src={"images/areesya.jpg"}
                  alt="Nordic Giant Profile Pic"
                />
              </div>
              
            </div>
            <div className="eight columns main-col">
              <h2>When?</h2>

              <p>7th Oktober 2023 : 11.00AM</p>

              <h2>Theme?</h2>

              <p>BTS dan Disney Princess</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Where?</h2>
                  <p className="address">
                    <span>Teratak Ayish Al-Hadid</span>
                    <br />
                    <span>
                      39, Persiaran Bahagia 1/2, Taman Bahagia
                      <br />
                      Temerloh, Pahang Darul Makmor
                    </span>
                    <br />
                    <span>Auntie Tisya: 0123456789</span>
                    <br />
                    <span>Uncle Pokngoh: 012345678</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                  <Fade bottom duration={2000}>
                    <ul className="social">
                      <a href="https://goo.gl/maps/4ZoqLPnQbbrTdQny6" className="button btn project-btn" target="_blank" rel="noreferrer">
                        <i className="fa fa-waze"></i>Open in Maps
                      </a>
                      
                    </ul>
                  </Fade>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
