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

  console.log('direction', direction);

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
          .slice()
          .sort((a, b) => new Date(a.timeToStand) - new Date(b.timeToStand))
          .map((flight) => 
         <FlightsInfo key={flight.ID} flight={flight} />
       )}
      </tbody>
    </table>
  );
};

export default FlightsSchedule;
