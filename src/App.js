import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import RandomTiles from './components/RandomTiles';
import Form from './components/Form';
import './App.css';
import { setTimeout } from 'timers';

class App extends Component {
	constructor() {
		super();
		this.state = ({
			apiKey: `4dd7b3f8709dad9290faeddfd970a38b`,
			userInput: ``,
			userGuesses: [],
			searchResults: [],
			correctGuesses: [],
			incorrectGuesses: [],
			submitted: false
		});
	};

	getInfo = (word) => {
		const proxy = `https://cors-anywhere.herokuapp.com/`;
		const dictionaryURL = `https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${word}?strictMatch=false`;
		const apiId = `a332ce62`;
		const apiKey = `4dd7b3f8709dad9290faeddfd970a38b`;
		axios.get(`${proxy}${dictionaryURL}`, {
			dataResponse: `json`,
			headers: {
				"Accept": 'application/json',
				"app_id": apiId,
				"app_key": apiKey
			}
		}).then(results => {
			const result = results.data.id;
			const checkedTiles = this.checkTiles(result);
			this.handleGuesses(checkedTiles, result)
		});
	};

	handleChange = e => {
		this.setState({
			userInput: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const userInput = "";
		this.setState({ userInput });
		const lowerCaseInput = this.state.userInput.toLowerCase().toString();
		const userGuesses = this.state.userGuesses;
		userGuesses.push(lowerCaseInput);
		this.setState({ userGuesses });
	};

	handleFinish = e => {
		e.preventDefault();
		this.state.userGuesses.forEach(guess => {
			this.getInfo(guess);
		});
		if (this.state.userGuesses) {
			setTimeout(() => {
				this.setState({ submitted: true })
			}, 5000);
		};
	};

	storeTiles = (letterArray) => {
		this.setState({ letterArray });
	};

	checkTiles = (word) => {
		const letters = word.toUpperCase().split("");
		return letters.map(letter => {
			return this.state.letterArray.includes(letter);
		});
	};

	handleGuesses = (guessCheck, result) => {
		let correctGuesses = this.state.correctGuesses;
		let incorrectGuesses = this.state.incorrectGuesses;
		if (typeof (result) === `string`) {
			if (!guessCheck.includes(false)) {
				correctGuesses.push(result);
				this.setState({ correctGuesses });
			} else {
				incorrectGuesses.push(result)
				console.log(incorrectGuesses)
				this.setState({ incorrectGuesses });
			}
		};
	};

	render() {
		return(
			<>
				<Header />
				<main>
					<div className="wrapper">
						<div className="board">
							<div className="board-container inner-container">
								<RandomTiles storeTile={this.storeTiles} />
							</div>
							<div className="form-container inner-container">
								<Form
									onChange={this.handleChange}
									handleSubmit={this.handleSubmit}
									handleFinish={this.handleFinish}
									value={this.state.userInput}
									searchResults={this.state.searchResults}
								/>
								<ul>
								{	(!this.state.correctGuesses.length && !this.state.submitted) || (this.state.submitted && !this.state.userGuesses.length) ?
										
									this.state.userGuesses.map((letter, i) => {
									return <li key={i}>{this.state.userGuesses[i]}</li>}) :
									
									this.state.correctGuesses.map((letter, i) => {
										return <li key={i} className={`correct-guess`}>{this.state.correctGuesses[i]}</li>
									})
								}
								</ul>
								<ul>
									{(this.state.incorrectGuesses.length && this.state.submitted) ?

										this.state.incorrectGuesses.map((letter, i) => {
											return <li key={i} className={`incorrect-guess`}>{this.state.incorrectGuesses[i]}</li>
										}) :

										null
								}
								</ul>
								{ this.state.correctGuesses.length ?
									<p>Congratulations, you got {this.state.correctGuesses.length} right and {this.state.incorrectGuesses.length} wrong!</p> :
									null
								}
								{	this.state.submitted && !this.state.correctGuesses.length ?
									<p>Sorry, you didn't get any right guesses!</p> :
									null
								}
							</div>
						</div>
					</div>
				</main>
			</>
		);
	};
};

export default App;
