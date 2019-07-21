import SpotifyWebApi from 'spotify-web-api-js';

const access_token='BQAeS-rz9fxZ4KihrgT4g2Fz_PcTSoVt37S6KDDYd5tmupa1mAGp0i78xPfRDgUXShwFPDUmyPNJgd5E-lbm9cOxPZBM40CZ3TXMXRy5UK2PTrsA1q22CsVX0S1ehzFM2A4MT0KK2H_ahnYqiLqwo9ASGx3WXKMHpdU-tW1cEf8SueAPGQqY'
// const refresh_token='AQAkjwuncVrE_Vs9x-8JuRMQx7PhoQ-lTcfDkekmTHRi5jwQUlTIjxlbMFaSvpgNUUoCHpQMQ_aCMlsrvmV_sUZYHVTFKPb8xkajIW1xq7SrUF8n9mx4DZM8JOAXcDjdWFnoZA'


// AQCM3Pr4tqlKLSXYdXhhLeeWXlJG3jRod1Y8-ojUVGvtg5ND5AgliCa5TZFB7_ObxmkFhtvr4fO36FOQkE27qQjtVbNcgUiVz4hYvAXWhhW7aIbi0u1j42eOXYZuSz1SyFlHfQ

const spotifyApi = new SpotifyWebApi({
  clientId: 'f538083582e248829c77e0d2ac17fc95',
  clientSecret: '3ab86fb20b9d40c8b7e1e6112f41d89e',
  redirectUri: 'http://localhost:8001/callback',
});

spotifyApi.setAccessToken(access_token);

export const searchArtists = (queryTerm) => spotifyApi.searchArtists(queryTerm, {limit: 10})
  .then(data =>  data.artists.items)
  .catch((err)=> console.log(err))

export const searchTracks = (queryTerm) => spotifyApi.searchTracks(queryTerm, {limit: 10})
  .then(data =>  data.tracks.items)
  .catch((err)=> console.log(err))

export const search = (queryTerm) => spotifyApi.search(queryTerm, {limit: 10})
  .then(data =>  data)
  .catch((err)=> console.log(err))


