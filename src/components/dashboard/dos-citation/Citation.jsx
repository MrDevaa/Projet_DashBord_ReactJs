import { useState, useEffect } from 'react';
import idea from '../../../images/idea.png';

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
    <div className='useless' >
      <div className='emoji'>
        <img src={idea} alt="idea" />
        <h4>Actuellement, la citation est </h4>
        <img src={idea} alt="idea" />
      </div>
      <div>
        <p>{citation.advice}</p>
      </div>
    </div>
  );
}

export default Citation;
