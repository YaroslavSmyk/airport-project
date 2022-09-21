import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  useLocation,
  useParams,
} from 'react-router-dom';
import qs from 'qs';
import './flightsSchedule.scss';
import * as flightsAction from '../../gateway/flights.actions';
import { connect } from 'react-redux';
import {
  filteredFlightsListSelector,
  filterListSelector,
} from '../../gateway/flights.selectors';
import PropTypes from "prop-types";


const FlightsSchedule = ({
  getFlightsList,
  flightsList,
  getFilteredFlightsList,
}) => {
  const { direction } = useParams();
  const search = useLocation();
  const querySearch = qs.parse(search, { ignoreQueryPrefix: true }).search;

  console.log(flightsList);
  useEffect(() => {
    getFlightsList(direction);
  }, [direction]);


  useEffect(() => {
    getFilteredFlightsList(querySearch);
  }, [querySearch]);

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
            (flight) =>
              moment(flight.timeToStand).format('DD-MM-YYYY') ===
              moment(new Date()).format('DD-MM-YYYY')
          )
          .map((flight) => (
            <FlightsInfo flight={flight} key={flight.ID} />
          ))}
        {/* <tr>
          <td>
            <span className="terminal terminal_A">A</span>
          </td>
          <td>7:40 AM</td>
          <td>Hurghada</td>
          <td>CX to 6:05 PM</td>
          <td className="airline">
            Bees Airline
            <img
              className="item-logo"
              src="https://api.iev.aero/media/airline/files/606aefa0c8a4a734421442.png"
              alt="logo"
            ></img>
          </td>
          <td className="td-hiden">Number flight</td>
        </tr> */}
      </tbody>
    </table>
  );
};

const mapDispatch = {
  getFlightsList: flightsAction.getFlightsList,
  getFilteredFlightsList: flightsAction.getFilteredFlightsList,
};

const mapState = (state) => ({
  flightsNumber: filterListSelector(state),
  flightsList: filteredFlightsListSelector(state),
});

FlightsSchedule.propTypes = {
  getFlightsList: PropTypes.func.isRequired,
  flightsList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getFilteredFlightsList: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(FlightsSchedule);
