import React from 'react'
import { useNavigate } from 'react-router-dom';

function FormMarkdown({ ajouterMarkdown }) {

    const navigate = useNavigate();

    // Fonctions
    function gererSubmit(e) {
        e.preventDefault();
        // Ajoute le markdown
        ajouterMarkdown(
            e.target.titre.value,
            e.target.content.value,
        );
        // Redirige vers la page d'accueil
        navigate('/');
    }
    // render
    return (
        <div>
            <h2>Ajouter markdown</h2>
            <form onSubmit={gererSubmit}>
                <input type="text" name="titre" placeholder="Titre du markdown..." />
                <textarea name="content" placeholder="Contenue du markdown..."></textarea>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}


export default FormMarkdown