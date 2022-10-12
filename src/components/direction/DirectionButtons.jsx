import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import DatesChoose from '../datesChoose/DatesChoose';
import FlightsSchedule from '../schedule/FlightsSchedule';
import './directionButtons.scss';

const DirectionButtons = () => {
  const { pathname } = useLocation();

  const departuresStylesBtn = pathname === '/departures' ? 'flights-board__btn_active' : '';
  const arrivalsStylesBtn = pathname === '/arrivals' ? 'flights-board__btn_active' : '';

  return (
    <div>
      <Link to="/departures">
        <button className={`button-direction active ${departuresStylesBtn}`}>
        <i className="fa-solid fa-plane flights-navigation__icon flights-navigation__icon_departures" />
          Departures</button>
      </Link>
      <Link to="/arrivals">
        <button className={`button-direction ${arrivalsStylesBtn}`}>
          Arrivals
          <i className="fa-solid fa-plane flights-navigation__icon flights-navigation__icon_arrivals" />
        </button>
      </Link>
      <DatesChoose />
      {/* <Routes>
      <Route path="/:data" element={<DatesChoose />} />
      </Routes> */}
      <Link>
        <Route path="/:direction" element={<FlightsSchedule />} />
      </Link>
    </div>
  );
};

export default DirectionButtons;
