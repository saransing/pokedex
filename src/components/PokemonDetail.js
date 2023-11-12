import React, { useState, useEffect } from 'react';
import '../styles/PokemonDetail.css'; // Assume you have CSS for styling

const PokemonDetail = ({ pokemonId }) => {
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch pokemon details');
                }
                const details = await response.json();
                setPokemonDetails(details);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonDetails();
    }, [pokemonId]);

    if (loading) return <p>Loading details...</p>;
    if (error) return <p>Error fetching details: {error}</p>;
    if (!pokemonDetails) return null; // In case there are no details

    return (
        <div className="pokemon-detail">
            <h2>{pokemonDetails.name}</h2>
            <img
                src={pokemonDetails.sprites.front_default}
                alt={pokemonDetails.name}
            />
            <div className="pokemon-stats">
                {/* Map through the stats array */}
                {pokemonDetails.stats.map(stat => (
                    <div key={stat.stat.name}>
                        {stat.stat.name}: {stat.base_stat}
                    </div>
                ))}
            </div>
            {/* ... include other details you want to display */}
        </div>
    );
};

export default PokemonDetail;
