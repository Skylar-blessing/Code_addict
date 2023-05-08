import React from 'react';

function BotDetails({ bot }) {
return (
<div>
<h2>{bot.title}</h2>
<p>{bot.description}</p>
<img src={bot.image_url} alt={bot.title} />
<ul>
<li>Price: ${bot.price}</li>
<li>IQ: {bot.iq}</li>
<li>Ability: {bot.ability}</li>
</ul>
</div>
);
}

export default BotDetails;