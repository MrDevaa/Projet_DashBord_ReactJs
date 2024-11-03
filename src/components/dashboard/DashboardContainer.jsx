import React from 'react'
import Citation from './Citation/Citation';
import HeureDate from './HeureDate/HeureDate';
import Blague from './Blague/Blague';
import RecetteDuJour from './Recette/Recette';
import Mocktail  from'./Mocktail/Mocktail';
import HistoricalDate from './DateEvent/dateEvent';
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
