import React from 'react';
import './index.scss';

const backdrop = (props) => (props.show ? <div className="backDrop" onClick={props.clicked} /> : null);

export default backdrop;
