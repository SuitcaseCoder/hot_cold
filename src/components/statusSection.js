import React from 'react';

import UsedNumbers from './usedNumbers';

import './statusSection.css';

export default function StatusSection(props){
  const { guesses } = props;

  return (
    <section>
      <UsedNumbers guesses={guesses} />
    </section>
  )
}
