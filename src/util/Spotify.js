var client_id = 'ac02f0e6ddd648388883e00b481044f7';
var redirect_uri = 'http://localhost:3000/';
let accessToken = '';

const Spotify = {
    
    getAccessToken() {
        if(accessToken !== null) {
            return accessToken;
        }
        const url = window.location.href;
        if (url.match('/access_token=([^&]*)/') && url.match('/expires_in=([^&]*)/')){
            accessToken = url.match('/access_token=([^&]*)/');
            const expiresIn = url.match('/expires_in=([^&]*)/');
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
        }
        if (accessToken === '') {
            accessToken = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_uri}`;
        }
        return accessToken;
    },

    search(term) {
            fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
            {
                headers: {Authorization: `Bearer ${accessToken}`}
            })
            .then(
                response => {
                    if(response.ok) {
                        return response.json().map(track => track);
                    }
                    throw new Error('Request failed!');
                }
            )
        
    },

    savePlaylist(playlistName, trackURI) {
        let userToken = accessToken;
        const headers = {Authorization: `${accessToken}`};
        let userID;

        fetch()
    }

};

export default Spotify;