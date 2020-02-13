import React from 'react';
import { connect } from 'react-redux';
import { showMobileMenu, asyncSaveStadistics } from '../../store/actions';
import { validate } from '../../utils';
import './index.scss';

class EstadisticasPage extends React.Component {
  state = {
    teamName: '',
    teamImage: '',
    jj: '',
    dg: '',
    pts: '',
    errorOnSave: false,
  };

  refteamName = React.createRef();
  refteamImage = React.createRef();
  refjj = React.createRef();
  refdg = React.createRef();
  refpts = React.createRef();

  componentDidMount() {
    const { showMobileMenu, setShowMobileMenu } = this.props;
    if (showMobileMenu) {
      setShowMobileMenu(false);
    }
  }

  handleInputData = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    const input = evt.target;

    if (name == 'teamName') {
      const validTeamName = validate(value, 'text');
      if (validTeamName) {
        input.classList.remove('errorInput');
      } else {
        input.classList.add('errorInput');
      }
      this.setState({ [name]: value });
      return;
    }
    if (name == 'teamImage') {
      const validTeamImage = validate(value, 'urlImage');
      if (validTeamImage) {
        input.classList.remove('errorInput');
      } else {
        input.classList.add('errorInput');
      }
      this.setState({ [name]: value });
      return;
    }

    const validNumber = validate(+value, 'number');
    if (validNumber) {
      input.classList.remove('errorInput');
    } else {
      input.classList.add('errorInput');
    }
    this.setState({ [name]: value });
  };

  handleSaveStadistic = () => {
    const { teamName, teamImage, jj, dg, pts } = this.state;
    const { saveStadistic } = this.props;

    const validTeamName = validate(teamName, 'text');
    const validTeamImage = validate(teamImage, 'urlImage');
    const validJJ = validate(+jj, 'number');
    const validDG = validate(+dg, 'number');
    const validPTS = validate(+pts, 'number');

    if (validTeamName && validTeamImage && validJJ && validDG && validPTS) {
      const dataToSend = { team: teamName, urlImage: teamImage, jj, dg, pts };
      saveStadistic(dataToSend);
      this.setState({
        teamName: '',
        teamImage: '',
        jj: '',
        dg: '',
        pts: '',
      });
    } else {
      this.setState({ errorOnSave: true });
    }
  };

  render() {
    return (
      <div className="nuevaEstadisticaContainer">
        <h1>Crear Una Nueva Estadistica</h1>
        <div className="nuevaEstadisticaFormularioContainer">
          <div className="inputItem">
            <input ref={this.refteamName} value={this.state.teamName} name="teamName" onChange={(e) => this.handleInputData(e)} placeholder="Team Name" type="text" />
          </div>
          <div className="inputItem">
            <input ref={this.refteamImage} value={this.state.teamImage} name="teamImage" onChange={(e) => this.handleInputData(e)} placeholder="Team Image" type="text" />
          </div>
          <div className="inputItem">
            <input ref={this.refjj} value={this.state.jj} name="jj" onChange={(e) => this.handleInputData(e)} placeholder="JJ" type="text" />
          </div>
          <div className="inputItem">
            <input ref={this.refdg} value={this.state.dg} name="dg" onChange={(e) => this.handleInputData(e)} placeholder="DG" type="text" />
          </div>
          <div className="inputItem">
            <input ref={this.refpts} value={this.state.pts} name="pts" onChange={(e) => this.handleInputData(e)} placeholder="PTS" type="text" />
          </div>
        </div>
        <button type="button" onClick={this.handleSaveStadistic}>
          Guardar
        </button>
        {this.state.errorOnSave ? <span className="errorOnSave">Campos incorrectos o incompletos</span> : ''}
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
    saveStadistic: (data) => dispatch(asyncSaveStadistics(data)),
  };
};
export default connect(mapStateToProps, mapDispatchsToProp)(EstadisticasPage);
