import React from 'react';

const WinnerMessage = props => {
  return (
    <div>
      {
        props.correctGuesses.length ?
        <p>Great job! You got {props.correctGuesses.length} right and {props.incorrectGuesses.length} wrong!</p> :
        null
      }
      {
        props.submitted && !props.correctGuesses.length ?
        <p>Sorry, you didn't get any right guesses!</p> :
        null
      }
    </div>
  )
};

export default WinnerMessage;