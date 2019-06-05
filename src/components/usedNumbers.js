import React from 'react';

import './usedNumbers.css';

export default function usedNumbers(props){
  const guesses = props.guesses.map((guess, index)=>(
    <li key={index}>
    {guess}
    </li>
  ));

  return (
    <ul id="usedNumbers">
    {guesses}
    </ul>

  );

}
