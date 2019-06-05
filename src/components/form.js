import React from 'react';

import './form.css';

export default class Form extends React.Component{
  onSubmit(e){
    e.preventDefault();

    if (this.props.onMakeGuess){
      const value = this.input.value;
      this.props.onMakeGuess(value);
    }
    this.input.value='';
    this.input.focus();
  }

  render(){
    return (
      <form onSubmit={e => this.onSubmit(e)}>
          <input
            type="number"
            name="userGuess"
            classname="text"
            min="1"
            max="100"
            ref={input => (this.input = input)}
            required
          />
          <button
            type="submit"
            name="submit"
            id="guessButton"
            className="button"
          >
          guessCounter
          </button>
      </form>
    )
  }
}
