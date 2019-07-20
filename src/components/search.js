import React, { Component } from 'react';

class Search extends Component {

	componentDidMount() {
		
	}

	handleSearch = (e) => {
		console.log(e);
	}


	render() {
		return (
			<div className="mainContent">
	            <h2>Search Spotify</h2>
	            <input type="text" placeholder="Search here" className="searchInput" onChange={(event) => this.handleSearch(event.target.value)}/>
	            <p>Find your favorite artists and songs</p>
	        </div>
		)
	}
}

export default Search