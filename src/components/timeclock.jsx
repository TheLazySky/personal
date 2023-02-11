import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <h1>{time.toLocaleTimeString()}</h1>
  );
}



function AddClock() {
  return (
    <div>
      <Clock />
    </div>
  );
}

export default AddClock;
