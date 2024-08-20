import React, { useState, useEffect } from 'react';
function Timer() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const tick = () => {
      setTime(new Date());
    };
    const intervalId = setInterval(tick, 1000);

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Current Time</h1>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}
export default Timer;
