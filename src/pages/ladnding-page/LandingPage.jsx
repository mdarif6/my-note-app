import React from "react";
import "./LandingPage.css";
import heroimage from "../../assets/images/hero.svg";
export default function LandingPage() {
  return (
    <div class="landing-main-container">
      <div class="landing-main-information">
        <div class="main-heading">
          My <span>Notes</span>
        </div>
        <div class="middle-content">
          <div class="middle-bold">
            <p>Meet your Modern</p>
            <p>
              <span>Note Taking App</span>
            </p>
          </div>
          <p>
            Manage your daily tasks and workflow in a modern way and boost your
            efficiency without any efforts.
          </p>
        </div>
        <div class="lower-content">
          <button class="btn btn-primary">Join Now</button>
          <p>Alredy have an account ?</p>
        </div>
      </div>
      <div class="typora-hero">
        <img src={heroimage} alt="hero-image" />
      </div>
    </div>
  );
}
