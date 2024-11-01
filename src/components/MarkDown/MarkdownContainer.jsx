import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom';
import ListeMarkdowns from './ListeMarkdowns/ListeMarkdowns';
import FormMarkdown from './FormMarkdown/FormMarkdown';
import PreviewMarkdown from './PreviwMarkdown/PreviewMarkdown';
import '../../styles/markdown.css'

function MarkdownContainer({ markdowns, onUpdateMarkdown, ajouterMarkdownViaInput }) {
  const { markdownid } = useParams();

  return (
    <div className='markdown-container'>
      <h1>Editeur de markdown</h1>
      <div>
        
        <ListeMarkdowns markdowns={markdowns} ajouterMarkdownViaInput={ajouterMarkdownViaInput}/>

        {/* affiche si id est trouver */}
        {markdownid && (
          <>
            <PreviewMarkdown markdowns={markdowns} onUpdateMarkdown={onUpdateMarkdown} />
          </>
        )}
      </div>

      
    </div>
  )
}

export default MarkdownContainer