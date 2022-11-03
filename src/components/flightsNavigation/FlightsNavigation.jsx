import React from 'react';
import './flightsNavigation.scss';
import ChooseDate from '../chooseDate/ChooseDate';
import DirectionNavigation from '../directionNavigation/DirectionNavigation';

const FlightsNavigation = ({ setSearchValue, setDate, setDirection, direction, date, }) => {
  return (
    <div className="navigation">
      <DirectionNavigation direction={direction} setDirection={setDirection} />
      <ChooseDate
        date={date}
        setDate={setDate}
        setSearchValue={setSearchValue}
      />
    </div>
  );
};

export default FlightsNavigation;
