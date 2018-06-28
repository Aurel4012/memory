import Card from './Card'
import React, { Component } from 'react'
import './App.css'
import GuessCount from './GuessCount'

class App extends Component {
  render() {
    return (
    	<div className="memory">
    	  <GuessCount guesses={0}/>	
    	  <Card card="😋" feedback="hidden" />
    	  <Card card="❤" feedback="justMatched" />
    	  <Card card="🎩" feedback="JustMismached" />
    	  <Card card="👼" feedback="visible" />
    	  <Card card="👾" feedback="hidden" />
    	  <Card card="🍺" feedback="justMatched" />
    	</div>
    )
  }
}

export default App
