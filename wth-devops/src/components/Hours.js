// Placeholder to host a component
import React, { useState, useEffect } from 'react';

const Hours = () => {
  const [Hours, setHours] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setHours(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, []);

  return <div>{Hours}</div>;
};



export default Hours;