import moment from 'moment';

export const orderGames = (games) => {
  const orderGames = games.reduce((games, game) => {
    const dateGame = moment(game.datetime).add(1, 'd');
    const month = getMonthName(dateGame.month());
    const dayName = getDayName(dateGame.day());
    const day = dateGame.date();
    game.dateInfo = {
      month,
      dayName,
      day,
    };
    if (games[month]) {
      games[month] = games[month].concat(game);
    } else {
      games[month] = [game];
    }
    return games;
  }, {});
  return orderGames;
};

const getMonthName = (month) => {
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  return months[month];
};

const getDayName = (day) => {
  const days = ['DOM', 'LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB'];
  return days[day];
};

export const mergePlayer = (players) => {
  const mergePlayers = Object.keys(players).reduce((mergedPlayers, player) => {
    mergedPlayers = mergedPlayers.concat([...players[player]]);
    return mergedPlayers;
  }, []);
  const resultData = mergePlayers.map((player) => {
    const dateBirthday = moment(player.birthday)
      .add(1, 'd')
      .calendar();
    return { ...player, birthday: dateBirthday };
  });
  return resultData;
};

export const validate = (value, validation) => {
  if (validation == 'text') {
    if (typeof value == 'string' && value != '' && value.length) {
      return true;
    } else {
      return false;
    }
  }
  if (validation == 'urlImage') {
    if (typeof value == 'string' && value != '' && value.length) {
      if (value.match(/^(http:\/\/|https:\/\/).*\.(png|jpg|jpeg)$/gi)) {
        return true;
      } else {
        return false;
      }
    }
  }

  if (validation == 'number') {
    if (typeof value == 'number' && value >= 0) {
      return true;
    } else {
      return false;
    }
  }
};
