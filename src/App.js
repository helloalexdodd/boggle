import React, { Component } from 'react';
import Api from './components/Api';
import Form from './components/Form';
import RandomTiles from './components/RandomTiles';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = ({
			apiKey: `dict.1.1.20190813T190050Z.e7074415bc131308.d9c5a371ca2c6999e65060fbc3019c50eda7ff00`,
			userInput: `foundational`,
			searchResult: ``
		});
	};

	handleChange = e => {
		this.setState({
			userInput: e.target.value
		});
	};

	handleClick = e => {
		e.preventDefault();

		const lowerCaseInput = this.state.userInput.toLowerCase();

		this.setState({
			searchResult: lowerCaseInput,
			userInput: ""
		});
	};
	
	render() {
		return(
			<div className="wrapper">
				<Api apiKey={this.state.apiKey} userSearch={this.state.userInput} searchResult={this.state.searchResult} />
				<RandomTiles />
				<Form handleChange={this.handleChange} onKeyPress={this.handleClick} />
				<p>{this.state.searchResult}</p>
			</div>
		);
	};
};

export default App;
