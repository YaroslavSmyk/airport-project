import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import DatesChoose from '../datesChoose/DatesChoose';
import FlightsSchedule from '../schedule/FlightsSchedule';
import './directionButtons.scss';
import * as flightsAction from '../../gateway/flights.actions';
import { connect } from 'react-redux';
import { filteredFlightsListSelector, filterListSelector } from '../../gateway/flights.selectors';
import PropTypes from 'prop-types';
import moment from 'moment';
const qs = require('qs');
import React, { useEffect } from 'react';


const DirectionButtons = ({ getFlightsList, flightsList, getFilteredFlightsList }) => {
  const { search, pathname } = useLocation();

  
  const { date } = qs.parse(search.replace('?', '')); 
  console.log(date) //04-01-2022
  const querySearch = qs.parse(search, { ignoreQueryPrefix: true }).search;
  
  useEffect(() => {
    getFlightsList('departures', date);
  }, [date]);
  
  console.log('flightsList', flightsList)
  
  useEffect(() => {
    getFilteredFlightsList(querySearch);
  }, [querySearch]);

  const departuresStylesBtn = pathname === '/departures' ? 'flights-board__btn_active' : '';
  const arrivalsStylesBtn = pathname === '/arrivals' ? 'flights-board__btn_active' : '';

  return (
    <div>
      <Link to="/departures">
        <button className={`button-direction active ${departuresStylesBtn}`}>
        <i className="fa-solid fa-plane flights-navigation__icon flights-navigation__icon_departures" />
          Departures</button>
      </Link>
      <Link to="arrivals">
        <button className={`button-direction ${arrivalsStylesBtn}`}>
          Arrivals
          <i className="fa-solid fa-plane flights-navigation__icon flights-navigation__icon_arrivals" />
        </button>
      </Link>
      <DatesChoose getFlightsList={getFlightsList}/>
      <Routes>
        <Route path="/:direction" element={<FlightsSchedule flightsList={flightsList}/>} />
      </Routes>
    </div>
  );
};


const mapDispatch = {
  getFlightsList: flightsAction.getFlightsList,
  getFilteredFlightsList: flightsAction.getFilteredFlightsList,
};

const mapState = state => ({
  flightsNumber: filterListSelector(state),
  flightsList: filteredFlightsListSelector(state),
});

DirectionButtons.propTypes = {
  getFlightsList: PropTypes.func.isRequired,
  flightsList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getFilteredFlightsList: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(DirectionButtons);

