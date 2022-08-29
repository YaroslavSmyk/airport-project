import React from 'react';
import './header.scss'
import Direction from '../direction/Direction'

const Header = () => {
  return (
    <div className="page">
      <title className='title'>KYIV Sykorsky Airport</title>
      <div className="search__header">SEARCH FLIGHT</div>
      <div className="search">
        <i className="fas fa-search search__loop"></i>
        <input
          className="search__input"
          placeholder="Airline, destination or flight #"
        ></input>
        <button className="search__btn">SEARCH</button>
      </div>
      <Direction />
    </div>
  );
};

export default Header;
