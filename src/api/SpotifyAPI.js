import SpotifyWebApi from 'spotify-web-api-js';

const access_token='BQC3z_T2u8rFHOr_1YK6WYQjxr7OeJTSgFKl59X3xA0Wf-WdRGpU9zfCNhrcdwtuWYvld_WxUiwFCUaeITv3mZX_fCJlMRjV0Nt8uCQmkUlzvdOxxbfHwofwVpxkTNk59JPixZ8rfwHA9kJUmgrXVBARvWM4vkalf2trXnKhMbeepST8le1d'
// const refresh_token='AQDATRC2Zo5YiLy6E6Xtz7MONvi4zXN0FjH5-Rp9xm-EvxU2U-wH3FfEtwqMrZVvrnsXylElKKQRL2tQ1lttpe0Bfv5UXRZPFBLwBvgXrjXBaJ3u8c6jEqdPH29NewlrXInmMg'

const spotifyApi = new SpotifyWebApi({
  clientId: 'f538083582e248829c77e0d2ac17fc95',
  clientSecret: '3ab86fb20b9d40c8b7e1e6112f41d89e',
  redirectUri: 'http://localhost:8001/callback',
});

spotifyApi.setAccessToken(access_token);


export const getArtistAlbums = () => spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', {limit: 10, offset: 20})
  .then(function(data) {
    console.log('Album information', data);
  }, function(err) {
    console.error(err);
  });

export const searchArtists = (queryTerm) => spotifyApi.searchArtists(queryTerm, {limit: 10})
  .then(data =>  data.artists.items)
  .catch((err)=> console.log(err))

export const search = (queryTerm) => spotifyApi.search(queryTerm, {limit: 10})
  .then(data =>  data)
  .catch((err)=> console.log(err))


