import { useState, useEffect } from 'react';

function App() {
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
    <div>
      <p>Actuellement, la citation est la suivante :</p>
      <ul>
        <li>La Citation actuelle est : {citation.advice}</li>
        {/* <li>ID de la citation : {citation.id}</li> */}
      </ul>
    </div>
  );
}

export default App;
