import React from 'react'
import Citation from './citation/Citation.jsx';
import HeureDate from './heuredate/HeureDate.jsx';
import Blague from './blague/Blague.jsx';
import RecetteDuJour from './recette/Recette.jsx';
import Mocktail  from'./mocktail/Mocktail.jsx';
import HistoricalDate from './dateevent/DateEvent.jsx';
import ListeMarkdowns from '../markdown/listemarkdowns/ListeMarkDowns.jsx';
import FormMarkdown from '../MarkDown/FormMarkdown/FormMarkDown.jsx';
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
