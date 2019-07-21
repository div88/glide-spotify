import React, { Component } from 'react';
import * as SpotifyAPI from '../api/SpotifyAPI.js';
import Artists from './artists.js'
import Tracks from './tracks.js'

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			artists: [],
			tracks: [],
			showSearchResult: false
		}
	}
	handleSearch = (e) => {
		if(e) {
			this.handleArtists(e);
			this.handleTracks(e);
			// this.hsearch(e);
		} else {
			this.setState({ showSearchResult: false })
		}
	}

	handleArtists = (e) => {
		SpotifyAPI.searchArtists(e).then((artists) => {
			console.log(artists);
			if(typeof artists !== undefined) {
				this.setState({ 
		            artists: artists,
		            showSearchResult: true
		        })
			} 
		})
	}

	handleTracks = (e) => {
		SpotifyAPI.searchTracks(e).then((tracks) => {
			
			if(typeof tracks !== undefined) {
				tracks.sort((a, b) => (a.track_number > b.track_number) ? 1 : -1)
				console.log(tracks) 
				this.setState({ 
		            tracks: tracks,
		            showSearchResult: true
		        })
			} 
		})
	}

	render() {
		return (
			<div className="mainContent">
	            <h2>Search Spotify</h2>
	            <input type="text" placeholder="Search here" className="searchInput" onChange={(event) => this.handleSearch(event.target.value)}/>

	             {(this.state.showSearchResult && (typeof this.state.artists !== undefined || typeof this.state.tracks !== undefined)) ?  
	             		<div>
	             			<Tracks tracks={this.state.tracks}></Tracks>	
	             			<Artists artists={this.state.artists}></Artists>	
	             		</div>
	             		
	             	: 
                	<p>Find your favorite artists and songs</p> 
                }
		            
	        </div>
		)
	}
}

export default Search