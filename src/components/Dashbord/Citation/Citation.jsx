import { useState, useEffect } from 'react';
import "../Citation/citation.css";

function Citation() {
  const [citation, setCitation] = useState({
    id: null,
    advice: ""
  });

  function fetchCitation() {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((data) => setCitation(data.slip)) // stocke l'objet complet "slip" dans l'état
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchCitation(); // Appelle l'API une seule fois lors du chargement de la page
  }, []); // [] signifie que l'effet s'exécute uniquement une fois après le premier rendu

  return (
    <div className="container">
      <div className="header">
      Actuellement, la citation est la suivante :
      </div>
      <div className="content">
        <p></p>
        <ul>
          <li>La Citation actuelle  :{citation.advice}</li>
        </ul>
      </div>
    </div>
  );
}

export default Citation;
