export const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectUri = 'http://localhost:3000/';

const clientId = 'bec32dc02b7e42d4ab87583c5a67d3ad';

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

export const getTokenFromUrl = () => window.location.hash
  .substring(1)
  .split('&')
  .reduce((initial, item) => {
    const parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1]);

    return initial;
  }, {});

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
