import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import showdown from 'showdown';

function PreviewMarkdown({ markdowns, onUpdateMarkdown }) {
  
  const navigate = useNavigate();
  const { markdownid } = useParams();
  
  const markdown = markdowns.find(({ id }) => (id === markdownid));

  console.log(markdown);
  
  React.useEffect(() => {
    if (markdown === undefined) {
      // redirection sur 'laccuil si pas d'id trouver
      navigate('/markdown');
    }
  }, [markdown, navigate]);

  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (markdown) {
      setContent(markdown.content);
      setTitle(markdown.title);
    }
  }, [markdown]);

  console.log(markdown);

  var converter = new showdown.Converter();
  // convertie "markdown" en html grace a "converter"
  var html = converter.makeHtml(content);

  function updateMarkdown(e) {
    e.preventDefault();
    // appeler la fonction de mise à jour fournie via les props
    onUpdateMarkdown(markdown.id, title, content);
  }

  function downloadMarkdown() {
    // ----- Source: IA -----
    // Blob = Binary Large Object = objet qui contient des données de type fichier en brut
    const blob = new Blob([markdown.content], { type: 'text/markdown' });
    // création d'une URL temporaire pour le Blob
    // pour qu'il soit accesible comme s'il s'agissait d'un fichier accessible depuis une adresse sur internet
    const url = URL.createObjectURL(blob);
    
    // Création d'un élément <a> pour forcer le téléchargement
    const a = document.createElement('a');
    // ont remplie le href du <a> avec l'url généré
    a.href = url;
    
    
    // add le nom du fichier
    a.download = `${markdown.title}.md`;
    // simule un clic de l'utilisateur
    a.click();

    // supp l'URL temporaire
    URL.revokeObjectURL(url);
    // ----------
  }


  // au chargement de la page...
useEffect(() => {
  const elements = [
    { el: document.querySelector('.display-edit'), name: 'Edit' },
    { el: document.querySelector('.display-preview'), name: 'Preview' },
  ];

  const affiche = (name, previewShow, editShow) => {
    if (name === "Edit") {
      editShow.style.display = "block";
      previewShow.style.display = "none";
      editShow.style.overflowY = "scroll"

    } else if (name === "Preview") {
      editShow.style.display = "none";
      previewShow.style.display = "block";
      previewShow.style.overflowY = "scroll"

    }
  };

  elements.forEach(({ el, name }) => {
    {
      el.addEventListener('click', () => {
        const previewShow = document.querySelector('.preview-show');
        const editShow = document.querySelector('.edit-show');

        if (previewShow && editShow) {
          affiche(name, previewShow, editShow);
        }
      });
    }
  });
})
  
  return (
    <div className="preview-container">
      <ul className='respons-display hidden-ul'>
        <li className='display-edit'>modifier</li>
        <li className='display-preview'>preview</li>
      </ul>

      <div className='right-preview'>
        <div className='markdown-box edit-show'>
          <h2 className='markdown-h2'>Modifier markdown</h2>
          <form onSubmit={updateMarkdown}>
            <input type="text" placeholder='titre' value={title} onChange={(e) => setTitle(e.target.value)}/>
            <textarea spellCheck="false" value={content} onChange={(e) => setContent(e.target.value)}/>
            <button type='submit'>Mettre a jour</button>
          </form>
        </div>
        <div className='markdown-box preview-show'>
          <div className='top-preview'>
            <h2 className='markdown-h2'>Prévisualisation</h2>
          </div>

          {/* Source: IA  (affiche le contenu HTML */}
          <div className='preview' dangerouslySetInnerHTML={{ __html: html }}></div>
          <button onClick={downloadMarkdown}>Télécharger</button>

        </div>
      </div>
      
    </div>
  );
}

export default PreviewMarkdown