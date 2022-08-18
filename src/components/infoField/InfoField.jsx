import React from 'react';
import './infoField.scss';

const InfoField = () => {
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
          <td className="td-hiden"></td>
        </tr>
      </tbody>
    </table>
  );
};

export default InfoField;
