import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ army, onRemoveBot }) {
return (
<div>
<h2>Your Bot Army</h2>
{army.length === 0 ? (
<p>You haven't added any bots yet!</p>
) : (
army.map((bot) => (
<BotCard key={bot.id} bot={bot} buttonText="Remove" onButtonClick={() => onRemoveBot(bot.id)} />
))
)}
</div>
);
}

export default YourBotArmy;