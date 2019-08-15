import React, { Component } from 'react';
import Api from './components/Api';
import Header from './components/Header';
import Form from './components/Form';
import RandomTiles from './components/RandomTiles';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = ({
			apiKey: `dict.1.1.20190813T190050Z.e7074415bc131308.d9c5a371ca2c6999e65060fbc3019c50eda7ff00`,
			userInput: ``,
			searchResults: []
		});
	};

	handleChange = e => {
		this.setState({
			userInput: e.target.value
		});
	};

	handleClick = e => {
		e.preventDefault();
		this.setState({
			userInput: "",
		});

		const lowerCaseInput = this.state.userInput.toLowerCase().toString();
		const searchResults = this.state.searchResults
		searchResults.push(lowerCaseInput)
		this.setState({searchResults});
	};
	
	render() {
		return(
			<div className="wrapper">
				<Api apiKey={this.state.apiKey} userSearch={this.state.userInput} searchResult={this.state.searchResult} />
				<Header />
				<RandomTiles />
				<Form handleChange={this.handleChange} onKeyPress={this.handleClick} />
				<ul>
					{this.state.searchResults.map((letter, i) => {
						return <li key={i}>{this.state.searchResults[i]}</li>
					})}
				</ul>
			</div>
		);
	};
};

export default App;
