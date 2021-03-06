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
        <div className="estadisticasHeader">
          <div className="estadisticasContent">
            <p>Tabla General</p>
            <div className="puntos">
              <p>JJ</p>
              <p>DG</p>
              <p>PTS</p>
            </div>
          </div>
        </div>
        <div className="estadisticasItems">
          {Array.isArray(Object.keys(stadistics)) && Object.keys(stadistics).length ? (
            Object.keys(stadistics).map((data, i) => {
              return (
                <div className="estadisticasItem" key={i}>
                  <div className="estadisticaTeamLogo">
                    <p className="teamPosition">{i + 1}</p>
                    <div className="estadisticaNameContainer">
                      <img className="estadisticaImage" src={stadistics[data].urlImage} />
                      <p className="estadisticasText teamName">{stadistics[data].team}</p>
                    </div>
                  </div>
                  <div className="estadiscasPuntos">
                    <p className="estadisticasText teamPts">{stadistics[data].jj}</p>
                    <p className="estadisticasText teamPts">{stadistics[data].dg}</p>
                    <p className="estadisticasText teamPts">{stadistics[data].pts}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 style={{ padding: '2rem' }}>No se encontraron estadisticas</h2>
          )}
        </div>
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
