import React, { Component } from 'react';
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
	margin-top: 50px;
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

class App extends Component {
	constructor() {
		super();
		this.state = ({
			userInput: '',
			userGuesses: [],
			searchResults: [],
			correctGuesses: [],
			incorrectGuesses: [],
			submitted: false,
			wordResult: ''
		});
	};

	storeTiles = letterArray => this.setState({ letterArray });

	handleChange = e => this.setState({ userInput: e.target.value });

	handleSubmit = e => {
		e.preventDefault();
		if (!this.state.submitted && this.state.userInput) {
			const userInput = "";
			this.setState({ userInput });
			
			const lowerCaseInput = this.state.userInput.toLowerCase().toString();
			const userGuesses = this.state.userGuesses;
			userGuesses.push(lowerCaseInput);
			this.setState({ userGuesses });	
		}
	};
	
	handleFinish = e => {
		e.preventDefault();
		if (!this.state.submitted) {
			this.state.userGuesses.forEach(guess => {
				this.getInfo(guess)
			});
			if (this.state.userGuesses) {
				setTimeout(() => {
					this.setState({ submitted: true })
				}, 5000);
			};	
		}
	};

	async getInfo(word) {
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
			const checkedTiles = this.checkTiles(result);
			this.handleGuesses(checkedTiles, result);
		}, err => {
			this.handleGuesses(err, word)
		});
	};

	checkTiles = (word) => {
		const letters = word.toUpperCase().split("");
		return letters.map(letter => this.state.letterArray.includes(letter));
	};

	handleGuesses = (checkedTiles, word) => {
		if (Array.isArray(checkedTiles) && typeof word === 'string') {
			if (!checkedTiles.includes(false)) {
				const guess = this.state.correctGuesses;
				guess.push(word);
				this.setState({ correctGuesses: guess });
			}
		} else {
			const guess = this.state.incorrectGuesses;
			guess.push(word);
			this.setState({ incorrectGuesses: guess });
		}
	};

	render() {
		return(
			<>
				<GlobalStyle />
				<Header />
				<main>
					<Wrapper>
						<Board>
							<RandomTiles storeTile={this.storeTiles} />
							<FormContainer>
								<Form
									onChange={this.handleChange}
									handleSubmit={this.handleSubmit}
									handleFinish={this.handleFinish}
									value={this.state.userInput}
									searchResults={this.state.searchResults}
								/>
								<GuessList
									userGuesses={this.state.userGuesses}
									correctGuesses={this.state.correctGuesses}
									incorrectGuesses={this.state.incorrectGuesses} 
									submitted={this.state.submitted}
								/>
								<WinnerMessage
									correctGuesses={this.state.correctGuesses}
									incorrectGuesses={this.state.incorrectGuesses}
									submitted={this.state.submitted}
								/>
							</FormContainer>
						</Board>
					</Wrapper>
				</main>
			</>
		);
	};
};

export default App;
