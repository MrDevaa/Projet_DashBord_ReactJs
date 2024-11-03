import React from 'react'
import Citation from './dos-citation/Citation.jsx';
import HeureDate from './dos-heuredate/HeureDate.jsx';
import Blague from './dos-blague/Blague.jsx';
import RecetteDuJour from './dos-recette/Recette.jsx';
import Mocktail  from'./dos-mocktail/Mocktail.jsx';
import HistoricalDate from './dos-dateevent/DateEvent.jsx';
import ListeMarkdowns from '../MarkDown/dos-listemarkdowns/ListeMarkDowns.jsx';
import FormMarkdown from '../MarkDown/dos-formmarkdown/FormMarkDown.jsx';
import "../../styles/dashboard.css";

function DashboardContainer({ markdowns, ajouterMarkdownViaInput, ajouterMarkdown, supprimerMarkdown }) {
    
  return (
    <div className='dashboard-container'>
        <div className='top-dashbord'>
            <div className='left-dashbord'>
                <HeureDate />
                <div className='markdown-tool'>
                    <ListeMarkdowns markdowns={markdowns} ajouterMarkdownViaInput={ajouterMarkdownViaInput} supprimerMarkdown={supprimerMarkdown}/>
                    <FormMarkdown ajouterMarkdown={ajouterMarkdown}/>
                </div>
            </div>
            <div className='right-dashbord'>
                <div className='child-right-dashbord'>
                    <Blague /> 
                    <Citation />
                </div>
                <div className='child-right-dashbord'>
                    <Mocktail  />
                    <RecetteDuJour />
                </div>
            </div>
        </div>
        <HistoricalDate />
    </div>
  )
}

export default DashboardContainer
