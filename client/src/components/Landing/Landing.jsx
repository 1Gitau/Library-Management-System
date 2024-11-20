import React from "react";
import { Link } from "react-router-dom";

import "./Landing.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-part">
        <h1 className="hero-headline">Share your story with the world</h1>
        <p className="hero-subheadline">
          Join BlogIt to express yourself, connect with others, and discover
          amazing stories from writers around the globe🌎.
        </p>
        <div className="hero-buttons">
          <Link to="/writing" className="cta-button primary-button">
            Start Writing
          </Link>
          <Link to="/blog-listing" className="cta-button secondary-button">
            Explore Stories
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Landing() {
  return (
    <div className="landing-container">
      <Hero />
    </div>
  );
}
