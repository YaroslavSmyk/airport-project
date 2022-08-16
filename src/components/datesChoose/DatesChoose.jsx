import React from 'react';
import './datesChoose.scss';
import InfoField from '../infoField/InfoField';

const DatesChoose = () => {
  return (
    <div>
      <div className="dates">
        <input className="dates__input" type="date"></input>
        <div className="dates__days">
          <div className="dates__day">
            <span className="dates__day-title">Wednesday 10/08</span>
            <p>yesterday</p>
          </div>
          <div className="dates__day">
            <span className="dates__day-title">Wednesday 10/08</span>
            <p>today</p>
          </div>
          <div className="dates__day">
            <span className="dates__day-title">Wednesday 10/08</span>
            <p>tomorrow</p>
          </div>
        </div>
        <div className="dates__title">01-02-2022</div>
      </div>
      <div className="search__clear">
        <button className="search__clear-right">X</button>
      </div>
      <InfoField />
    </div>
  );
};

export default DatesChoose;
