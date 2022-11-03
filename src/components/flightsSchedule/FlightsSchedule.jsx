import React from 'react';
import './flightsSchedule.scss';
import FlightsInfo from '../flightsInfo/FlightsInfo';

const FlightsSchedule = ({ flights }) => {
  return flights.length === 0 ? (
    <h3>No flights...</h3>
  ) : (
    <table className="table">
      <thead className="table__header">
        <tr>
          <th className="table__element">Terminal</th>
          <th className="table__element">Local time</th>
          <th className="table__element">Destination</th>
          <th className="table__element">Status</th>
          <th className="table__element">Airline</th>
          <th className="table__element">Flight</th>
        </tr>
      </thead>
      <tbody className="table__flights">
        {flights
          .map((flight, index) => (
            <FlightsInfo flight={flight} key={flight.ID} index={index + 1} />
          ))
          .sort((a, b) => new Date(a.timeToStand) - new Date(b.timeToStand))}
      </tbody>
    </table>
  );
};

export default FlightsSchedule;
