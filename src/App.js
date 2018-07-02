import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'

import './App.css'

import Card from './Card'
import GuessCount from './GuessCount'
import HallOfFame, {FAKE_HOF} from './HallOfFame'

const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'

class App extends Component {
  state = { // garde l'etat dans les render
    cards: this.generateCards(),
    currentPair: [],
    guesses: 0,
    machedCardIndices: [],
  }

  generateCards() {
    const result = []
    const size = SIDE * SIDE
    const candidates = shuffle(SYMBOLS)
    while (result.length < size) {
      const card = candidates.pop()
      result.push(card, card)
    }
    return shuffle(result)
  }

  handleCardClick(card) {
    console.log(card, 'clicked')
  }

  render() {
    const {cards, guesses, matchedCardIndices} = this.state //recup de state
    const won = matchedCardIndices.length === cards.length // gagne si autant de pair que de cartes dispo
    return (
      <div className="memory">
        <GuessCount guesses={guesses} />
        {cards.map((card, index) =>(
          <Card card={card} feedback="visible" key={index} onClick= {this.handleCardClick}/>
         ))}
        {won && <HallOfFame entries={FAKE_HOF} />}
      </div> 
    )
  }
}

export default App
