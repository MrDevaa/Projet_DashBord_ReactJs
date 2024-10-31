 import React, { useEffect, useState } from 'react';
 function HistoricalDate() {
    const [dateInfo, setDateInfo] = useState([]);
    const [randomEvents, setRandomEvents] = useState([]);

    useEffect(() => {
    
      fetch('https://history.muffinlabs.com/date')
        .then((data) => data.json())
        .then((json) => {
         setDateInfo(json);       
          const shuffledEvents = json.data.Events.sort(() => 0.5 - Math.random());
          const selectedEvents = shuffledEvents.slice(0, 4);
        
          setRandomEvents(selectedEvents);
        })
        .catch((error) => console.error('Erreur lors de la récupération des données:', error));
    }, []);


    return (
      <div className='useless'>
        <h4>Les Événements Historiques du jour</h4>
        <ul>
          {randomEvents.map((event, index) => (
            <li key={index}>
              <strong>{event.year}:</strong> {event.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default HistoricalDate;
