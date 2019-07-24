import React, { Component } from 'react';

class ArtistDetail extends Component {
	
	render() {
		const artist = this.props.location.state.artist;
		return (
			<div className="artistDetail">
				<h3 className="text-center pb-4">{artist.name}</h3>
				<figure className="col-md-12 text-center">
    				{ artist.images.length !== 0 ? <img src={artist.images[0].url} alt={artist.name} /> : <img src='' alt='not found'/> }
    				<figcaption >
      					<h4 className="pt-3 pb-3"><a href={artist.external_urls.spotify}>To learn more about this artist, click here</a></h4>
    				</figcaption>
				</figure>
				<ul>
					
					
				</ul>
				
    		</div>
		)
	}
}

export default ArtistDetail