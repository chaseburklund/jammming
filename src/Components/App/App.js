import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [{name: 'Tiny Dancer', artist: 'Elton John', album: 'Madman Across The Water', id: 1}, {name: 'Tiny Dancer', artist: 'Tim McGraw', album: 'Love Story', id: 2}],
      playlistName: 'New Playlist',
      playlistTracks: [{name: 'Stronger', artist: 'Britney Spears', album: 'Oops!... I Did It Again', id: 3}]
  };
  this.addTrack = this.addTrack.bind(this);
  this.removeTrack = this.removeTrack.bind(this);
  this.updatePlaylistName = this.updatePlaylistName.bind(this);
  this.savePlaylist = this.savePlaylist.bind(this);
  this.search = this.search.bind(this);
  }

  addTrack(track) {
    if (!this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      this.setState({ playlistTracks: [...this.state.playlistTracks, track]})
    }
  }

  removeTrack(track) {
    this.setState({ playlistTracks: [...this.state.playlistTracks.filter(savedTrack => savedTrack.id !== track.id)]})
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name});
  }

  savePlaylist() {
    const trackURIs = [];
    this.state.playlistTracks.map(track => trackURIs.push('spotify:track:' + track.id))
    return trackURIs;
  }

  search(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
            <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
              <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
              <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
