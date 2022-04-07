import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import heroimage from "../../assets/images/hero.svg";
export default function LandingPage() {
  return (
    <div className="landing-main-container">
      <div className="landing-main-information">
        <div className="main-heading">
          type <span>note</span>
        </div>
        <div className="middle-content">
          <div className="middle-bold">
            <p>Meet your Modern</p>
            <p>
              <span>Note Taking App</span>
            </p>
          </div>

          <div className="typora-hero-mq">
            <img src={heroimage} alt="hero-image" />
          </div>

          <p>
            Manage your daily tasks and workflow in a modern way and boost your
            efficiency without any efforts.
          </p>
        </div>
        <div className="lower-content">
          <button className="btn btn-primary">Join Now</button>
          <Link className="link-style" to="/home">
            <p>Alredy have an account ?</p>
          </Link>
        </div>
      </div>
      <div className="typora-hero">
        <img src={heroimage} alt="hero-image" />
      </div>
    </div>
  );
}
