import React, { Component } from 'react';
import AddRecette from './AddRecette'
import AdminForm from "./AdminForm";
import firebase from 'firebase/app';
import 'firebase/auth'
import base, { firebaseApp } from '../base'
import Login from './Login'
class Admin extends Component {

    state = {
        uid: null,
        chef: null
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.handleAuth({ user })
            }
        })
    }
    handleAuth = async authData => {
        const box = await base.fetch(this.props.pseudo, { context: this })
        if (!box.chef) {
            await base.post(`${this.props.pseudo}/chef`, {
                data: authData.user.uid
            })
        }
        this.setState({
            uid: authData.user.uid,
            chef: box.chef || authData.user.uid
        })
    }

    authenticate = () => {
        const authProvider = new firebase.auth.FacebookAuthProvider
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.handleAuth)
    }
    logout = async () => {
        console.log('Déconnexion')
        await firebase.auth().signOut()
        this.setState({ uid: null })
    }
    render() {
        const { recettes, addRecette, changeRecette, deleteRecette, chargerExemple } = this.props
        if (!this.state.uid) {
            return <Login authenticate={this.authenticate}></Login>
        }

        if (this.state.uid !== this.state.chef) {
            return (
                <div>
                    <p>Tu n'est pas le chef de cette boite</p>
                    <button onClick={this.logout}>Déconnexion</button>
                </div>)
        }
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
                <footer><button onClick={this.logout}>Déconnexion</button>
                    <button onClick={chargerExemple}>Remplir</button>

                </footer>


            </div>

        );
    }
}

export default Admin;