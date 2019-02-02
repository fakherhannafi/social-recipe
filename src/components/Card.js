import React from 'react';
import { ColorContext } from './Color'
const Card = ({ details }) => {
    const ingredients = details.ingredients
        .split(',')
        .map(item => <li key={item}>{item}</li>)

    const instructions = details.instructions
        .split('\n')
        .map(item => <li key={item}>{item}</li>)

    const requireImage = chemin => {
        try {
            return require(`../img/${chemin}`)
        }
        catch (err) { return require('../img/default.jpeg') }
    }
    return (
        <ColorContext.Consumer>
            {context => (
                <div className="card">
                    <div className="image">
                        <img src={requireImage(details.image)} alt={details.nom}></img>
                    </div>
                    <div className="recette">
                        <h2 style={{ color: context.state.colorTitle }}>{details.nom}</h2>
                        <ul className="Liste-ingrédients">
                            {ingredients}

                        </ul>
                        <ol className="liste-instructions">{instructions}</ol>
                    </div>

                </div>

            )}

        </ColorContext.Consumer>

    );
};

export default Card;