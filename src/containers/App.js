import React from 'react';
import asyncComponent from '../hoc/asyncComponent';
import Menu from '../components/Menu';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { homeRoute, stadisticsRoute, playersRoute, homeRouteCopaMX } from '../routes';
import './App.scss';

const asyncHomePage = asyncComponent(() => {
  return import('./HomePage');
});
const asyncJugadoresPage = asyncComponent(() => {
  return import('./JugadoresPage');
});
const asyncEstadisticasPage = asyncComponent(() => {
  return import('./EstadisticasPage');
});

class App extends React.Component {
  render() {
    return (
      <>
        <Redirect exact from="/" to={homeRouteCopaMX} />
        <div className="App">
          <Menu></Menu>
          <div className="contenido">
            <Switch>
              <Route path={homeRoute} component={asyncHomePage}></Route>
              <Route path={stadisticsRoute} component={asyncEstadisticasPage}></Route>
              <Route path={playersRoute} component={asyncJugadoresPage}></Route>
            </Switch>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
