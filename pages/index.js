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
      <h1 className="bg-green-500 p-8 px-20 rounded-md">Pokemon Info</h1>
      <h1>Exeggutor</h1>
      {pokemonData ? (
        <div className="bg-green-500 p-10 rounded-md">
          <p className="font-bold">Height: {pokemonData.height} Meters</p>
          <p className="font-bold">Weight: {pokemonData.weight} Kilograms</p>
          <br></br>
          <p className="font-bold">Abilities:</p>
          <ul>
            {pokemonData.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
          <br></br>
          <p className="font-bold">Sprites:</p>
          <Link href="/info">
            <a>
              <img
                className="sprite"
                src={pokemonData.sprites.front_default}
                alt="Exeggutor"
              />
            </a>
          </Link>
          <p className="font-bold">Click Image to see more!</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Exeggutor;
