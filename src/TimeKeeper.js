import React, { useState, useEffect } from 'react';
import './TimeKeeper.css';

function TimeKeeper() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  const formatDate = (date) => {
    return date.toLocaleDateString();
  };

  return (
    <div className="time-keeper">
      <div className="time-display">
        <div className="current-time">{formatTime(time)}</div>
        <div className="current-date">{formatDate(time)}</div>
      </div>
    </div>
  );
}

export default TimeKeeper;