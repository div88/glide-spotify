import React, { Component } from "react";
import * as SpotifyAPI from "../api/SpotifyAPI.js";
import Artists from "./artists.js";
import Tracks from "./tracks.js";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      tracks: [],
      showSearchResult: false,
    };
  }

  handleSearch = (e) => {
    if (e) {
      this.handleArtists(e);
      this.handleTracks(e);
      // this.hsearch(e);
    } else {
      this.setState({ showSearchResult: false });
    }
  };

  handleArtists = (e) => {
    SpotifyAPI.searchArtists(e).then((artists) => {
      console.log(artists);
      if (typeof artists !== undefined && artists !== undefined) {
        this.setState({
          artists: artists,
          showSearchResult: true,
        });
      }
    });
  };

  handleTracks = (e) => {
    SpotifyAPI.searchTracks(e).then((tracks) => {
      if (typeof tracks !== undefined && tracks !== undefined) {
        tracks.sort((a, b) => (a.track_number > b.track_number ? 1 : -1));
        console.log(tracks);
        this.setState({
          tracks: tracks,
          showSearchResult: true,
        });
      }
    });
  };

  render() {
    return (
      <div className="mainContent">
        <h3 className="text-center">Search Spotify</h3>
        <input
          type="text"
          placeholder="Search here"
          className="searchInput"
          onChange={(event) => this.handleSearch(event.target.value)}
        />

        {this.state.showSearchResult &&
        (this.state.artists !== undefined ||
          this.state.tracks !== undefined) ? (
          <div>
            <Tracks tracks={this.state.tracks}></Tracks>
            <Artists artists={this.state.artists}></Artists>
          </div>
        ) : (
          <div className="d-flex justify-content-center mt-3">
            <p className="bd-lead font-weight-bold">
              Find your favorite artists and songs
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Search;
