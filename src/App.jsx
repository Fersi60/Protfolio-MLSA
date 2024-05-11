/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Mohamed Youssef Fersi",
  title: "Microsoft Learn Student Ambassador",
  email: "fersimohamedyoussef@gmail.com",
  gitHub: "Fersi60",
  instagram: "fersi_youssef",
  linkedIn: "youssef-fersi",
  medium: "",
  twitter: "fersi_youssef",
  youTube: "Code",
};

const primaryColor = "#4E567E";
const secondaryColor = "#F9A826";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
