import React from 'react'
import Citation from './citation/Citation';
import HeureDate from './heureDate/HeureDate';
import Blague from './blague/Blague';
import RecetteDuJour from './recette/Recette';
import Mocktail  from'./mocktail/Mocktail';
import HistoricalDate from './dateevent/DateEvent';
import ListeMarkdowns from '../MarkDown/ListeMarkdowns/ListeMarkDowns';
import FormMarkdown from '../MarkDown/FormMarkdown/FormMarkDown';
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
