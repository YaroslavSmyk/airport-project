import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation, useNavigate, useHistory } from 'react-router-dom';
import './datesChoose.scss';
import moment from 'moment';
import { getFlightsList } from '../../gateway/flights.actions';

const DatesChoose = ({date, setDate}) => {
  const [direction, setDirection] = useState('');
  // const [date, setDate] = useState(moment(new Date()).format('DD-MM-YYYY'));
  const [searchValue, setSearchValue] = useState('');
  const history = useHistory();
  const navigate = useLocation();
  const { search, pathname } = useLocation();


  const dateChangeHandler = event => {
    setDate(event.target.value);
    setSearchValue('');
  };

  const dayButtonClickHandler = event => {
    setDate(event.target.closest('button').dataset.day);
    setSearchValue('');
  };

  useEffect(() => {
    history.push(
      `/${direction}?date=${date}${searchValue ? `&search=${searchValue}` : ''}`
      );
      
    }, [date, searchValue, direction]);

  const getToday = moment(new Date()).format('DD/MM/YYYY');
  const getYesterday = moment(new Date(new Date().setDate(new Date().getDate() - 1))).format(
    'DD/MM/YYYY',
  );
  const getTomorrow = moment(new Date(new Date().setDate(new Date().getDate() + 1))).format(
    'DD/MM/YYYY',
  );

  return (
    <div>
      <div className="dates">
        <span className="date-value">{moment(date).format('DD/MM/YYYY')}</span>
        <input className="dates__input" type="date" name="date" onChange={dateChangeHandler} />

        <div className="dates__day">
          <span className="dates__day-title" onClick={dayButtonClickHandler}>
            {getYesterday}
          </span>
          <p>YESTERDAY</p>
        </div>
        <div className="dates__day">
          <span className="dates__day-title" onClick={dayButtonClickHandler}>
            {getToday}
          </span>
          <p>TODAY</p>
        </div>
        <div className="dates__day">
          <span className="dates__day-title" onClick={dayButtonClickHandler}>
            {getTomorrow}
          </span>
          <p>TOMORROW</p>
        </div>
        </div>
      </div>
    );
  };

export default DatesChoose;
