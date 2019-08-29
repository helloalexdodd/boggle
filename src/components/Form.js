import React from 'react';

function Form(props) {
	return (
		<form action="">
			<div className="input-container">
				<label htmlFor="wordGuess">Submit a Word:</label>
				<input type="text" id="wordGuess" value={props.value} onChange={(e)=> props.onChange(e)} />
			</div>
			<div className="button-container">
				<input type="submit" value="Submit A Word" onClick={(e)=> props.handleSubmit(e)} />			
				<input type="button" value="Finish Turn" onClick={(e)=> props.handleFinish(e)}/>
			</div>
		</form>
	)
}

export default Form;