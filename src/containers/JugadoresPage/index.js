import React from 'react';
import PlayerComponent from '../../components/playerComponent';
import PlayerModal from '../../components/playerComponent/playerModalInfo';
import BackDrop from '../../components/Backdrop';
import { connect } from 'react-redux';
import { showMobileMenu, asyncGetPlayers, showModal as showModalInfo, setSelectedPlayer } from '../../store/actions';
import './index.scss';

class JugadoresPage extends React.Component {
  componentDidMount() {
    const { showMobileMenu, setShowMobileMenu, getPlayer } = this.props;
    if (showMobileMenu) {
      setShowMobileMenu(false);
    }
    getPlayer();
  }

  handleOnClickInfoPlayer = (player) => {
    const { setShowModal, setSelectedPlayer } = this.props;
    setSelectedPlayer(player);
    setShowModal(true);
  };

  handleCloseModal = () => {
    const { setShowModal } = this.props;
    setShowModal(false);
  };

  render() {
    const { players, showModal, selectedPlayer } = this.props;
    const playersRender = players.length ? players.map((player, i) => <PlayerComponent key={i} player={player} clicked={() => this.handleOnClickInfoPlayer(player)}></PlayerComponent>) : '';
    return (
      <>
        <BackDrop show={showModal} clicked={this.handleCloseModal}></BackDrop>
        <PlayerModal show={showModal} player={selectedPlayer}></PlayerModal>
        <div className="jugadoresContainer">{playersRender}</div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showMobileMenu: state.uiReducer.showMobileMenu,
    showModal: state.uiReducer.showModal,
    players: state.playersReducer.players,
    selectedPlayer: state.playersReducer.selectedPlayer,
  };
};

const mapDispatchsToProp = (dispatch) => {
  return {
    setShowMobileMenu: (show) => dispatch(showMobileMenu(show)),
    getPlayer: () => dispatch(asyncGetPlayers()),
    setShowModal: (show) => dispatch(showModalInfo(show)),
    setSelectedPlayer: (player) => dispatch(setSelectedPlayer(player)),
  };
};
export default connect(mapStateToProps, mapDispatchsToProp)(JugadoresPage);
