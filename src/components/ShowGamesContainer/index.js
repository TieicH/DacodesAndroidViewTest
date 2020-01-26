import React from 'react';
import './index.scss';

class ShowGamesContainer extends React.Component {
  render() {
    const { data } = this.props;
    const games =
      data && Object.keys(data).length
        ? Object.keys(data).map((month, i) => {
            return (
              <div className="gameInfoContainer" key={i}>
                <h3 className="gameInfoMonth">{month}</h3>
                {data[month].map((game, i) => {
                  return (
                    <div className="gameInfoItem" key={i}>
                      <div className="gameDateContainer">
                        <i className="fas fa-calendar-alt"></i>
                        <p className="gameDate">{game.dateInfo.day}</p>
                        <p className="gameDate">{game.dateInfo.dayName}</p>
                      </div>
                      <div className="gameVSContainer">
                        <div className="gameTeam">
                          <div className="imageTeam">
                            <img src="https://venados.dacodes.mx/img/venados.png"></img>
                          </div>
                          <p>Venados F.C</p>
                        </div>
                        <div className="gameScore">
                          <p>
                            {game.home_score} - {game.away_score}
                          </p>
                        </div>
                        <div className="gameTeam">
                          <div className="imageTeam">
                            <img src={game.opponent_image}></img>
                          </div>
                          <p>{game.opponent}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })
        : '';

    return <div className="gamesContainer">{games}</div>;
  }
}

export default ShowGamesContainer;
