import { useState, useEffect } from 'react';
import rigole from "../../../images/rigole.png";
function Blague() {
  const [blague, setBlague] = useState({});

  useEffect(() => {
    fetchBlague();
  }, []);

  function fetchBlague() {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((res) => res.json())
      .then((data) => setBlague(data))
      .catch((err) => console.error(err));
  }

  return (
    <div className='useless'>
      <h4>Voici une blague</h4>
      <div>
        <p>{blague.setup}</p>
        <p>Chute :</p>
        <div className='chute'>
          <img src={rigole} alt="rigole" />
          <p>{blague.punchline}</p>
        </div>
      </div>
    </div>
  );
}

export default Blague;