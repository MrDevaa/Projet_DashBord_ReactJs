import { useState, useEffect } from 'react';
import rigole from "../../../images/rigole.png";
import rire from '../../../images/blague.png'
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
      <div className='emoji'>
        <img src={rire} alt="blague" />
      <h4>Voici une blague</h4>
      <img src={rire} alt="blague" />
       </div>
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