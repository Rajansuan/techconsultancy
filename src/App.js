import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MiddleSection from "./components/MiddleSection";
import AnimatedCursor from "react-animated-cursor";
import "./App.css";

const App = () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={8} /* Size of the inner circle */
        outerSize={35} /* Size of the outer circle */
        color="35, 59, 151" /* RGB color of the cursor */
        outerAlpha={0.3} /* Transparency of the outer circle */
        innerScale={1.5} /* Scale effect when hovering */
        outerScale={2.5} /* Scale effect when hovering */
        clickables={[
          "a", // Links
          "button", // Buttons
          ".link", // Custom classes
        ]}
      />
      <Header />
      <MiddleSection />
      <Footer />
    </div>
  );
};

export default App;
