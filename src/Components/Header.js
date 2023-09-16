import React, {useRef, useState, useEffect} from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import ReactAudioPlayer from "react-audio-player";

function Header() {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  // useEffect(() => {
  //   if (isPlaying) {
  //     audioRef.current.audioEl.current.play();
  //   } else {
  //     audioRef.current.audioEl.current.pause();
  //   }
  // }, [isPlaying, audioRef]);

  const playAudio = () => {
    // audioRef.current.audioEl.current.play();
    // setIsPlaying(true);
    setIsMuted(false);
  };

  const pauseAudio = () => {
    // audioRef.current.audioEl.current.pause();
    // setIsPlaying(false);
    setIsMuted(true)
  };
  return (
    <header id="home" >
      <ParticlesBg color="#ffffff" type="color" bg={true}/>

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
            <h3>You are invited to join us for a fabulous birthday bash in honor of</h3>
          </Fade>
          <Fade bottom duration={1200}>
            <h2 className="name">Ayish. Ahnaa. Arwaa. Areesya.</h2>
          </Fade>
          <hr />
        </div>
      </div>
        <ReactAudioPlayer
          src="/audio/bts.mp3"
          autoPlay
          // controls
          loop
          ref={audioRef}
          style={{position: "absolute", right: 10, bottom: 10}}
        />
        {/* <div
          style={{
            border: "2px solid white",
            position: "absolute",
            bottom: 10,
            right: 10,
            borderRadius: 30,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            height: 60,
            width: 60,
          }}
          onClick={() => (isMuted ? playAudio() : pauseAudio())}
        >
          <img src={isMuted ? "images/mute.png" : "images/play.png"} />
        </div> */}

      <p className="scrolldown">
        <a className="smoothscroll" href="#details">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
}

export default Header;
