import React, { useState, useEffect } from 'react';

const HeureDate = () => {
  // État pour stocker la date et l'heure
  const [dateTime, setDateTime] = useState({
    date: new Date().toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    time: new Date().toLocaleTimeString('fr-FR')
  });

  // Utiliser useEffect pour mettre à jour l'heure toutes les secondes
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
    }, 1000); // Mettre à jour chaque seconde

    // Nettoyage de l'intervalle lors du démontage du composant
    return () => clearInterval(intervalId);
  }, []); // [] signifie que cet effet est appliqué une seule fois au montage

  return (
    <div className='useless'>
      <div className='date-color'>
        <p>Nous somme {dateTime.date} il est {dateTime.time}</p>
      </div>
    </div>
  );
};

export default HeureDate;
