import React from "react";

export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1>Colleges Are Seeking Students Like You</h1>
        <p>
        Find Your Fit with our Featured Schools!
        </p>
        {children}
      </div>
    </div>
  );
}
