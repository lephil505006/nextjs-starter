import React, { useState, useEffect } from 'react';

const Exeggutor = () => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'https://pokeapi.co/api/v2/pokemon/exeggutor';
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Exeggutor Pokemon Details</h1>
      {pokemonData ? (
        <div>
          <p>Name: {pokemonData.name}</p>
          <p>Height: {pokemonData.height}</p>
          <p>Weight: {pokemonData.weight}</p>
          <p>Abilities:</p>
          <ul>
            {pokemonData.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
          <p>Sprites:</p>
          <img src={pokemonData.sprites.front_default} alt="Exeggutor" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Exeggutor;
