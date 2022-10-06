import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation, useNavigate } from 'react-router-dom';
import './datesChoose.scss';
import moment from 'moment';
// import  { fetchFlightList }  from './gateway/Gateway';

const DatesChoose = () => {
  const [direction, setDirection] = useState('');
  const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();
console.log(navigate);


  const dateChangeHandler = event => {
    setDate(event.target.value);
    setSearchValue('');
    console.log(direction);
    navigate(`/${direction}?date=${date}${searchValue ? `&search=${searchValue}` : ''}`)
  };
  console.log(date);

  // useEffect(() => {
  //   fetchFlightList(date);
  // }, [date]);

  // useEffect(() => {
  //   navigate.push(
  //     `/${direction}?date=${date}${searchValue ? `&search=${searchValue}` : ''}`
  //   );
  // }, [date, searchValue, direction]);

  const getToday = moment(new Date()).format('DD/MM');
  const getYesterday = moment(new Date(new Date().setDate(new Date().getDate() - 1))).format(
    'DD/MM',
  );
  const getTomorrow = moment(new Date(new Date().setDate(new Date().getDate() + 1))).format(
    'DD/MM',
  );

  return (
    <div>
      <div className="dates">
        <span className="date-value">{moment(date).format('DD/MM')}</span>
        <input className="dates__input" type="date" onChange={dateChangeHandler} />
        {/* <div className="dates__days"> */}
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
        {/* </div> */}
      </div>
    </div>
  );
};

export default DatesChoose;
