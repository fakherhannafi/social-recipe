import React from 'react';

const AdminForm = ({
    id: key,
    changeRecette,
    deleteRecette,
    recettes
}) => {
    const recette = recettes[key]
    const handleChange = (event, key) => {
        const { name, value } = event.target
        const recette = recettes[key]
        recette[name] = value
        changeRecette(key, recette)
    }
    return (
        <div className='card'>
            <form className='admin-form' >
                <input name='nom' type='text' placeholder='Nom de la recette' onChange={e => handleChange(e, key)} value={recette.nom}></input>
                <input name='image' type='text' placeholder="Adresse de l'image" onChange={e => handleChange(e, key)} value={recette.image} ></input>
                <textarea name='ingredients' type='text' placeholder='Liste des ingrédients' rows='3' onChange={e => handleChange(e, key)} value={recette.ingredients}></textarea>
                <textarea name='instructions' type='text' placeholder='liste des instructions' rows='15' onChange={e => handleChange(e, key)} value={recette.instructions}></textarea>
            </form>
            <button onClick={() => deleteRecette(key)}> Supprimer</button>
        </div>

    );
};

export default AdminForm;