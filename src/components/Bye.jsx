import React from 'react';

const Bye = (props) => {
  return (
    <div style={{ backgroundColor: 'rgba(0,0,0, 0.45)' }} className="modal-bg-bye">
      <div className="goodbye modal-blur">
        <div>Hey thanks for playing!</div>
        <div>Come by again tomorrow to beat your high score!</div>
      </div>
    </div>
  );
}

export default Bye;