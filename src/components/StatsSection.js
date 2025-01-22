import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import "./statsSection.css"; // Assuming you're using a separate CSS file

const StatsSection = () => {
  const [counterKey, setCounterKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounterKey((prevKey) => prevKey + 1); // Change key to reset CountUp animation
    }, 5000); // Adjust this interval for how often you want to reset the animation (in ms)

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <section className="stats-section">
      <div className="stat-item">
        <div className="countup">
          <CountUp key={counterKey} className="countup-number" start={0} end={7} duration={2} />
          <span className="plus-sign">+</span>
        </div>
        <p>Years of Experience</p>
      </div>
      <div className="stat-item">
        <div className="countup">
          <CountUp key={counterKey} className="countup-number" start={0} end={150} duration={3} />
          <span className="plus-sign">+</span>
        </div>
        <p>Skilled Professionals</p>
      </div>
      <div className="stat-item">
        <div className="countup">
          <CountUp key={counterKey} className="countup-number" start={0} end={100} duration={2} />
          <span className="plus-sign">+</span>
        </div>
        <p>Projects Worldwide</p>
      </div>
      <div className="stat-item">
        <div className="countup">
          <CountUp key={counterKey} className="countup-number" start={0} end={99} duration={2} />
          <span className="plus-sign">+</span>
        </div>
        <p>Customer Satisfaction</p>
      </div>
    </section>
  );
};

export default StatsSection;
