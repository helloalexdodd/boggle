import React, { Component } from 'react';
import axios from 'axios';

class Api extends Component {
	constructor() {
		super()
		this.state = ({
			searchResults: []
		})
	}
	
	componentDidMount() {
		this.getInfo = () => {
			axios({
				method: `GET`,
				url: `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?`,
				dataResponse: `json`,
				params: {
					key: this.props.apiKey,
					lang: `en-en`,
					text: this.props.userSearch
				}
			}).then(results => {
				const searchResults = results.data.def[0].text
				this.setState({searchResults})
			})
		}
		this.getInfo()
	}

	render() {
		return(
			<>
			</>
		)
	}
}

export default Api;