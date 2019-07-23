import React, { Component } from 'react';
import * as SpotifyAPI from '../api/SpotifyAPI.js';
// import spotifyApi from '../api/SpotifyAPI.js';
import myApp from '../api/SpotifyAPI.js';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newReleases: [],
			tracks: [],
			showSearchResult: false,
			authToken: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		SpotifyAPI.getNewReleases().then((newReleases) => {
			if(typeof newReleases !== undefined && newReleases !== undefined) {
				this.setState({ 
		            newReleases: newReleases
		        })
			} else {
				console.log(newReleases)
			}
		})
	}

	handleSubmit(e){
    	e.preventDefault();
    	let token = this.input.value;
    	console.log(token);

      	this.setState({authToken: e.target.value})
      	myApp.setInstanceToken(token);
 
		this.getNewReleases();
    }

    getNewReleases() {
    	SpotifyAPI.getNewReleases().then((newReleases) => {
			if(typeof newReleases !== undefined && newReleases !== undefined) {
				this.setState({ 
		            newReleases: newReleases
		        })
			} else {
				console.log(newReleases)
			}
		})
    }
    

    // BQA2rTyoVbneV9yI-Ip7IanfAZn8ZaTYaB_AN8gtqcneOHKsxjyoPjaIoff6MDGGEDpzIL7kFfbuWr8QOYW9Ebc2_owTESll0qYy1dhEZjd-wEPQVzpo1hpIpmCS8m_lkvB2Aspfxw3rFmpuZvnRcFCUwf2Z0StIwugaLdrB8EVk4MvzrabN

    renderNewReleases() {
    	return ( 
    		<div>
				<h3>New Releases</h3>
			    	{this.state.newReleases.map((item, index) => {
			      		return (
			      			<div>
				      			<li className="releaseItem col-md-1" key={index}>
								    <a href={item.external_urls.spotify} className="btn">
										<figure>
					        				{ item.images.length !== 0 ? <img src={item.images[0].url} alt={item.name} /> : <img src='' alt='not found'/> }
					        				<figcaption className="col-md-12">
					          					{item.name}
					        				</figcaption>
					    				</figure>
				    				</a>
								</li>
								
							</div>
			      		)
					})}
			</div> 
		)
    }

    renderTokenForm() {
    	return (
    		<div>
				<form onSubmit={this.handleSubmit}>
				  <div className="form-group">
				    <label>Please enter a valid Auth token</label>
				    <input type="text" className="form-control" placeholder="Auth Token"  ref={(input) => this.input = input}/>
				  </div>
				  <input type="submit" className="btn btn-primary" text="Submit" />
				</form>
			</div>
      	)
    }
    

	render() {
		return (
			<div className="mainContent">
				    { this.state.newReleases.status === 401 ?
				    	this.renderTokenForm() :
				    	this.renderNewReleases() }
	        </div>
		)
	}
}

export default Home