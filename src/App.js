import React from 'react'
import PropTypes from 'prop-types'
import './App.css'
import Header from "./components/Header";
import Admin from './components/Admin'
import Card from './components/Card'
import withFirebase from './hoc/withFirebase'

import ColorContext from './components/Color'
const App = ({ match, recettes, addRecette, changeRecette, deleteRecette, chargerExemple }) => {

  const cards = Object.keys(recettes)
    .map(key => <Card
      key={key}
      details={recettes[key]}>
    </Card>)
  return (
    <ColorContext>
      <div className='box'>
        <Header pseudo={match.params.pseudo}></Header>
        <div className='cards'>
          <div className='card'>
            {cards}
          </div>
        </div>
        <Admin
          pseudo={match.params.pseudo}
          recettes={recettes}
          addRecette={addRecette}
          changeRecette={changeRecette}
          deleteRecette={deleteRecette}
          chargerExemple={chargerExemple}></Admin>
      </div></ColorContext>

  )
}

App.prototype = {
  match: PropTypes.object.isRequired,
  recettes: PropTypes.object.isRequired,
  addRecette: PropTypes.func.isRequired,
  changeRecette: PropTypes.func.isRequired,
  deleteRecette: PropTypes.func.isRequired,
  chargerExemple: PropTypes.func.isRequired,
}
const WrappedComponent = withFirebase(App)
export default WrappedComponent
