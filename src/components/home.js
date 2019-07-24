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
    

   	// BQA06-ZTGIGbjW8u1-winG5wcHWcQ58xaxOeRPWQtyqOa_WT_Xbh_0AEInFy9wUEAl-W2NmsiI2I7r8eGSOqrg-VX6acBP1L3F7crdx3KEm2a6WtqjeQxw9mbNC0xU-ZRjNhzPpP2f222rz-YCs2G-bcTvSDb4QLIZ30IjDBJjf8TlseHkfH

    renderNewReleases() {
    	return ( 
    		<div>
				<h3 className="text-center">New Releases</h3>
					<ul className='justify-content-center'>
				    	{this.state.newReleases.map((item, index) => {
				      		return (
				      			<li className="releaseItem" key={index}>
								    <a href={item.external_urls.spotify} className="btn">
										<figure>
					        				{ item.images.length !== 0 ? <img src={item.images[0].url} alt={item.name} /> : <img src='' alt='not found'/> }
					        				<figcaption className="col-md-12">
					          					{item.name}
					        				</figcaption>
					    				</figure>
				    				</a>
								</li>
				      		)
						})}
					</ul>
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