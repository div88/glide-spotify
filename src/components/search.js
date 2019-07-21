import React, { Component } from 'react';
import * as SpotifyAPI from '../api/SpotifyAPI.js';
import { Link } from 'react-router-dom';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			artists: [],
			showSearchResult: false
		}
	}
	handleSearch = (e) => {
		e ? SpotifyAPI.searchArtists(e).then((artists) => {
			console.log(artists)
			if(typeof artists !== undefined) {
				this.setState({ 
		            artists: artists,
		            showSearchResult: true
		        })
			} 
		}) : this.setState({ showSearchResult: false })
	}

	render() {
		return (
			<div className="mainContent">
	            <h2>Search Spotify</h2>
	            <input type="text" placeholder="Search here" className="searchInput" onChange={(event) => this.handleSearch(event.target.value)}/>

	             {(this.state.showSearchResult && typeof this.state.artists !== undefined) ?  
	             	this.state.artists.map((artist, index) => {
                  		return(
                    		<li key={index} className="searchResultList">
                      			<figure>
                    				{ artist.images.length !== 0 ? <img src={artist.images[0].url} alt={artist.name} /> : <img src='' alt='not found'/> }
                    				<figcaption>
                      					<Link to={artist.external_urls.spotify}>{artist.name}</Link>
                    				</figcaption>
                				</figure>
                    		</li>
                  		)
                	}) : 
                	<p>Find your favorite artists and songs</p> 
                }
		            
	        </div>
		)
	}
}

export default Search