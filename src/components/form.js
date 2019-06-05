import React from 'react';

import './form.css';

export default function Form(){
  return (
    <form onSubmit={e => e.preventDefault()}>
          <label htmlFor="guess">Guess</label>
          <input
            aria-controls="guessCounter"
            type="guess"
            id="guess"
            name="guess"
            placeholder="3"
          />
        </form>
  )
}
