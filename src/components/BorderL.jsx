import React from 'react';

const BorderL = (props) => {
  const lightsOn = ['🔵', '🟡', '🟠', '🟣', '🟢', '⚪️', '🔵', '🟡', '🟠', '🟣', '🟢', '⚪️', '🔵', '🟡', '🟠', '🟣', '🟢', '⚪️', '🔵', '🟡', '🟠', '🟣', '🟢', '⚪️', '🔵', '🟡', '🟠', '🟣', '🟢', '⚪️'];
  // const lightsOn = ['🔵', '⚪️', '🟡', '🟣', '🔵', '⚪️', '🟡', '🟣', '🔵', '⚪️', '🟡', '🟣', '🔵', '⚪️', '🟡', '🟣', '🔵', '⚪️', '🟡', '🟣', '🔵', '⚪️', '🟡', '🟣', '🔵', '⚪️', '🟡', '🟣', '🔵', '⚪️', '🟡', '🟣'];

  return (
    <div className="lights-L">
      {lightsOn.map((light, i) => {
        return <div className={i % 2 === 0 ? "blinkOffL" : "blinkOnL"}>{light}</div>;
      })}
    </div>
  );
}

export default BorderL;