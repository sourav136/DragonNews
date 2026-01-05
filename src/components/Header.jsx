import React from "react";
import logo from "../assets/logo.png";
import Marquee from "react-fast-marquee";
const Header = () => {
  const formatDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="flex flex-col items-center justify-center mt-12.5">
      <img src={logo} alt="logo" className="max-w-100 mb-5" />
      <h1 className="text-accent mb-2.5 text-lg">Journalism Without Fear or Favour</h1>
      <p className="text-accent text-xl mb-7.5">{formatDate}</p>
      <div className="w-full bg-base-200 p-4 flex items-center gap-5">
        <div className="bg-secondary px-6 py-2">
          <span className="text-white">Latest</span>
        </div>
        <Marquee >
            <p className="me-5">Match Highlights: Germany vs Spain — as it happened!</p>
            <p className="me-5">Match Highlights: Germany vs Spain — as it happened!</p>
            <p className="me-5">Match Highlights: Germany vs Spain — as it happened!</p>
            <p className="me-5">Match Highlights: Germany vs Spain — as it happened!</p>
            <p className="me-5">Match Highlights: Germany vs Spain — as it happened!</p>
        </Marquee>
      </div>
    </section>
  );
};

export default Header;
