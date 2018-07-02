import PropTypes from 'prop-types'
import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({card, feedback, onClick}) => (//destructuration probs 
	<div className={`card ${feedback}`} onClick={() => onClick(card)}>  
	<span className="symbol">
		{feedback === 'hidden' ? HIDDEN_SYMBOL : card}
	</span>
	</div>

)
 Card.propTypes = {
 	card: PropTypes.string.isRequired,
 	feedback: PropTypes.oneOf([
 		'visible',
 		'hidden',
 		'justMatched',
 		'justMissmached'
 	])
 }
export default Card
