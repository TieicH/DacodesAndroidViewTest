import React from 'react';
import './index.scss';

const playerModalInfo = (props) => {
  const { player, clicked, show } = props;
  let playerModal = '';
  if (show) {
    playerModal = (
      <div className="playerModalContainer" onClick={clicked}>
        <div className="playerModalHeader">
          <h2 className="playerModalTitle">FICHA TÉCNICA</h2>
          <div className="playerModalImg">
            <img src={player.image}></img>
          </div>
          <p className="playerName">
            {player.name} {player.first_surname} {player.second_surname}
          </p>
          <p className="playerRole">{player.position ? player.position : player.role}</p>
        </div>
        <div className="playerModalContent">
          <div className="playeModalInfoItem">
            <h2 className="playerModalTitle">FECHA DE NACIMIENTO</h2>
            <p>{player.birthday}</p>
          </div>
          <div className="playeModalInfoItem">
            <h2 className="playerModalTitle">LUGAR DE NACIMIENTO</h2>
            <p>{player.birth_place}</p>
          </div>
          <div className="playeModalInfoItem">
            <h2 className="playerModalTitle">PESO</h2>
            <p>{player.weight ? player.weight : '---'}</p>
          </div>
          <div className="playeModalInfoItem">
            <h2 className="playerModalTitle">ALTURA</h2>
            <p>{player.height ? player.height : '---'}</p>
          </div>
          <div className="playeModalInfoItem">
            <h2 className="playerModalTitle">EQUIPO ANTERIOR</h2>
            <p>{player.last_team ? player.last_team : '---'}</p>
          </div>
        </div>
      </div>
    );
  }
  return playerModal;
};

export default playerModalInfo;
