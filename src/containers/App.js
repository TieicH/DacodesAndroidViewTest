import React from 'react';
import { connect } from 'react-redux';
import { agregar1, eliminar1 } from '../store/actions/index';
import './App.scss';

const App = (props) => {
  const { counter, add1, minus1 } = props;

  return (
    <>
      <div className="App">
        <div className="contenido">hola como estas?</div>
        <div>counter: {counter}</div>
        <button type="button" onClick={() => add1(1)}>
          agregar
        </button>
        <button type="button" onClick={() => minus1(1)}>
          disminuir
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    counter: state.agregarReducer.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add1: (amount) => dispatch(agregar1(amount)),
    minus1: (amount) => dispatch(eliminar1(amount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
