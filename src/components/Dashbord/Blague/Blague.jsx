import { useState, useEffect } from 'react';
import "../Blague/blague.css";

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
    <div>
      <p>Voici  la blague du jour :</p>
      <ul>
        <li>setup : {blague.setup}</li>
        <li>punchline : {blague.punchline}</li>
      </ul>
    </div>
  );
}

export default Blague;