import React, { useState, useEffect } from 'react';
import { fetchCharacters } from './services/api';
import './styles/App.css'; 
function App() {
  const [characters, setCharacters] = useState([]);


// Persisting votes in localStorage  
useEffect(() => {
  if (characters.length > 0) {
    localStorage.setItem('charactersVotes', JSON.stringify(characters));
  }
}, [characters]);

// Load votes from localStorage on initial render
useEffect(() => {
  const savedVotes = localStorage.getItem('charactersVotes');
  if (savedVotes) {
    setCharacters(JSON.parse(savedVotes));
  } else {
    fetchCharacters().then(data => setCharacters(data));
  }
}, []);

const handleVote = (id, value) => {
    setCharacters(characters.map(char => 
      char.id === id ? { ...char, score: (char.score || 0) + value } : char
    ));
  };  

  return (
   
    <div className="app">
      <h1>Rick and Morty Characters</h1>
      <div className="characters-grid">
        {characters.map((character) => (
          <div key={character.id} className="character-card">
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <div className="vote-buttons">
              <button onClick={() => handleVote(character.id, 1)}>👍 Like</button>
              <button onClick={() => handleVote(character.id, -1)}>👎 Dislike</button>
              <p>Score: {character.score || 0}</p>
            </div>
          </div>

        ))}
      </div>
    </div>

    
  );
}

export default App;
