import React from 'react';
import Link from 'next/link';

const InfoPage = () => {
  const imageUrl = `
    https://archives.bulbagarden.net/media/upload/9/94/0103Exeggutor-Alola.png
  `;

  return (
    <div className="info-container">
      <div className="info-text">
        <h1 className="bg-green-500 p-8 px-20 rounded-md">
          More about Exeggutor
        </h1>
        <p>
          This pokemon is considered a &quot;Grass&quot; and &quot;Psychic&quot;
        </p>
        <p>
          However, this pokemon has a 2nd version which is the alolan verison
        </p>
        <p>
          Which makes the Exeggutor a &quot;Grass&quot; and &quot;Dragon&quot;
          pokemon instead.
        </p>
        <br />
        <p>The data retrieved for Exeggutor was from PokeAPI</p>
        <a className="back font-bold" href="https://pokeapi.co/">
          Go to PokeAPI.com
        </a>
        <Link href="./">
          <p className="back font-bold rounded-md bg-red-500">Main Page</p>
        </Link>
      </div>
      <div>
        <img className="alolan" src={imageUrl} alt="alolanegg" />
        <p className="text-center">Alolan Version</p>
      </div>
    </div>
  );
};

export default InfoPage;
