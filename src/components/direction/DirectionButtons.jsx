import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import DatesChoose from '../datesChoose/DatesChoose';
import Schedule from '../schedule/FlightsSchedule';
import './directionButtons.scss';

const DirectionButtons = () => {
  const { pathname, search } = useLocation();

  const departuresStylesBtn =
    pathname === '/departures' ? 'flights-board__btn_active' : '';
  const arrivalsStylesBtn =
    pathname === '/arrivals' ? 'flights-board__btn_active' : '';

  return (
    <div>
      <Link to={`/departures${search}`}>
        <button className={`button-direction active ${departuresStylesBtn}`}>
          Departure
        </button>
      </Link>
      <Link to={`/arrivals${search}`}>
        <button className={`button-direction ${arrivalsStylesBtn}`}>
          Arrivals
        </button>
      </Link>
      <DatesChoose />
      <Routes>
        <Route path="/:direction" element={<Schedule />} />
      </Routes>
    </div>
  );
};

export default DirectionButtons;
