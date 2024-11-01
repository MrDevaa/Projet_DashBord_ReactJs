import React from 'react'
import { Link } from 'react-router-dom';

function ListeMarkdowns({ markdowns, ajouterMarkdownViaInput }) {

  return (
    <div className='list markdown-box'>
      <h2 className='markdown-h2'>Sélectionner markdown</h2>
      <div>
          <label htmlFor="input-markdown">Ajouter un fichier</label>
          <input id='input-markdown' type="file" accept=".md" onChange={ajouterMarkdownViaInput}/>
        <ul>
          {markdowns.map((markdown) => (
            <li key={markdown.id}>
              <Link to={`/markdown/${markdown.id}`}>
                {markdown.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListeMarkdowns