import logo from './logo.svg';
import './App.css';
import MusicList from "./components/MusicList";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <MusicList></MusicList>
      </header>
    </div>
  );
}

export default App;
