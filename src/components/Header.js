import React from 'react';
import styled from 'styled-components';
import logo from './../images/logo.png';
import { Wrapper } from '../GlobalStyles.js';

const StyledHeader = styled.header`
	width: 70%;
	margin: 0 auto;

	h1 img {
		height: 100px;
	}

	p {
		margin: 0;
		font-size: 0.8rem;
	}

	p:nth-of-type(2) {
		margin: 10px;
		font-size: 1.6rem;	
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<Wrapper>
				<h1>
					<img src={logo} alt="Boggle Logo" />
				</h1>
				<p>The goal of Boggle is to find as many words as you can in the letters on the game board. Type them out and hit enter one at a time until you've found all you can. The more words the better!</p>
				<p>Good luck!</p>
			</Wrapper>
		</StyledHeader>
	)
}

export default Header;