import React from 'react';
import Link from 'next/link';

const InfoPage = () => {
  const imageUrl = `
    https://archives.bulbagarden.net/media/upload/9/94/0103Exeggutor-Alola.png
  `;

  return (
    <div>
      <h1>More about Exeggutor</h1>
      <Link href="./">
        <p>Back</p>
      </Link>
      <br />
      <p>This is the information page.</p>
      <img className="alolan" src={imageUrl} alt="alolanegg" />
    </div>
  );
};

export default InfoPage;
