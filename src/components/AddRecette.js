import React, { Component } from 'react';

class AddRecette extends Component {

    state = {
        nom: '',
        image: '',
        ingredients: '',
        instructions: ''

    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    handleSubmit = event => {
        event.preventDefault();
        const recette = { ... this.state }
        this.props.ajouterRecette(recette)
        //Reset
        Object.keys(recette).forEach(item => { recette[item] = '' })
        this.setState({ ...recette })
    }
    render() {
        return (
            <div className='card'>
                <form className='admin-form ajouter-recette' onSubmit={this.handleSubmit}>
                    <input name='nom' type='text' placeholder='Nom de la recette' onChange={this.handleChange} value={this.state.nom}></input>
                    <input name='image' type='text' placeholder="Nom de l'image" onChange={this.handleChange} value={this.state.image} ></input>
                    <textarea name='ingredients' type='text' placeholder='Liste des ingrédients' rows='3' onChange={this.handleChange} value={this.state.ingredients}></textarea>
                    <textarea name='instructions' type='text' placeholder='liste des instructions' rows='15' onChange={this.handleChange} value={this.state.instructions}></textarea>
                    <button type='submit'> Ajouter cette recette</button>
                </form>
            </div>
        );
    }
}

export default AddRecette;