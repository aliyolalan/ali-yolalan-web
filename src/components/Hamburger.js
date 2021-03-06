import React, {useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import gsap from "gsap";

const Hamburger = ({state}) => {
  // Vars for our animated dom nodes
  let menu = useRef(null)
  let revealMenu = useRef(null)
  let revealMenuBackground = useRef(null)
  let line1 = useRef(null)
  let line2 = useRef(null)
  let line3 = useRef(null)

  useEffect(() => {
    if (state.clicked === false) {
      //Close our menu
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07
        }
      });
      gsap.to(menu, {
        duration: 1,
        css: {display: "none"}
      });
    }
    else if (state.clicked === true || state.clicked === true && state.initial === null) {
      gsap.to(menu, {
        duration: 0,
        css: {display: "block"}
      });
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(revealMenuBackground, revealMenu);
    }
  }, [state]);

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.4,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.4
      }
    })
  }

  return (
  <div ref={el => (menu = el)} className='hamburger-menu'>
    <div ref={el => (revealMenuBackground = el)} className="menu-secondary-background-color">
      <div ref={el => (revealMenu = el)} className="menu-layer">
        <div className="menu-city-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link ref={el => (line1 = el)} to="/works">Works</Link>
                  </li>
                  <li>
                    <Link ref={el => (line2 = el)} to="/about-me">About Me</Link>
                  </li>
                  <li>
                    <Link ref={el => (line3 = el)} to="/contact-me">Contact Me</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
};

export default Hamburger;