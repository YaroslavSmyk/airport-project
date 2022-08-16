import React from 'react';
import './header.scss'
import Direction from '../direction/Direction'

const header = () => {
  return (
    <div className="page">
      <div className="search__header">SEARCH_FLIGHT KYIV Sykorsky Airport</div>
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

export default header;
