import React, { Component } from 'react';
import recettes from '../recettes'
//Firebase
import base from '../base'
const withFirebase = WrapperComponent => (
    class HOC extends Component {

        state = {
            pseudo: this.props.match.params.pseudo,
            recettes: {}
        }
        componentDidMount() {
            this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
                context: this,
                state: 'recettes'
            })
        }
        componentWillUnmount() {
            base.removeBinding(this.ref)
        }

        addRecette = recette => {
            const recettes = { ...this.state.recettes }
            recettes[`recette-${Date.now()}`] = recette
            this.setState({ recettes })
        }

        changeRecette = (key, newRecette) => {
            const recettes = { ...this.state.recettes }
            recettes[key] = newRecette
            this.setState({ recettes })
        }
        deleteRecette = key => {
            const recettes = { ...this.state.recettes }
            recettes[key] = null
            this.setState({ recettes })
        }

        chargerExemple = () => this.setState({ recettes })
        render() {
            return (
                <WrapperComponent
                    recettes={this.state.recettes}
                    addRecette={this.addRecette}
                    changeRecette={this.changeRecette}
                    deleteRecette={this.deleteRecette}
                    chargerExemple={this.chargerExemple}
                    {...this.props}></WrapperComponent>
            );
        }
    }
)


export default withFirebase;