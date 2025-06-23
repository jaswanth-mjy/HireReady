import React, { useEffect } from "react";
import "./Loader.css";

const Loader = () => {
  useEffect(() => {
    const gsap = window.gsap;
    const SplitText = window.SplitText;

    let splitMessage = SplitText.create(".message", {
      type: "chars",
      charsClass: "char",
    });

    let split = SplitText.create(".letters", {
      type: "chars",
      charsClass: "char",
    });

    const timeline = gsap.timeline({});
    const timeline2 = gsap.timeline({});

    timeline
      .to(".container", {
        y: "0",
        duration: 1,
        opacity: 1,
        ease: "elastic.out(1,0.3)",
      })
      .to(".loader", {
        width: "100%",
        duration: 2,
        ease: "expoScale(0.5,7,none)",
      });

    split.chars.forEach((spl) => {
      timeline2.fromTo(
        spl,
        {
          y: "0px",
          opacity: 0,
        },
        {
          y: "-100px",
          opacity: 1,
          yoyo: true,
          repeat: -1,
          delay: 0.2,
          rotation: () => gsap.utils.random(-30, 30),
        }
      );
    });
  }, []);

  return (
    <div className="loader-bg">
      <div className="message">
        <p>Analyzing...</p>
      </div>
      <div className="outer-container">
        <div className="container">
          <p className="letters">LOADING</p>
          <div className="bowl">
            <div className="loader"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;