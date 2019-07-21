import React, { Component } from 'react';

class Tracks extends Component {
	render() {
		return (
			<div className="trackList">
				<h3>Tracks</h3>
				<ul>
					{ this.props.tracks.map((track, index) => {
			      		return(
			        		<li key={index} className="searchResultList">
			          			{index+1}. {track.name}
			          			<span className="artistName">{track.artists[0].name}</span>
			        		</li>
			      		)
		    		})}
		    	</ul>
    		</div>
		)
	}
}

export default Tracks