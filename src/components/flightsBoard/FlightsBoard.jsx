import React, { useEffect, useState } from 'react';
import './flightsBoard.scss';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import * as airportBoardActions from '../flights.actions';
import qs from 'qs';
import moment from 'moment';
import FlightsNavigation from '../flightsNavigation/FlightsNavigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { arrivalSelector, departureSelector } from '../flights.selectors';
import Search from '../search/Search';
import FlightsSchedule from '../flightsSchedule/FlightsSchedule';

const AirportBoard = ({ departureFlights, arrivalFlights, getFlightsData }) => {
  const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [direction, setDirection] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const { search, pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    history.push(
      `/${direction}?date=${date}${searchValue ? `&search=${searchValue}` : ''}`
    );
  }, [date, searchValue, direction]);

  useEffect(() => {
    getFlightsData(date);
  }, [date]);

  useEffect(() => {
    if (search) {
      const valuesData = qs.parse(search, { ignoreQueryPrefix: true });
      if (valuesData.date) {
        setDate(valuesData.date);
      }
      if (valuesData.search) {
        setSearchValue(valuesData.search);
      }
    }

    setDirection(pathname.slice(1) === 'arrival' ? 'arrival' : 'departure');
  }, []);

  const filterFlights = (flights) => {
    return flights.filter((flight) => {
      const city = flight['airportToID.city_en']
        ? flight['airportToID.city_en']
        : flight['airportFromID.city_en'];

      return (
        city.toLowerCase().includes(searchValue) ||
        flight.airline.en.name.toLowerCase().includes(searchValue) ||
        flight.codeShareData[0].codeShare.toLowerCase().includes(searchValue)
      );
    });
  };

  return (
    <div className="board">
      <Search setSearchValue={setSearchValue} />
      <div className="information">
        <FlightsNavigation
          date={date}
          setDate={setDate}
          direction={direction}
          setDirection={setDirection}
          setSearchValue={setSearchValue}
        />

        <Switch>
          <Route path="/departure">
            <FlightsSchedule flights={filterFlights(departureFlights)} />
          </Route>
          <Route path="/arrival">
            <FlightsSchedule flights={filterFlights(arrivalFlights)} />
          </Route>
          <Route path="*">
            <h3>Please reload the page</h3>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    arrivalFlights: arrivalSelector(state),
    departureFlights: departureSelector(state),
  };
};

const mapDispatch = {
  getFlightsData: airportBoardActions.getFlightsData,
};

export default connect(mapState, mapDispatch)(AirportBoard);

AirportBoard.propTypes = {
  arrivalFlights: PropTypes.array.isRequired,
  departureFlights: PropTypes.array.isRequired,
  getFlightsData: PropTypes.func.isRequired,
};
