import React from 'react';

function BotCard({ bot, buttonText, onButtonClick }) {
return (
<div>
<h3>{bot.title}</h3>
<p>{bot.description}</p>
<img src={bot.image_url} alt={bot.title} />
<button onClick={onButtonClick}>{buttonText}</button>
</div>
);
}

export default BotCard;