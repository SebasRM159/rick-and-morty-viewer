const Card = ({ character }) => {
    const [score, setScore] = useState(0);
  return (<div>
    <img src={character.image} alt={character.name} />
    <h3>{character.name}</h3>
    <p>Status: {character.status}</p>
    <button onClick={() => setScore(score + 1)}>Like</button>
    <button onClick={() => setScore(score - 1)}>Dislike</button>
    <p>Puntaje: {score}</p>
  </div>
  ) 
  
};


