import React from 'react';

import Header from './header';
import Card from './card';
import StatusSection from './statusSection';

export default class Game extends React.Component{
  constructor(props) {
    super(props);
      this.state = {
        guesses: [],
        feedback: 'Pick a number, any number',
        correctAnswer: Math.floor(Math.random()*100)+1
      };
    }


  restartGame(){
    this.setState({
      guesses: [],
      feedback: 'Pick a number, any number',
      correctAnswer: Math.floor(Math.random()*100)+1
    });
  }

  makeGuess(guess){
    guess = parseInt(guess,10);
    if (isNaN(guess)){
      this.setState({ feedback: 'Please enter a valid number' });
      return;
    }

  const difference = Math.abs(guess - this.state.correctAnswer);

  let feedback;
  if (difference >= 30){
    feedback = 'Cold';
  } else if (difference >= 1){
    feedback = 'Hot';
  } else {
    feedback = 'You got it!';
  }

  this.setState({
    feedback,
    guesses: [...this.state.guesses, guess]
  });
  }


  render(){
    const { feedback, guesses } = this.state;
    const guessCounter = guesses.length;

    return(
      <div>
        <Header
          onRestartGame={() => this.restartGame()}
        />
        <main role="main">
          <Card
            feedback={feedback}
            guessCounter={guessCounter}
            onMakeGuess={guess => this.makeGuess(guess)}
          />
          <StatusSection guesses={guesses} />
        </main>
      </div>
    )
  }
}
