import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { showMobileMenu } from '../../store/actions';

class HomePage extends React.Component {
  componentDidMount() {
    const { showMobileMenu, setShowMobileMenu } = this.props;
    if (showMobileMenu) {
      setShowMobileMenu(false);
    } else {
      setShowMobileMenu(true);
    }
  }

  render() {
    return (
      <div className="homeContainer">
        <h1>Hola soy el home</h1>
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
export default connect(mapStateToProps, mapDispatchsToProp)(HomePage);
