import React from 'react';

import Header from './header';
import Card from '/card';

export default class Game extends React.Component{
  constructor(props){
    super(props){
      this.state = {
        usedNumbers: [],
        feedback: 'Pick a number, any number',
        correctAnswer: Math.floor(Math.random()*100)+1
      };
    }
  }

  restartGame(){
    this.setState({
      usedNumbers: [],
      feedback: 'Pick a number, any number',
      correctAnswer: Math.floor(Math.random()*100)+1
    })
  }

  makeGuess(guess){
    guess = parseInt(guess,10);
  }

  const difference = Math.abs(guess - this.state.correctAnswer);

  let feedback;
  if (difference >= 30){
    feedback = 'Cold';
  } else if (difference >= 1){
    feedback = 'Hot';
  }

  this.setState({
    feedback,
    usedNumbers: [...this.state.usedNumbers]
  });

  
  render(){
    const { feedback, usedNumbers } = this.state;
    const guesscounter = usedNumbers.length;

    return(
      <div>
        <Header
          onRestartGame={() => this.restartGame()}
        />
        <main role="main">
          <Card />
        </main>
      </div>
    )
  }
}
