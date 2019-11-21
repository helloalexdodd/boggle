import React, { useEffect } from 'react';
import styled from 'styled-components';

const GameBoard = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	background-color: #398bd4;
	width: 600px;
	height: 600px;
	margin: 0 50px 30px;
	border: 5px solid #464655;
	border-radius: 10px;
	box-shadow: -4px 4px 1px black;
`;

const Letter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #accecc;
	width: calc(25% - 20px);
	height: calc(25% - 20px);
	margin: 10px;
	padding: 10px;
	border-radius: 10px;
	font-size: 3.5rem;
`;

const RandomTiles = props => {
	const dice = () => {
		return [
			['R', 'I', 'F', 'O', 'B', 'X'],
			['I', 'F', 'E', 'H', 'E', 'Y'],
			['D', 'E', 'N', 'O', 'W', 'S'],
			['U', 'T', 'O', 'K', 'N', 'D'],
			['H', 'M', 'S', 'R', 'A', 'O'],
			['L', 'U', 'P', 'E', 'T', 'S'],
			['A', 'C', 'I', 'T', 'O', 'A'],
			['Y', 'L', 'G', 'K', 'U', 'E'],
			['Y', 'B', 'M', 'J', 'O', 'A'],
			['E', 'H', 'I', 'S', 'P', 'N'],
			['V', 'E', 'T', 'I', 'G', 'N'],
			['B', 'A', 'L', 'I', 'Y', 'T'],
			['E', 'Z', 'A', 'V', 'N', 'D'],
			['R', 'A', 'L', 'E', 'S', 'C'],
			['U', 'W', 'I', 'L', 'R', 'G'],
			['P', 'A', 'C', 'E', 'M', 'D']
		];
	}

	const randomLetter = () => {
		const diceRoll = dice().map(die => {
				const randomNumber = Math.floor(Math.random() * die.length);
				return die[randomNumber]
		});
		const letterArray = diceRoll.map((letter, i) => diceRoll[i])
		props.storeTiles(letterArray);
	};

	useEffect(() => {
		randomLetter();
	}, []);

	return (
		<GameBoard>
			{props.letterArray.map((letter, i) => <Letter key={i}>{props.letterArray[i]}</Letter>)}
		</GameBoard>
	);
};

export default RandomTiles;