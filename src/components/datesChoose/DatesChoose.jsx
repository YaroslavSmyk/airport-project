import React, { useState } from 'react';
import './datesChoose.scss';
import InfoField from '../infoField/InfoField';
import moment from 'moment';

const DatesChoose = () => {
  const getToday = moment(new Date()).format('DD/MM');
  const getYesterday = moment(
    new Date(new Date().setDate(new Date().getDate() - 1))
  ).format('DD/MM');
  const getTomorrow = moment(
    new Date(new Date().setDate(new Date().getDate() + 1))
  ).format('DD/MM');

  return (
    <div>
      <div className="dates">
        <input className="dates__input" type="date"></input>
        <div className="dates__days">
          <div className="dates__day">
            <span className="dates__day-title">{getYesterday}</span>
            <p>YESTERDAY</p>
          </div>
          <div className="dates__day">
            <span className="dates__day-title">{getToday}</span>
            <p>TODAY</p>
          </div>
          <div className="dates__day">
            <span className="dates__day-title">{getTomorrow}</span>
            <p>TOMORROW</p>
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
