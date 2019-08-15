import React, { Component } from 'react';

class RandomTiles extends Component {
	constructor() {
		super()
		this.state = ({
			letterArray: []
		})
	}

	dice = () => {
		return [
			['R', 'I', 'F', 'O', 'B', 'X'],
			['I', 'F', 'E', 'H', 'E', 'Y'],
			['D', 'E', 'N', 'O', 'W', 'S'],
			['U', 'T', 'O', 'K', 'N', 'D'],
			['H', 'M', 'S', 'R', 'A', 'O'],
			['L', 'U', 'P', 'E', 'T', 'S'],
			['A', 'C', 'I', 'T', 'O', 'A'],
			['Y', 'L', 'G', 'K', 'U', 'E'],
			['Qu', 'B', 'M', 'J', 'O', 'A'],
			['E', 'H', 'I', 'S', 'P', 'N'],
			['V', 'E', 'T', 'I', 'G', 'N'],
			['B', 'A', 'L', 'I', 'Y', 'T'],
			['E', 'Z', 'A', 'V', 'N', 'D'],
			['R', 'A', 'L', 'E', 'S', 'C'],
			['U', 'W', 'I', 'L', 'R', 'G'],
			['P', 'A', 'C', 'E', 'M', 'D']
		];
	}

	randomLetter = () => {
		const diceRoll = this.dice().map(die => {
				const randomNumber = Math.floor(Math.random() * die.length);
				return die[randomNumber]
		});

		const letterArray = diceRoll.map((letter, i) => diceRoll[i])

		this.setState({ letterArray }) 
	};

	componentDidMount() {
		this.randomLetter();
	}

	render() {
		return (
			<div className="game-board">
				{this.state.letterArray.map((letter, i) => {
					return <div key={i}>{this.state.letterArray[i]}</div>
				})}
			</div>
		);
	};
};

export default RandomTiles;