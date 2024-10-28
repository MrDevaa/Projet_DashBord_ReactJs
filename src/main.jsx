import React from 'react';
import { createRoot } from 'react-dom/client';
import Citation from './components/Dashbord/Citation/Citation';
import HeureDate from './components/Dashbord/Heure&Date/Heure&Date';
import Blague from './components/Dashbord/Blague/Blague';
import RecetteDuJour from './components/Dashbord/Recette/Recette';


const root = createRoot(document.querySelector('#root'));


root.render(
  <React.Fragment>
    <Citation />
    <HeureDate />
    <Blague />
    <RecetteDuJour />
  </React.Fragment>
);
