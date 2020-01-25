import React from 'react';
import { connect } from 'react-redux';
import { showMobileMenu } from '../../store/actions';
import './index.scss';

class JugadoresPage extends React.Component {
  componentDidMount() {
    const { showMobileMenu, setShowMobileMenu } = this.props;
    if (showMobileMenu) {
      setShowMobileMenu(false);
    }
  }

  render() {
    return (
      <div className="jugadoresContainer">
        <h1>Jugadores 1</h1>
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
export default connect(mapStateToProps, mapDispatchsToProp)(JugadoresPage);
