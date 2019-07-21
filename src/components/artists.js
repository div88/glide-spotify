import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Artists extends Component {

	render() {
		return (
			<div className="artistList">
			<h3>Artists</h3>
			{ this.props.artists.map((artist, index) => {
	      		return(
	        		<li key={index} className="searchResultList">
	          			<figure>
	        				{ artist.images.length !== 0 ? <img src={artist.images[0].url} alt={artist.name} /> : <img src='' alt='not found'/> }
	        				<figcaption>
	          					<Link to={{ pathname: '/artists/'+artist.id, state: {artist: artist}}}>{artist.name}</Link>
	        				</figcaption>
	    				</figure>
	        		</li>
	      		)
    		})}

    		</div>
		)
	}
}

export default Artists