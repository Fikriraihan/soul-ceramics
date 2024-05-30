import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  robots: {
    index: false,
    follow: true,
  },
};

const About = () => {
  return <div>About</div>;
};

export default About;
