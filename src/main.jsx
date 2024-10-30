import React from 'react';
import { createRoot } from 'react-dom/client';
import Citation from './components/Dashbord/Citation/Citation';
import HeureDate from './components/Dashbord/Heure&Date/Heure&Date';
import Blague from './components/Dashbord/Blague/Blague';
import RecetteDuJour from './components/Dashbord/Recette/Recette';
import HistoricalDate from './components/Dashbord/Date&Event/date&event';
import FormMarkdown from './components/MarkDown/FormMarkdown/FormMarkDown';
import ListeMarkdowns from './components/MarkDown/ListMarkdown/ListMarkDown';
import { BrowserRouter } from 'react-router-dom';


const root = createRoot(document.querySelector('#root'));

const markdowns = [
  { id: 1, title: 'Markdown 1' },
  { id: 2, title: 'Markdown 2' },
  // Ajoute d'autres éléments ici
];

root.render(
  <BrowserRouter>
    <Citation />
    <HeureDate />
    <Blague />
    <RecetteDuJour />
    <HistoricalDate />
    <FormMarkdown />
    <ListeMarkdowns markdowns={[]} />
  </BrowserRouter>
);
