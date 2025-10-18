import React, { useState, useEffect } from 'react';

const songs = [
  {
    id: 1,
    title: 'Jo Tum (Sample)',
    artist: 'Anuv Jain',
    url : 'https://on.soundcloud.com/Qfg44I5vpQ9dGmvKOs ',
  },
  {
    id: 2,
    title: 'Nesamaguren (Sample)',
    artist: 'Stephen Zechariah, Saindhavi',
    url: '',
  },
  {
    id: 3,
    title: 'Saiyaara (Sample)',
    artist: 'Faheem Abdullah',
    url: ' ' },
];

function App() {
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    if (currentSong) {
      console.log(`Now playing: ${currentSong.title} by ${currentSong.artist}`);
    }
  }, [currentSong]);

  return (
    <div style={styles.container}>
      <h1>🎧 AMITH'S Music App</h1>
      <ul style={styles.songList}>
        {songs.map(song => (
          <li key={song.id} style={styles.songItem}>
            <span>{song.title} — {song.artist}</span>
            <button onClick={() => setCurrentSong(song)}>Play</button>
          </li>
        ))}
      </ul>

      {currentSong && (
        <div style={styles.nowPlaying}>
          <h2>Now Playing</h2>
          <p>{currentSong.title} by {currentSong.artist}</p>
          <audio controls autoPlay src={currentSong.url}>
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    padding: '2rem',
  },
  songList: {
    listStyle: 'none',
    padding: 0,
  },
  songItem: {
    margin: '1rem 0',
  },
  nowPlaying: {
    marginTop: '2rem',
    padding: '1rem',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
  },
};

export default App;
