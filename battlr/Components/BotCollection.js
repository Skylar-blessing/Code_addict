import React from 'react';

function BotCollection({ bots }) {
  return (
    <div>
      <h2>Bots</h2>
      {bots.map((bot) => (
        <div key={bot.id}>
          <h3>{bot.title}</h3>
          <p>{bot.description}</p>
        </div>
      ))}
    </div>
  );
}

export default BotCollection;
