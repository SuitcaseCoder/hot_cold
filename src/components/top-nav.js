import React from 'react';

import './top-nav.css';

export default function TopNav(props){
  return(
    <nav>
      <a
        href="#feedback"
        className="new"
        aria-label="start a new game"
        onClick={()=> props.onRestartGame()}
      >
      + New Game
    </nav>
  )
}
