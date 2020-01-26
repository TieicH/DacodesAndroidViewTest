import React from 'react';
import { connect } from 'react-redux';
import { showMobileMenu } from '../../store/actions';
import './index.scss';

class EstadisticasPage extends React.Component {
  componentDidMount() {
    const { showMobileMenu, setShowMobileMenu } = this.props;
    if (showMobileMenu) {
      setShowMobileMenu(false);
    }
  }

  render() {
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
        <h2 style={{ padding: '2rem' }}>No se encontraron estadisticas</h2>
      </div>
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
export default connect(mapStateToProps, mapDispatchsToProp)(EstadisticasPage);
