import React from 'react';
import MobileMenu from './MobileMenu';
import Media from 'react-media';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { showMobileMenu } from '../../store/actions';
import { homeRoute, stadisticsRoute, playersRoute, stadisticsAddRoute } from '../../routes';
import './index.scss';

class Menu extends React.Component {
  render() {
    const { showMobileMenu, setShowMobileMenu } = this.props;
    return (
      <>
        <div className="menuContainer">
          <div className="menuContent">
            <div className="hamburgerButton" onClick={() => setShowMobileMenu(true)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="menuHeader">
              <img className="menuImg" src="https://venados.dacodes.mx/img/venados.png"></img>
              <h4 className="menuTitle">Venados F.C</h4>
            </div>
            <div className="menuList">
              <NavLink to={homeRoute} className="menuLink" activeClassName="active">
                Home
              </NavLink>
              <NavLink to={stadisticsRoute} className="menuLink" activeClassName="active">
                Estadisticas
              </NavLink>
              <NavLink to={stadisticsAddRoute} className="menuLink" activeClassName="active">
                Nueva estadistica
              </NavLink>
              <NavLink to={playersRoute} className="menuLink" activeClassName="active">
                Jugadores
              </NavLink>
            </div>
          </div>
        </div>
        <Media query="(max-width: 600px)" render={() => <MobileMenu showMenu={showMobileMenu} clicked={() => setShowMobileMenu(false)}></MobileMenu>}></Media>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showMobileMenu: state.uiReducer.showMobileMenu,
  };
};

const mapDispatchsToProp = (dispatch) => {
  return {
    setShowMobileMenu: (show) => dispatch(showMobileMenu(show)),
  };
};
export default connect(mapStateToProps, mapDispatchsToProp)(Menu);
