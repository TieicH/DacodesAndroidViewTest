import React from 'react';
import ShowgamesContainer from '../../components/ShowGamesContainer';
import { connect } from 'react-redux';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import { showMobileMenu, asyncGetGames } from '../../store/actions';
import { homeRoute, homeRouteAscensoMX, homeRouteCopaMX } from '../../routes';
import './index.scss';

class HomePage extends React.Component {
  componentDidMount() {
    const { showMobileMenu, setShowMobileMenu, getGames } = this.props;
    if (showMobileMenu) {
      setShowMobileMenu(false);
    }
    getGames();
  }

  render() {
    const {
      games: { ascensoMX, copaMX },
    } = this.props;

    return (
      <>
        <Redirect exact from="/" to={homeRouteCopaMX} />
        <div className="homeContainer">
          <div className="tabs">
            <div className="tabsTitles">
              <NavLink to={homeRouteCopaMX} className="tabLink" activeClassName="active">
                COPA MX
              </NavLink>
              <NavLink to={homeRouteAscensoMX} className="tabLink" activeClassName="active">
                ASCENSO MX
              </NavLink>
            </div>
            <div className="tabsContent">
              <Switch>
                <Route exact path={homeRouteCopaMX} render={() => <ShowgamesContainer data={copaMX}></ShowgamesContainer>}></Route>
                <Route exact path={homeRouteAscensoMX} render={() => <ShowgamesContainer data={ascensoMX}></ShowgamesContainer>}></Route>
                <Route exact path={homeRoute} render={() => <ShowgamesContainer data={copaMX}></ShowgamesContainer>}></Route>
              </Switch>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showMobileMenu: state.uiReducer.showMobileMenu,
    games: state.gamesReducer.games,
  };
};

const mapDispatchsToProp = (dispatch) => {
  return {
    setShowMobileMenu: (show) => dispatch(showMobileMenu(show)),
    getGames: () => dispatch(asyncGetGames()),
  };
};
export default connect(mapStateToProps, mapDispatchsToProp)(HomePage);
