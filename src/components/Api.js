import React, { Component } from 'react';
import axios from 'axios';

class Api extends Component {
	constructor() {
		super()
		this.state = ({
			searchResult: ""
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
				const searchResult = results.data.def[0].text
				this.setState({ searchResult })
				console.log(this.state.searchResult)
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