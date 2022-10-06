import { createSelector } from 'reselect';
import moment from 'moment';

export const flightsListSelector = state => state.flights.flightsList;

export const filterListSelector = state => {
  return state.flights.flightNumber;
};

export const filteredFlightsListSelector = createSelector(
  [flightsListSelector, filterListSelector],
  (flightsList, flightNumber) => {
    return flightNumber
      ? flightsList.filter(flight =>
          `${flight['carrierID.IATA']}${flight.fltNo}`.includes(flightNumber),
        )
      : flightsList;
  },
);
// export const departureFlightsSelector = (state) =>
//   state.airportBoard.flights.flightsList.departure;

// export const flightsListSelector = (state) => state.flights;

// export const filterListSelector = createSelector([flightsListSelector], flights =>
//   flights.flightsList.filter(
//     flight =>
//       moment(new Date(flight.timeToStand)).format('MMM Do YY') ===
//       moment(new Date()).format('MMM Do YY'),
//   ),
// );

// export const filteredFlightsListSelector = createSelector(
//   [flightsListSelector, filterListSelector],
//   (flights, flightsList) => {
//     if (flights.flightNumber) {
//       return flightsList.filter(
//         flight => flight.codeShareData[0].codeShare.indexOf(flights.flightNumber.toUpperCase()) >= 0,
//       );
//     }
//     return flightsList;
//   },
// );
