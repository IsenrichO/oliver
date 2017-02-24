'use strict';
import React, { Component } from 'react';


export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		};
	}

	handleChange(evt) {
		let term = evt.target.value;
		this.setState({ term });
	}

	render() {
		return (
			<div className="inpt-container">
				<input
					type="text"
					id="search-inpt"
					defaultValue={ this.state.term }
					placeholder="Search" />
			</div>
		);
	}
};
