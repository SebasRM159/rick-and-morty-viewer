const Card = ({ character }) => {
    const [score, setScore] = useState(0);
  return (
  <div className="character-card">
    <img src={character.image} alt={character.name} className="character-image"/>
    <div className="character-info">
        <h3 className="character-name">{character.name}</h3>
        <p className={`character-status status-${character.status.toLowerCase()}`} >Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <button className="vote-button like-button" onClick={() => setScore(score + 1)}>Like</button>
        <button  className="vote-button dislike-button" onClick={() => setScore(score - 1)}>Dislike</button>
        <p className="score">Puntaje: {score}</p>
    </div>    
  </div>
  ) 
  
};


