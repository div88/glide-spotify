import SpotifyWebApi from 'spotify-web-api-js';

const access_token='BQAQ5gqUbkhuVTze8tIBUM3ZwcsJ5XRDEe9U5DOpFW4cfLC1spDGKnqkU08GVMCohr_1Q_0xaOfVnMNl2z3pTIisVrvkv52sJBuf026zNbUOyoPc0MSfNzF3d44NweRgS0MUJNzlYvJYOE25ZGuG4V4xhoyT9ulbyCHMO8hYk3LGCtDN0fh0'
// const refresh_token='AQAxFt3wayC_9tSBC1ABFpAaE161eg8WTP93T_qfj7R7ahf4tr2shn1FyEUuO0CRkXGZ5FKi85Acjq1cjuLwycKoYqA-3E0iRiYH4Yo_esqtfGNnzh_pcIXmP61yW71MBUZyIg'

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

// get an artist
export const getArtistDetail = (artist) => spotifyApi.getArtist(artist)
	.then(data => data)
	.catch((err)=> console.log(err))
