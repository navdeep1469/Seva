import React from "react";
import "./style.css";
import img from "../../images/bg.png";
import Navbar from "../Navbar/Navbar";
import theme from "../../theme";
import { Link } from "react-router-dom";

function LandingPage() {
  const sidebar = true;
  return (
    <div
      className='landing-page '
      style={{ overflow: sidebar ? "hidden" : "scroll" }}
    >
      <Navbar />
      <div className='container'>
        <div className='col1'>
          <div className='r1'>
            <div>
              <h1
                style={{
                  fontSize: "3rem",
                  color: theme.headlines,
                  fontWeight: "bolder",
                  marginBottom: "1em",
                }}
              >
                What does Seva mean?
              </h1>

              <p
                style={{
                  color: theme.para,
                  wordSpacing: "7px",
                }}
              >
                Seva is a Sanskrit word that describes the act of selfless
                service. Its meaning is said to be embodied by the root words
                saha, meaning "with that," and eva, meaning "too," which
                together mean "together with." Selfless service is an important
                concept in Sikhism, as well as most Indian religions and yoga.
                The act of seva leads to collective benefit and gain, although
                it is performed without regard for the outcome of the
                individual.
              </p>
            </div>
            <Link to={"/loginOrSignup"}>
              <button
                style={{ fontSize: "1.5rem" }}
                className='getStartedDesktop'
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className='col2'>
          <img src={img} alt='bg' className='bg' />
          <br />
          <div className='r3'>
            <h3
              style={{
                fontSize: "2rem",
                color: theme.headlines,
                fontWeight: "bolder",
                marginBottom: ".25em",
              }}
            >
              How can you be a part of it?
            </h3>
            <p
              style={{
                color: theme.para,
                wordSpacing: "7px",
              }}
            >
              You can register on our website for free and be a Volunteer for
              any upcoming event near you and be a helping hand and do Seva. You
              can also organise an event and post updates about that event on
              our website
            </p>
            <Link to={"/loginOrSignup"}>
              <button
                style={{ fontSize: "1.5rem" }}
                className='getStartedMobile'
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
