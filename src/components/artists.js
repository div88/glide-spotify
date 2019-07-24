import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import noArtistImg from '../assets/user.png'

class Artists extends Component {

	render() {
		return (
			<div className="artistList">
			<h3 className="text-center mt-3 mb-3">Artists</h3>
			{ this.props.artists.map((artist, index) => {
	      		return(
	        		<li key={index} className="artistListItem justify-content-center">
	          			<figure>
	        				{ artist.images.length !== 0 ? <img src={artist.images[0].url} alt={artist.name} /> : <img src={noArtistImg} alt='no artist' /> }
	        				<figcaption className="col-md-12">
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

// <div>Icons made by <a href="https://www.flaticon.com/authors/chanut" title="Chanut">Chanut</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

// <div>Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>