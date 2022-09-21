import { createSelector } from 'reselect';

export const flightsListSelector = (state) =>  state.flights.flightsList;


export const filterListSelector = (state) => {
  return state.flights.flightNumber;
};

export const filteredFlightsListSelector = createSelector(
  [flightsListSelector, filterListSelector],
  (flightsList, flightNumber) => {
    return flightNumber
      ? flightsList.filter((flight) =>
          `${flight['carrierID.IATA']}${flight.fltNo}`.includes(flightNumber)
        )
      : flightsList;
    }
    );
  
