import React from 'react';
import { connect } from 'react-redux';
import { showMobileMenu, asyncGetStadistics } from '../../store/actions';
import './index.scss';

class EstadisticasPage extends React.Component {
  componentDidMount() {
    const { showMobileMenu, setShowMobileMenu, getStadistics } = this.props;
    if (showMobileMenu) {
      setShowMobileMenu(false);
    }
    getStadistics();
  }

  render() {
    const { stadistics } = this.props;
    return (
      <div className="estadisticasContainer">
        <div className="estadisticasContent">
          <p>Tabla General</p>
          <div className="puntos">
            <p>JJ</p>
            <p>DG</p>
            <p>PTS</p>
          </div>
        </div>
        {stadistics.length ? <p>data de estadisticas que no existe</p> : <h2 style={{ padding: '2rem' }}>No se encontraron estadisticas</h2>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showMobileMenu: state.uiReducer.showMobileMenu,
    stadistics: state.stadisticsReducer.stadistics,
  };
};

const mapDispatchsToProp = (dispatch) => {
  return {
    setShowMobileMenu: (show) => dispatch(showMobileMenu(show)),
    getStadistics: () => dispatch(asyncGetStadistics()),
  };
};
export default connect(mapStateToProps, mapDispatchsToProp)(EstadisticasPage);
