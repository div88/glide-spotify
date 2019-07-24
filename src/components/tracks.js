import React, { Component } from 'react';

class Tracks extends Component {
	render() {
		const tracks = this.props.tracks;
		return (
			<div className="trackList">
				{tracks && tracks.length > 0
					? (
						<div>
							<h3 className="text-center mt-5">Tracks</h3>
							<ul>
								{ this.props.tracks.map((track, index) => {
						      		return(
						        		<li key={index} className="searchResultList">
						          			{track.name}
						          			<span className="artistName text-muted">{track.artists[0].name}</span>
						        		</li>
						      		)
					    		})}
					    	</ul>
				    	</div>
					)
					: <div><h3>No Tracks Found</h3></div> 
				}
				
    		</div>
		)
	}
}

export default Tracks