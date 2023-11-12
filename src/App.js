import './App.css';
import PokemonList from './components/PokemonList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonDetail from './components/PokemonDetail';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon/:pokemonId" element={<PokemonDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
