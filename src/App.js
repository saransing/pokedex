import './App.css';
import NavBar from './components/NavBar';
import About from './components/AboutPage';

import PokemonList from './components/PokemonList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonDetail from './components/PokemonDetail';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon/:pokemonId" element={<PokemonDetail />} />
          <Route path="/about" element={<About />} /> {/* */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
