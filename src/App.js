import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MiddleSection from "./components/MiddleSection";
import AnimatedCursor from "react-animated-cursor";
import StatsSection from './components/StatsSection';
import "./App.css";
import TrustedByUs from "./components/TrustedByUs";
import Services  from "./components/Services";

const App = () => {
  return (
    <div>
      <Header />
      <MiddleSection />
      <StatsSection />
      <TrustedByUs />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
