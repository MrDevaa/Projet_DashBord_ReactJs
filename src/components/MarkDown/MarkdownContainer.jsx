import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom';
import ListeMarkdowns from './listemarkdowns/ListeMarkdowns'
import FormMarkdown from './formmarkdown/FormMarkdown';
import PreviewMarkdown from './previwmarkdown/PreviewMarkdown';

function MarkdownContainer({ markdowns, onUpdateMarkdown }) {
  const { markdownid } = useParams();

  return (
    <div style={{ display: 'flex' }}>
      <div className="list"><ListeMarkdowns markdowns={markdowns}/></div>

      {/* affiche si id est trouver */}
      {markdownid && (
        <>
          <div className="preview">
            <p>yolooo</p>
          <PreviewMarkdown markdowns={markdowns} onUpdateMarkdown={onUpdateMarkdown} />
          </div>
        </>
      )}
    </div>
  )
}

export default MarkdownContainer