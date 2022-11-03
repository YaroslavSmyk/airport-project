import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const ChooseButtonDay = ({ date, clickHandlerButton, buttonDate, day }) => {
  const classNames =
    date === buttonDate
      ? 'navigation__date-day navigation__date-day_active'
      : 'navigation__date-day';

  return (
    <button
    onClick={clickHandlerButton}
    data-day={buttonDate}
    className={classNames}
    >
      <div>{moment(buttonDate).format('DD/MM')}</div>
      <div>{day}</div>
    </button>
  );
};

export default ChooseButtonDay;

ChooseButtonDay.propTypes = {
  date: PropTypes.string.isRequired,
  buttonDate: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  clickHandlerButton: PropTypes.func.isRequired,
};
