import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation, useParams } from 'react-router-dom';
import qs from 'qs';
import './flightsSchedule.scss';
import * as flightsAction from '../../gateway/flights.actions';
import { connect } from 'react-redux';
import { filteredFlightsListSelector, filterListSelector } from '../../gateway/flights.selectors';
import { arrivalFlightsSelector, departureFlightsSelector } from '../../gateway/flights.selectors';
import PropTypes from 'prop-types';
import FlightsInfo from '../flightsInfo/FlightsInfo';
import moment from 'moment';


const FlightsSchedule = ({ getFlightsList, flightsList, getFilteredFlightsList }) => {
  const { direction } = useParams();
//   const updateDirection = direction.substring(0, direction.length-1)
// console.log('updateDirection', updateDirection);
  console.log('direction', direction);
  const search = useLocation();
  const querySearch = qs.parse(search.search, { ignoreQueryPrefix: true }).search;

  console.log(flightsList);
  useEffect(() => {
    getFlightsList(direction);
  }, [direction]);

  useEffect(() => {
    getFilteredFlightsList(querySearch);
  }, [querySearch]);

  console.log(flightsList);

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
          <th className="td-hiden">Flight</th>
        </tr>
      </thead>
      <tbody>
        {flightsList
          .filter(
            flight =>
              moment(flight.timeToStand).format('DD-MM-YYYY') ===
              moment(new Date()).format('DD-MM-YYYY'),
          )
          .map(flight => (
            <FlightsInfo flight={flight} key={flight.ID} />
          ))}
      </tbody>
    </table>
  );
          }


const mapState = state => ({
  // flightsNumber: filterListSelector(state),
  flightsList: filteredFlightsListSelector(state),
});

const mapDispatch = {
  getFlightsList: flightsAction.getFlightsList,
  getFilteredFlightsList: flightsAction.getFilteredFlightsList,
};

// const mapState = (state) => {
//   return {
//     arrivalFlights: arrivalFlightsSelector(state),
//     departureFlights: departureFlightsSelector(state),
//   };
// };

// const mapDispatch = {
//   getFlightsList: flightsAction.getFlightsList,
// };

// FlightsSchedule.propTypes = {
//   getFlightsList: PropTypes.func.isRequired,
//   flightsList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
//   getFilteredFlightsList: PropTypes.func.isRequired,
// };

export default connect(mapState, mapDispatch)(FlightsSchedule);
