import React from 'react';
import PropTypes from 'prop-types';

const DirectionNavigation = ({ direction, setDirection }) => {
  const getClassNames = (buttonDirection) => {
    return direction === buttonDirection
      ? 'button button_active navigation__button'
      : 'button navigation__button';
  };
  
  const clickHandler = (event) => {
    setDirection(event.target.textContent.toLowerCase());
  };

  return (
    <div className="navigation__direction">
      <button className={getClassNames('departure')} onClick={clickHandler}>
        <i className="fa-solid fa-plane navigation__icon navigation__icon_departures" />
        Departure
      </button>

      <button className={getClassNames('arrival')} onClick={clickHandler}>
        Arrival
        <i className="fa-solid fa-plane navigation__icon navigation__icon_arrivals" />
      </button>
    </div>
  );
};

export default DirectionNavigation;

DirectionNavigation.propTypes = {
  direction: PropTypes.string.isRequired,
  setDirection: PropTypes.func.isRequired,
};
