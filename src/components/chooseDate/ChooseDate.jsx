import React from 'react';
import moment from 'moment';
import ChooseButtonDay from './ChooseButtonDay';
import PropTypes from 'prop-types';

const ChooseDate = ({ date, setDate, setSearchValue }) => {
  const clickHandlerButton = (event) => {
    setDate(event.target.closest('button').dataset.day);
    setSearchValue('');
  };

  
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    setSearchValue('');
  };


  return (
    <div className="navigation__date">
      <div className="navigation__date-calendar">
        <span className="navigation__date-value">
          {moment(date).format('DD/MM')}
        </span>
        <input
          className="navigation__date-input"
          type="date"
          onChange={dateChangeHandler}
        />
      </div>

      <div>
        <ChooseButtonDay
          date={date}
          buttonDate={moment().subtract(1, 'days').format('YYYY-MM-DD')}
          day="Yesterday"
          clickHandlerButton={clickHandlerButton}
        />
        <ChooseButtonDay
          date={date}
          buttonDate={moment().format('YYYY-MM-DD')}
          day="Today"
          clickHandlerButton={clickHandlerButton}
        />
        <ChooseButtonDay
          date={date}
          buttonDate={moment().add(1, 'days').format('YYYY-MM-DD')}
          day="Tomorrow"
          clickHandlerButton={clickHandlerButton}
        />
      </div>
    </div>
  );
};

export default ChooseDate;

ChooseDate.propTypes = {
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};
