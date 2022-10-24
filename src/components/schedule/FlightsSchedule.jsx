import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation, useParams } from 'react-router-dom';
import './flightsSchedule.scss';
import * as flightsAction from '../../gateway/flights.actions';
import { connect } from 'react-redux';
import { filteredFlightsListSelector, filterListSelector } from '../../gateway/flights.selectors';
import PropTypes from 'prop-types';
import FlightsInfo from '../flightsInfo/FlightsInfo';
import moment from 'moment';
import DatesChoose from '../datesChoose/DatesChoose';

const qs = require('qs');

const FlightsSchedule = ({flightsList}) => {
  const { direction } = useParams();
  // const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));

  console.log('direction', direction);
  console.log(flightsList);
  // const search = useLocation();
  // console.log('search', search)
  // const { date } = qs.parse(search.search.replace('?', '')); 
  // const querySearch = qs.parse(search.search, { ignoreQueryPrefix: true }).search;

  // console.log(flightsList);
  // useEffect(() => {
  //   getFlightsList(direction, date);
  // }, [direction]);

  // useEffect(() => {
  //   getFilteredFlightsList(querySearch);
  // }, [querySearch]);

  if (flightsList.length === 0) {
    return <h2 className="no-flights">No flights</h2>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Terminal</th>
          <th>Local time</th>
          <th>Destination</th>
          <th>Status</th>
          <th>Airline</th>
          <th>Flight</th>
        </tr>
      </thead>
      <tbody>
        {flightsList
        .filter(flight => moment(flight.timeToStand).format("DD-MM-YYYY") ===
        moment(new Date()).format("DD-MM-YYYY"))
          .sort((a, b) => new Date(a.timeToStand) - new Date(b.timeToStand))
          .map((flight) => 
          <FlightsInfo key={flight.ID} flight={flight} />
        )}
      </tbody>
    </table>
  );
};

export default FlightsSchedule;
