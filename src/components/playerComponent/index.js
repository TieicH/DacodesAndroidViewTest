import React from 'react';
import './index.scss';

const playerComponent = (props) => {
  const { player, clicked } = props;
  return (
    <div className="playerComponentContainer" onClick={clicked}>
      <div className="playerImg">
        <img src={player.image}></img>
      </div>
      <p className="playerRole">{player.position ? player.position : player.role}</p>
      <p className="playerName">
        {player.name} {player.first_surname}
      </p>
    </div>
  );
};

export default playerComponent;
