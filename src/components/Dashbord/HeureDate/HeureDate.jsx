import React, { useState, useEffect } from 'react';

const HeureDate = () => {
  
  const [dateTime, setDateTime] = useState({
    date: new Date().toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    time: new Date().toLocaleTimeString('fr-FR')
  });

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setDateTime({
        date: now.toLocaleDateString('fr-FR', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        time: now.toLocaleTimeString('fr-FR')
      });
    }, 1000);

    
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className='useless'>
    <div className='date-color'>
      <p>Nous somme {dateTime.date} il est {dateTime.time}</p>
    </div>
    </div>
  );
};

export default HeureDate;
