import React, { useState } from 'react';
import DatesChoose from '../datesChoose/DatesChoose';
import moment from 'moment';
import './direction.scss';

const direction = () => {
  return (
    <div>
      <button className="button-direction active">departure</button>
      <button className="button-direction ">arrival</button>
      <DatesChoose />
    </div>
  );
};

export default direction;
