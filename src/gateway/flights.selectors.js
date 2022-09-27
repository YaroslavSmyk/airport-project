import { createSelector } from 'reselect';
import moment from 'moment';

export const flightsListSelector = (state) => state.flights;

// export const arrivalFlightsSelector = (state) =>
//   state.airportBoard.flights.arrival;

// export const departureFlightsSelector = (state) =>
//   state.airportBoard.flights.departure;


export const filterListSelector = createSelector([flightsListSelector], flights =>
  flights.flightsList.filter(
    flight =>
      moment(new Date(flight.timeToStand)).format('MMM Do YY') ===
      moment(new Date()).format('MMM Do YY'),
  ),
);

export const filteredFlightsListSelector = createSelector(
  [flightsListSelector, filterListSelector],
  (flights, flightsList) => {
    if (flights.flightNumber) {
      return flightsList.filter(
        flight => flight.codeShareData[0].codeShare.indexOf(flights.flightNumber.toUpperCase()) >= 0,
      );
    }
    return flightsList;
  },
);

  
