import SpotifyWebApi from "spotify-web-api-js";

export const myApp = (function() {
  let apiInstance = null;
  let init = function() {
    apiInstance = new SpotifyWebApi({
      clientId: "f538083582e248829c77e0d2ac17fc95",
      clientSecret: "3ab86fb20b9d40c8b7e1e6112f41d89e",
      redirectUri: "http://localhost:8001/callback",
    });
  };

  let getInstance = function() {
    if (apiInstance === null) {
      init();
    }
    return apiInstance;
  };

  let setInstanceToken = function(token) {
    if (apiInstance === null) {
      init();
    }
    apiInstance.setAccessToken(token);
  };

  return {
    getInstance: getInstance,
    setInstanceToken: setInstanceToken,
  };
})();

export default myApp;

export const searchArtists = (queryTerm) =>
  myApp
    .getInstance()
    .searchArtists(queryTerm, { limit: 10 })
    .then((data) => data.artists.items)
    .catch((err) => console.log(err));

export const searchTracks = (queryTerm) =>
  myApp
    .getInstance()
    .searchTracks(queryTerm, { limit: 5 })
    .then((data) => data.tracks.items)
    .catch((err) => console.log(err));

export const search = (queryTerm) =>
  myApp
    .getInstance()
    .search(queryTerm, { limit: 10 })
    .then((data) => data)
    .catch((err) => console.log(err));

// get an artist
export const getArtistDetail = (artist) =>
  myApp
    .getInstance()
    .getArtist(artist)
    .then((data) => data)
    .catch((err) => console.log(err));

export const getNewReleases = (artist) =>
  myApp
    .getInstance()
    .getNewReleases({ limit: 10 })
    .then((data) => data.albums.items)
    .catch((err) => err);

export const getFeaturedPlaylists = (artist) =>
  myApp
    .getInstance()
    .getFeaturedPlaylists({ limit: 10 })
    .then((data) => data.albums.items)
    .catch((err) => err);
