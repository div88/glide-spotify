import React, { Component } from 'react';

class ArtistDetail extends Component {
	
	render() {
		const artist = this.props.location.state.artist;
		console.log(artist);
		return (
			<div className="artistDetail">
				<h3>Artist Details</h3>
				<ul>
					<li>{artist.name}</li>
					<li>{ artist.images.length !== 0 ? <img src={artist.images[0].url} alt={artist.name} /> : <img src='' alt='not found'/> }</li>
					<li>
						<a href={artist.external_urls.spotify}>To learn more about this artist, click here</a>
					</li>
				</ul>
				
    		</div>
		)
	}
}

export default ArtistDetail