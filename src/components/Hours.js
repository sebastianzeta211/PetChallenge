// Placeholder to host a component
import React, { useState, useEffect } from 'react';

const Hours = () => {
  const [time, setTime] = useState('');
  useEffect(() => {
    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  }, []);

  return <span>{time}</span>;
};



export default Hours;