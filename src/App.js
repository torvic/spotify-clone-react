/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './components/Login';
import { getTokenFromUrl } from './components/spotify';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log('🚀 ~ file: App.js ~ line 26 ~ spotify.getMe ~ user', user);
      });
    }
  }, []);

  return (
    <div className="">
      {token ? (<h1>I am logged in</h1>) : <Login />}
    </div>
  );
}

export default App;
