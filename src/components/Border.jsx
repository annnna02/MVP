import React from 'react';

const Border = () => {
  const lightsOn = ['🔵', '🟡', '🟠', '🟣', '🟢', '⚪️', '🔵', '🟡', '🟠', '🟣', '🟢', '⚪️', '🔵', '🟡', '🟠', '🟣', '🟢', '⚪️', '🔵', '🟡', '🟠', '🟣', '🟢', '⚪️', '🔵', '🟡', '🟠', '🟣', '🟢', '⚪️'];
  return (
    <div>
      {lightsOn.map((light, i) => {
        return <div className={i % 2 === 0? "blinkOff" : "blinkOn"}>{light}</div>;
      })}
    </div>
  );
}

export default Border;