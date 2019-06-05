import React from 'react';

import './feedback.css';

export default function Feedback(props){
  const key = props.guessCounter;

  // let guessAgain;
  // if (key !== 0){
  //   guessAgain = <span className
  // }

  return (
    <h2
      key={key}
      id="feedback"
      role="status"
    >
    {props.feedback}
    </h2>
  )
}
