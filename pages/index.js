import React, { useState, useEffect } from 'react';
import Link from 'next/link';

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
    <div className="pokemonCard">
      <h1>Pokemon Info</h1>
      <h1>Exeggutor</h1>
      {pokemonData ? (
        <div>
          <p className="font-bold">Height: {pokemonData.height} Meters</p>
          <p className="font-bold">Weight: {pokemonData.weight} Kilograms</p>
          <br></br>
          <p>Abilities:</p>
          <ul>
            {pokemonData.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
          <br></br>
          <p>Sprites:</p>
          <Link href="/info">
            <a>
              <img
                className="sprite"
                src={pokemonData.sprites.front_default}
                alt="Exeggutor"
              />
            </a>
          </Link>
          <p>Click Image to see more!</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Exeggutor;
