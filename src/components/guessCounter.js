import React from 'react';

import './guessConter.css';

export default function GuessCounter(){
  const guessCount count={props.guesses.length}
  return(
    <div className="guessCounter">
      < guessCounter count={props.guesses.length} />
    </div>
  )
}
