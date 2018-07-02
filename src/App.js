import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'

import './App.css'

import Card from './Card'
import GuessCount from './GuessCount'
import HallOfFame, {FAKE_HOF} from './HallOfFame'

const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'
const VISUAL_PAUSE_MSECS = 750

class App extends Component {
  state = { // garde l'etat dans les render
    cards: this.generateCards(),
    currentPair: [],
    guesses: 0,
    matchedCardIndices: [],
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
  
  getFeedbackForCard(index) {// prend la position de la carte et examin pair en cours et carte déja apairé
    const { currentPair, matchedCardIndices } = this.state
    const indexMatched = matchedCardIndices.includes(index)


    if (currentPair.length < 2) {
      return indexMatched || index === currentPair[0] ? 'visible' : 'hidden'
    }

    if (currentPair.includes(index)) {
      return indexMatched ? 'justMatched' : 'justMismatched'
    }

    return indexMatched ? 'visible' : 'hidden'
  }

  // Arrow fx for binding
  handleCardClick = index => {
    const { currentPair } = this.state

    if (currentPair.length === 2) {
      return
    }

    if (currentPair.length === 0) {
      this.setState({ currentPair: [index] })
      return
    }

    this.handleNewPairClosedBy(index)
  }

  handleNewPairClosedBy(index) {
     const { cards, currentPair, guesses, matchedCardIndices } = this.state

     const newPair = [currentPair[0], index]
     const newGuesses = guesses + 1
     const matched = cards[newPair[0]] === cards[newPair[1]]
     this.setState({ currentPair: newPair, guesses: newGuesses })
     if (matched) {
       this.setState({ matchedCardIndices: [...matchedCardIndices, ...newPair] })
     }
     setTimeout(() => this.setState({ currentPair: [] }), VISUAL_PAUSE_MSECS)
   }

  render() {
    const {cards, guesses, matchedCardIndices} = this.state //recup de state
    const won = matchedCardIndices.length === cards.length // gagne si autant de pair que de cartes dispo
    return (
      <div className="memory">
        <GuessCount guesses={guesses} />
        {cards.map((card, index) =>(
          <Card 
          card={card} 
          feedback={this.getFeedbackForCard(index)} 
          key={index} 
          index={index}
          onClick= {this.handleCardClick}/>
         ))}
        {won && <HallOfFame entries={FAKE_HOF} />}
      </div> 
    )
  }
}

export default App
