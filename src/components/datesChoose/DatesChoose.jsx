import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation, useNavigate, useHistory } from 'react-router-dom';
import './datesChoose.scss';
import moment from 'moment';
import qs from 'qs';
// import  { fetchFlightList }  from './gateway/Gateway';

const DatesChoose = ({ getFlightsList }) => {
  const { search } = useLocation();
  const [direction, setDirection] = useState('');
  // const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [date, setDate] = useState();

  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();

  const dateChangeHandler = date => {
    const formatedDate = moment(date).format('DD-MM-YYYY');
    setDate(formatedDate);
    const params = qs.stringify({ date: formatedDate });
    navigate(`/departures?${params}`);
    getFlightsList(formatedDate);

    // setDate(event.target.value);
    // setSearchValue('');
    // console.log(direction);
    // navigate(`/${direction}?date=${date}${searchValue ? `&search=${searchValue}` : ''}`)
  };
  console.log(date);

  const dayButtonClickHandler = event => {
    setDate(event.target.closest('button').dataset.day);
    setSearchValue('');
  };

  useEffect(() => {
    navigate(
      `/${direction}?date=${date}${searchValue ? `&search=${searchValue}` : ''}`
      );

    }, [date, searchValue, direction]);



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
        <input
          className="dates__input"
          type="date"
          onInput={event => dateChangeHandler(event.target.value)}
        />
        {/* <div className="dates__days"> */}
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
        {/* </div> */}
      </div>
    </div>
  );
};

export default DatesChoose;
