import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
	text-align: center;
`;

export const ButtonContainer = styled.div`
	display: flex;
`;

const Label = styled.label`
	margin: 20px;
	padding: 7px;
	border: none;
`;

const Input = styled.input`
	margin: 20px;
	padding: 7px;
	border: none;
	width: 50%;
	box-shadow: -2px 2px black;	
`;

const Form = props => {
	return (
		<StyledForm>
			<div>
				<Label htmlFor="wordGuess">Submit a Word:</Label>
				<Input type="text" id="wordGuess" value={props.value} onChange={e => props.onChange(e)} />
			</div>
			<ButtonContainer>
				<Input type="submit" value="Submit A Word" onClick={e => props.handleSubmit(e)} />			
				<Input type="button" value="Finish Turn" onClick={e => props.handleFinish(e)}/>
			</ButtonContainer>
		</StyledForm>
	)
}

export default Form;