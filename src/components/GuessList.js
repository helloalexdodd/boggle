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
  const {userGuesses, correctGuesses, incorrectGuesses, submitted } = props;

  return (
    <>
      <Guesses>
        {
          (!correctGuesses.length && !submitted) || (submitted && !userGuesses.length) ?
          userGuesses.map((guess, i) => <li key={i}>{userGuesses[i]}</li>) : 
          correctGuesses.map((guess, i) => <li key={i} className={`correct-guess`}>{correctGuesses[i]}</li>)
        }
      </Guesses>
      <Guesses>
        {
          (incorrectGuesses.length && submitted) ?
          incorrectGuesses.map((guess, i) => <li key={i} className={`incorrect-guess`}>{incorrectGuesses[i]}</li>) :
          null
        }
      </Guesses>
    </>
  )
}

export default GuessList;