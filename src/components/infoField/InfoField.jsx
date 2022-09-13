import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, useLocation, useParams } from 'react-router-dom';
import { fetchFlyList } from '../../gateway/getWay';
// import { useParams } from "react-router-dom";
// import DirectionButtonsction from '../direction/DirectionButtons';
import './infoField.scss';

const InfoField = () => {
  const [flight, setFlight] = useState([]);

  const { direction } = useParams();
  console.log(direction);

  const location = useLocation();
  console.log(location);

  const fet = () => {
    fetchFlyList().then((list) => {
      console.log(list);
    });
  };

  useEffect(() => {
    fet();
  }, []);

  

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Terminal</th>
          <th>Local time</th>
          <th>Destination</th>
          <th>Status</th>
          <th>Airline</th>
          <th className="td-hiden">Flight</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span className="terminal terminal_A">A</span>
          </td>
          <td>7:40 AM</td>
          <td>Hurghada</td>
          <td>CX to 6:05 PM</td>
          <td className="airline">
            Bees Airline
            <img
              className="item-logo"
              src="https://api.iev.aero/media/airline/files/606aefa0c8a4a734421442.png"
              alt="logo"
            ></img>
          </td>
          <td className="td-hiden">Number flight</td>
        </tr>
      </tbody>
    </table>
  );
};

export default InfoField;
