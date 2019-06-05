import React from 'react';

import Feedback from './feedback';
import Form from './form';

import './card.css';

export default function Card(props){
  const { feedback, guessCounter } = props;
  return (
    <div className="card">
      <Feedback feedback={feedback} guessCounter={guessCounter} />
      <Form
        onMakeGuess={guess=> props.onMakeGuess(guess)}
      />
    </div>
  );
}
