import React from 'react';
import logo from './../images/logo.png';

function Header() {

	return(
		<header>
			<div className="wrapper">
				<h1>
					<img src={logo} alt="Boggle Logo"/>
				</h1>
				<p>The goal of Snoggle is to find as many words as you can in the letters on the game board. Type them out and hit enter one at a time until you've found all you can. The more words the better!</p>
				<p>Good luck!</p>
			</div>
		</header>
	)
}

export default Header;