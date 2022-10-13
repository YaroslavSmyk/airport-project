import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation, useNavigate, useHistory } from 'react-router-dom';
import './datesChoose.scss';
import moment from 'moment';
import ButtonDay from './ButtonDay';
import { getFlightsList } from '../../gateway/flights.actions';

const DatesChoose = () => {
  const [direction, setDirection] = useState('');
  const [date, setDate] = useState(moment(new Date()).format('DD-MM-YYYY'));
  const [searchValue, setSearchValue] = useState('');
  const history = useHistory();
  const navigate = useLocation();
  const { search, pathname } = useLocation();


  const dateChangeHandler = event => {
    setDate(event.target.value);
    setSearchValue('');
    // navigate(`/${direction}?date=${date}${searchValue ? `&search=${searchValue}` : ''}`);
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

      
  // useEffect(() => {
  //   const newPath = (direction, date, searchValue) =>
  //     navigate(`/${direction}?date=${date}${searchValue ? `&search=${searchValue}` : ''}`);
  //     }, [date, searchValue, direction]);
    
    // useEffect(() => {
    //   getFlightsList(date);
    // }, [date]);

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

        {/* <div className="dates__day-title">
        <ButtonDay
          date={date}
          buttonDate={getYesterday}
          day="Yesterday"
          dayButtonClickHandler={dayButtonClickHandler}
        />
        <ButtonDay
          date={date}
          buttonDate={getToday}
          day="Today"
          dayButtonClickHandler={dayButtonClickHandler}
        />
        <ButtonDay
          date={date}
          buttonDate={getTomorrow}
          day="Tomorrow"
          dayButtonClickHandler={dayButtonClickHandler}
        />
      </div> */}

export default DatesChoose;
