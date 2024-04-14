// TripleLoader.js

import React from 'react';
import './Loader.css';
import logo from '../../images/logo.png'

const Loader2 = () => {
  return (
    <div className="triple-loader-container">
      <div className="loader"></div>
      <div className="loader reverse"></div>
      <div className="loader middle"></div>
      <div className="containetTextLoader">
        <img src={logo} alt="" />
        <div className="text">sweetplan</div>
      </div>
    </div>
  );
};

export default Loader2;
