import React from 'react';
import './index.scss';
import BackDrop from '../../Backdrop';
import { NavLink } from 'react-router-dom';
import { homeRoute, stadisticsRoute, playersRoute } from '../../../routes';

class MobileMenu extends React.Component {
  render() {
    const { showMenu, clicked } = this.props;
    return (
      <>
        <BackDrop show={showMenu} clicked={clicked}></BackDrop>
        <div className={`mobileMenu ${showMenu ? 'activeMobileMenu' : ''}`}>
          <div className="mobileMenuHeader">
            <div className="mobileImage">
              <img src="https://venados.dacodes.mx/img/venados.png"></img>
            </div>
            <p>Venados F.C</p>
          </div>
          <div className="mobileMenuContent">
            <div className="menuList">
              <NavLink to={homeRoute} className="menuLink" activeClassName="active">
                <span>
                  <i className="fas fa-home"></i>
                </span>
                Home
              </NavLink>
              <NavLink to={stadisticsRoute} className="menuLink" activeClassName="active">
                <span>
                  <i className="fas fa-chart-bar"></i>
                </span>
                Estadisticas
              </NavLink>
              <NavLink to={playersRoute} className="menuLink" activeClassName="active">
                <span>
                  <i className="fas fa-futbol"></i>
                </span>
                Jugadores
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MobileMenu;
