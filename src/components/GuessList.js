import React from 'react';
import styled from 'styled-components';

const Guesses = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  padding-left: 0px;
  
  li {
    background: white;
    min-width: calc(40% - 40px);
    margin: 20px;
    padding: 7px 10px;
    border: 1px solid black;
    box-shadow: -1px 1px black;
    text-align: center;
    list-style: none;
  }

  .correct-guess {
    background: #76d35d;
  }
  
  .incorrect-guess {
    background: #aa2f23;
  }
`;

const GuessList = props => {
  return (
    <>
      <Guesses>
        {
          (!props.correctGuesses.length && !props.submitted) || (props.submitted && !props.userGuesses.length) ?
          props.userGuesses.map((guess, i) => <li key={i}>{props.userGuesses[i]}</li>) : 
          props.correctGuesses.map((guess, i) => <li key={i} className={`correct-guess`}>{props.correctGuesses[i]}</li>)
        }
      </Guesses>
      <Guesses>
        {
          (props.incorrectGuesses.length && props.submitted) ?
          props.incorrectGuesses.map((guess, i) => <li key={i} className={`incorrect-guess`}>{props.incorrectGuesses[i]}</li>) :
          null
        }
      </Guesses>
    </>
  )
}

export default GuessList;