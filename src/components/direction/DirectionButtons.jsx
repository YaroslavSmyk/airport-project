import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import DatesChoose from '../datesChoose/DatesChoose';
import FlightsSchedule from '../schedule/FlightsSchedule';
import './directionButtons.scss';

const DirectionButtons = () => {
  // console.log(flightsList);
  const { pathname } = useLocation();
  // console.log('pathname', pathname)

  const departuresStylesBtn =
    pathname === '/departures' ? 'flights-board__btn_active' : '';
  const arrivalsStylesBtn =
    pathname === '/arrivals' ? 'flights-board__btn_active' : '';

  return (
    <div>
      <Link to="/departures">
        <button className={`button-direction active ${departuresStylesBtn}`}>
          Departures
        </button>
      </Link>
      <Link to="arrivals">
        <button className={`button-direction ${arrivalsStylesBtn}`}>
          Arrivals
        </button>
      </Link>
      <DatesChoose />
      <Routes>
        <Route path="/:direction" element={<FlightsSchedule />} />
      </Routes>
    </div>
  );
};

export default DirectionButtons;
