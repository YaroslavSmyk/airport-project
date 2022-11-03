import React from 'react';
import './flightsInfo.scss';
import moment from 'moment';
import PropTypes from 'prop-types';


const FlightsInfo = ({ flight, index }) => {
  const { airline, actual, term, status, codeShareData } = flight;

  const flightDestination = flight['airportToID.city_en']
    ? flight['airportToID.city_en']
    : flight['airportFromID.city_en'];

  let terminalColor;
  if (term === 'A') {
    terminalColor = '#63c745';
  } else if (term === 'B') {
    terminalColor = '#d16aae';
  } else terminalColor = '#1eb7ee';

  const terminaStyle = { color: terminalColor, borderColor: terminalColor };

  const classNames =
    index % 2 === 1
      ? 'table__flight table__flight_odd'
      : 'table__flight';

  return (
    <tr className={classNames}>
      <td className="table__element">
        <span className="terminal" style={terminaStyle}>
          {term}
        </span>
      </td>
      <td className="table__element">
        {moment(actual).format('h:mm a')}
      </td>
      <td className="table__element">{flightDestination}</td>
      <td className="table__element">{status}</td>
      <td className="table__element airline">
        <img
          className="airline__logo"
          src={airline.en.logoName}
          alt={airline.en.name}
        />
        {airline.en.name}
      </td>
      <td className="table__element">{codeShareData[0].codeShare}</td>
    </tr>
  );
};

export default FlightsInfo;

FlightsInfo.propTypes = {
  flight: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
