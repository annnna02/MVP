import React from 'react';

const BorderR = (props) => {
  const lightsOn = ['🔵', '🟡', '🟠', '🟣', '🟢', '⚪️', '🔵', '🟡', '🟠', '🟣', '🟢', '⚪️', '🔵', '🟡', '🟠', '🟣', '🟢', '⚪️', '🔵', '🟡', '🟠', '🟣', '🟢', '⚪️', '🔵', '🟡', '🟠', '🟣', '🟢', '⚪️'];
  return (
    <div className="lights-R">
      {lightsOn.map((light, i) => {
        return <div className={i % 2 === 0 ? "blinkOffR" : "blinkOnR"}>{light}</div>;
      })}
    </div>
  );
}

export default BorderR;