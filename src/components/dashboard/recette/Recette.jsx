import React, { useState, useEffect } from 'react';
import eat from '../../../images/eat.png';

const RecetteDuJour = () => {
  const [recette, setRecette] = useState(null);
  const [open, setOpen] = useState(false);

  // Fonction pour récupérer la recette du jour depuis l'API
  useEffect(() => {
    const fetchRecette = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération de la recette');
        }
        
        const data = await response.json();
        setRecette(data.meals[0]);

      } catch (error) {
        console.error('Erreur lors de la récupération de la recette :', error);
      }
    };

    fetchRecette();
  }, []);

  // Fonction pour ouvrir/fermer la boîte de dialogue
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='useless'>
      {recette ? (
        <>
        <div className='emoji'>
          <img src={eat} alt="eat" /> 
          <h4>Recette du jour</h4>
          <img src={eat} alt="eat" />
        </div>
          <h2>{recette.strMeal}</h2>
          <button onClick={handleClickOpen}>Voir les détails</button>
        </>

      ) : (
        <p>Chargement de la recette...</p>
      )}

      {open && (
        <div >
          <div >
            <span onClick={handleClose}>&times;</span>
            <p><strong>Ingrédients :</strong></p>
            <ul>
              {Object.keys(recette)
                .filter((key) => key.includes('strIngredient') && recette[key])
                .map((key, index) => (
                  <li key={index}>{recette[key]}</li>
                ))}
            </ul>
            <p><strong>Instructions :</strong> {recette.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecetteDuJour;