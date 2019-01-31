import React, { Component } from 'react';
import AddRecette from './AddRecette'
import AdminForm from "./AdminForm";
import firebase from 'firebase/app';
import 'firebase/auth'
import base, { firebaseApp } from '../base'
class Admin extends Component {

    state = {
        uid: null,
        chef: null
    }
    handleAuth = authData => {
        console.log(authData)
    }

    authenticate = () => {
        firebaseApp
            .auth()
            .signInWithPopup('facebookAuthProvider')
            .then(this.handleAuth)
    }
    render() {
        const { recettes, addRecette, changeRecette, deleteRecette, chargerExemple } = this.props
        return (
            <div className="cards">

                <AddRecette ajouterRecette={addRecette}></AddRecette>
                {Object.keys(recettes).map(key => <AdminForm
                    key={key}
                    id={key}
                    changeRecette={changeRecette}
                    deleteRecette={deleteRecette}
                    recettes={recettes}
                ></AdminForm>)}
                <footer>
                    <button onClick={chargerExemple}>Remplir</button>
                </footer>


            </div>

        );
    }
}

export default Admin;