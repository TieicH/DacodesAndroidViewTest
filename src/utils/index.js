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
