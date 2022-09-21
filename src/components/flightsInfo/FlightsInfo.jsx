import React from 'react';
import PropTypes from 'prop-types';

const FlightsInfo = () => {
  return (
    <tr>
      <td>
        <span className={terminal === 'D' ? 'terminal terminal-d' : 'terminal'}>
          {terminal}
        </span>
      </td>
      <td>{timeFlight}</td>
      <td>{destination}</td>
      <td>{statusFlight}</td>
      <td>
        <div className="airline">
          <img className="airline__logo" src={airlineAvatar} />
          <span className="airline__name">{airlineName}</span>
        </div>
      </td>
      <td>{flight}</td>
    </tr>
  );
};

export default FlightsInfo;
