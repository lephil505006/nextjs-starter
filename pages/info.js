import React from 'react';
import Link from 'next/link';

const InfoPage = () => {
  return (
    <div>
      <h1>More about Exeggutor</h1>
      <Link href="./">
          <p>Back</p>
      </Link>
      <br></br>
      <p>This is the information page.</p>
      <img className="alolan" src={'https://archives.bulbagarden.net/media/upload/9/94/0103Exeggutor-Alola.png'}/>
    </div>
  );
};

export default InfoPage;