import React from 'react';
import PropTypes from 'prop-types';
import FlightsSchedule from '../schedule/FlightsSchedule';

const FlightsInfo = ({ flight }) => {
  const [time, setTime] = useState({
    localTime: null,
    status: null,
  });

  const { pathname } = useLocation();

  const termStyle =
    flight.term === 'A'
      ? 'terminal-field terminal-field_green'
      : 'terminal-field terminal-field_blue';

  useEffect(() => {
    const localTimeDep = moment(flight['timeDepShedule']).format('H:mm');
    const localTimeArr = moment(flight['timeToStand']).format('H:mm');
    const localTime = pathname === '/departures' ? localTimeDep : localTimeArr;

    const statusDep = `Departed at ${moment(flight['timeTakeofFact']).format('H:mm')}`;
    const statusArr = `Landed ${moment(flight['timeLandFact']).format('H:mm')}`;
    const status = pathname === '/departures' ? statusDep : statusArr;

    setTime({
      localTime,
      status,
    });
  }, []);
  return (
    <tr>
      <td>
        <span className={terminal === 'D' ? 'terminal terminal-d' : 'terminal'}>{terminal}</span>
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
