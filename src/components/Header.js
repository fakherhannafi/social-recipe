import React from 'react';
import { ColorContext } from './Color'
const Header = ({ pseudo }) => {
    const formatPseudo = pseudo => /[aeiou]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`
    return (
        <ColorContext.Consumer>
            {context => (
                <header style={{ backgroundColor: context.state.colorHeader }}>
                    <h1>La boite à Recettes {formatPseudo(pseudo)}</h1>
                </header>)}
        </ColorContext.Consumer>

    );
};

export default Header;