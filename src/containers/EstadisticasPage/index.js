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
        <h1>Estadisticas</h1>
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
