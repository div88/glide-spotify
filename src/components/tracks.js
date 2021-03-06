import React, { Component } from "react";
import musicNote from "../assets/music.png";

class Tracks extends Component {
  render() {
    const tracks = this.props.tracks;
    return (
      <div className="trackList">
        {tracks && tracks.length > 0 ? (
          <div>
            <h3 className="text-center mt-5">Tracks</h3>
            <ul>
              {this.props.tracks.map((track, index) => {
                return (
                  <li key={index} className="searchResultList">
                    <img
                      src={musicNote}
                      className="musicIcon"
                      alt="musicIcon"
                    />
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={track.external_urls.spotify}
                      className="trackLink"
                    >
                      <span className="trackName">
                        {track.name}
                        <span className="artistName text-muted">
                          {track.artists[0].name}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div>
            <h3>No Tracks Found</h3>
          </div>
        )}
      </div>
    );
  }
}

export default Tracks;
