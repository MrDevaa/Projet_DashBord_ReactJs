 import React, { useEffect, useState } from 'react';
 import event from '../../../images/event.png'
 
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
        <div className='emoji'>
        <img src={event} alt="event" />
         <h4>Les Événements Historiques du jour</h4>
         <img src={event} alt="event" />
        </div>
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
