import React, { useState, useEffect } from 'react';
import { fetchCharacters } from './services/api';
import './styles/App.css'; 
import Filter from './components/Filter';
import { Card } from './components/Card';

function App() {
  const [characters, setCharacters] = useState([]);

  // Filter characters based on input
  const [filter, setFilter] = useState('');  
  const filteredCharacters = characters.filter(character =>
  character.name.toLowerCase().includes(filter.toLowerCase())
  );
  
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

// Function to handle voting
const handleVote = (id, value) => {
    setCharacters(characters.map(char => 
      char.id === id ? { ...char, score: (char.score || 0) + value } : char
    ));
  };  



  return (
   
    <div className="app">
      <h1>Rick and Morty Characters</h1>
      <Filter onFilter={setFilter}/>
      <div className="characters-grid">
        {filteredCharacters.map((character) => (
          <Card 
            key={character.id} 
            character={character} 
            onVote={handleVote}
          />
        ))}
      </div>
    </div>

    
  );
}

export default App;
