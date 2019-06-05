import React from 'react';

import './guessCounter.css';

export default function GuessCounter(props){

  const guessCount count={props.guesses.length}
  return(
    <div className="guessCounter" id="guessCounter">
      You've made <span id="count">{props.guessCounter}</span> guesses!
    </div>
  )
}
