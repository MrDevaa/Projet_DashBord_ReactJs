import React from 'react'
import { Link } from 'react-router-dom';

function ListeMarkdowns({ markdowns }) {

  return (
    <div className='list'>
      <h2>Liste des markdowns</h2>
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
  );
}


export default ListeMarkdowns