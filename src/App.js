import React, { useState } from 'react';
import axios from 'axios';
import { PROXY_URL, DICTIONARY_URL } from './constants/dictionary_api';
import { setTimeout } from 'timers';

import styled from 'styled-components';
import { GlobalStyle, Wrapper } from './GlobalStyles';

import Header from './components/Header';
import RandomTiles from './components/RandomTiles';
import Form from './components/Form';
import GuessList from './components/GuessList';
import WinnerMessage from './components/WinnerMessage';

export const Board = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 30px;
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 0;
`;

function App() {
  const [letterArray, setLetterArray] = useState([]);
  const [userInput, setUserInput] =  useState('');
  const [userGuesses, setUserGuesses] = useState([]);
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  
  const storeTiles = letterArray => setLetterArray(letterArray);
  
	const handleChange = e => setUserInput(e.target.value);
  
  const handleSubmit = e => {
    e.preventDefault();
    if (!submitted && userInput) {
			const lowerCaseInput = userInput.toLowerCase().toString();
			const newUserGuesses = [...userGuesses];
      newUserGuesses.push(lowerCaseInput);
      setUserGuesses(newUserGuesses);
      const newUserInput = "";
      setUserInput(newUserInput);
		}
  };
  
  const handleFinish = e => {
		e.preventDefault();
		if (!submitted) {
			userGuesses.forEach(guess => {
				getInfo(guess)
			});
			if (userGuesses) {
				setTimeout(() => {
          setSubmitted(true)
				}, 1500);
			};	
		}
  };
  
  const getInfo  = async function(word) {
		const apiKey = process.env.REACT_APP_API_KEY;
		const apiId = process.env.REACT_APP_API_ID;

		await axios.get(`${PROXY_URL}${DICTIONARY_URL(word)}`, {
			dataResponse: 'json',
			headers: {
				'Accept': 'application/json',
				'app_id': apiId,
				'app_key': apiKey
			}
		}).then(res => {
			const result = res.data.id;
			const checkedTiles = checkTiles(result);
			handleGuesses(checkedTiles, result);
		}, err => {
			handleGuesses(err, word)
		});
  };
  
  const checkTiles = word => {
		const letters = word.toUpperCase().split("");
		return letters.map(letter => letterArray.includes(letter));
  };
  
  const handleGuesses = (checkedTiles, word) => {
		if (Array.isArray(checkedTiles) && !checkedTiles.includes(false) && typeof word === 'string') {
      const newGuess = correctGuesses;
      newGuess.push(word)
      setCorrectGuesses(newGuess)
		} else {
			const newGuess = incorrectGuesses;
      newGuess.push(word);
      setIncorrectGuesses(newGuess);
		}
	};

  return(
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Wrapper>
          <Board>
            <RandomTiles
              storeTiles={storeTiles} 
              letterArray={letterArray}
            />
            <FormContainer>
              <Form
                onChange={handleChange}
                handleSubmit={handleSubmit}
                handleFinish={handleFinish}
                value={userInput}
              />
              <GuessList
                userGuesses={userGuesses}
                correctGuesses={correctGuesses}
                incorrectGuesses={incorrectGuesses} 
                submitted={submitted}
              />
              <WinnerMessage
                correctGuesses={correctGuesses}
                incorrectGuesses={incorrectGuesses}
                submitted={submitted}
              />
            </FormContainer>
          </Board>
        </Wrapper>
      </main>
    </>
  );
};

export default App;
