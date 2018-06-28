import Card from './Card'
import React, { Component } from 'react'
import './App.css'
import GuessCount from './GuessCount'

class App extends Component {
	handleCardClick(card){ 
		// gestion des events
		console.log(card,'clicked');
	}
  render() {
  	const won = new Date().getSeconds() % 2 === 0
    return (
    	
    	<div className="memory">
    	  <GuessCount guesses={0}/>	
    	  <Card card="😋" feedback="hidden" 		onClick={this.handleCardClick}/>
    	  <Card card="❤" feedback="justMatched" 	onClick={this.handleCardClick}/>
    	  <Card card="🎩" feedback="JustMismached" 	onClick={this.handleCardClick}/>
    	  <Card card="👼" feedback="visible" 		onClick={this.handleCardClick}/>
    	  <Card card="👾" feedback="hidden" 		onClick={this.handleCardClick}/>
    	  <Card card="🍺" feedback="justMatched" 	onClick={this.handleCardClick}/>
    	  {won && <p>Gagné</p>}
    	</div>
    )
  }
}

export default App
