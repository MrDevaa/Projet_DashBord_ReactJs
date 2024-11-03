import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom';
import ListeMarkdowns from './ListeMarkdowns/ListeMarkdowns';
import PreviewMarkdown from './PreviwMarkdown/PreviewMarkdown';
import '../../styles/markdown.css'

function MarkdownContainer({ markdowns, onUpdateMarkdown, ajouterMarkdownViaInput, supprimerMarkdown }) {
  const { markdownid } = useParams();

  return (
    <div className='markdown-container'>
      <div className='top-markdown'>
        <h2>Editeur de markdown</h2>
      </div>
      <div>
        
        <ListeMarkdowns markdowns={markdowns} ajouterMarkdownViaInput={ajouterMarkdownViaInput} supprimerMarkdown={supprimerMarkdown}/>

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