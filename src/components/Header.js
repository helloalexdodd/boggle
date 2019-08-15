import React from 'react';
import logo from './../images/logo.png';

function Header() {

	return(
		<header>
			<h1>
				<img src={logo} alt="Boggle Logo"/>
			</h1>
		</header>
	)
}

export default Header;