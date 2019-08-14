import React, { Component } from 'react';

function Form(props) {
	return (
		<form action="">
			<div className="inputContainer">
				<label htmlFor="wordGuess">Submit a Word:</label>
				<input type="text" id="wordGuess" onChange={(e) => props.handleChange(e)} />
			</div>
			<input type="submit" value="Submit" onClick={(e) => props.onKeyPress(e)} />			
		</form>
	)
}

export default Form;