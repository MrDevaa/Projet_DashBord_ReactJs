import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './Citation/Citation';
import HeureDate from './Heure&Date/Heure&Date';


const root = createRoot(document.querySelector('#root'));


root.render(
  <React.Fragment>
    <App />
    <HeureDate />
  </React.Fragment>
);
