import React, { useState, useEffect, useRef } from 'react';
import eat from '../../../images/eat.png';

const RecetteDuJour = () => {
  const [recette, setRecette] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        if (response.ok) {
          const data = await response.json();
          setRecette(data.meals[0]);
        }
      } catch (err) {
        console.log('erreur pendant la récupération :', err);

      };}

    fetchData();
  }, []);

  const getDayOfWeek = () => {
    const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const currentDay = new Date().getDay();
    return days[currentDay];
  };

  const afficherDialog = () => dialogRef.current.showModal();
  const masquerDialog = () => dialogRef.current.close();

  return (
    <div className='useless'>
      <div className='emoji'>
          <img src={eat} alt="eat" /> 
          <h4>Recette du {getDayOfWeek()}</h4>
          <img src={eat} alt="eat" />
        </div>
      {recette ? (
        <div className='card'>
          <p>{recette.strMeal}</p>
          <img src={recette.strMealThumb} alt={recette.strMeal} />
          <button className='button-voir-plus' onClick={afficherDialog}>Consulter les détails de la recette</button>
        </div>
      ) : (
        <p>Chargement général en cours...</p>
      )}

      {recette && (
        <dialog ref={dialogRef}>
          <header>Ingrédients et Instructions</header>
          <div>
            <h3>Ingrédients</h3>
            <ul>
              {Object.keys(recette)
                .filter((key) => key.includes('strIngredient') && recette[key])
                .map((key, i) => (
                  <li key={i}>{recette[key]}</li>
                ))}
            </ul>
            <h3>Instructions</h3>
            <p>{recette.strInstructions}</p>
          </div>
          <button className='close' onClick={masquerDialog}>Fermer</button>
        </dialog>
      )}
    </div>
  );
};

export default RecetteDuJour;