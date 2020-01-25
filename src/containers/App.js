import React from 'react';
import asyncComponent from '../hoc/asyncComponent';
import Menu from '../components/Menu';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
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
      <div className="App">
        <Menu></Menu>
        <div className="contenido">
          <Switch>
            <Route exact path="/" component={asyncHomePage}></Route>
            <Route path="/estadisticas" component={asyncEstadisticasPage}></Route>
            <Route path="/jugadores" component={asyncJugadoresPage}></Route>
            {/* <Route path="/user/:id" component={asyncUserDetail}></Route> */}
          </Switch>
        </div>
      </div>
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
