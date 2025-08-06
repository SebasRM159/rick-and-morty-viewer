import logo from './logo.svg';
import { fetchCharacters } from './services/api';
import './styles/App.css'; 
function App() {
  const [characters, setCharacters] = useState([]);

useEffect(() => {
    fetchCharacters().then(data => setCharacters(data));
  }, []);

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
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
