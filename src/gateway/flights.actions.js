import { fetchFlightList } from './gateway';

export const FLIGHTS_LIST_RECIEVED = 'FLIGHTS_LIST_RECIEVED';
export const GET_FILTERED_FLIGHTS_LIST = 'GET_FILTERED_FLIGHTS_LIST';

export const flightsListRecieved = (flightsList) => {
  return {
    type: FLIGHTS_LIST_RECIEVED,
    payload: {
      flightsList,
    },
  };
};


// export const flightsDataReceived = (arrival, departure) => {
//   return {
//     type: FLIGHTS_LIST_RECIEVED,
//     payload: { arrival, departure },
//   };
// };


export const getFilteredFlightsList = (flightNumber) => {
  return {
    type: GET_FILTERED_FLIGHTS_LIST,
    payload: {
      flightNumber,
    },
  };
};

export const getFlightsList = direction => {
  const thunkAction = function (dispatch) {
    fetchFlightList().then(flightsList => dispatch(flightsListRecieved(flightsList.body[`${direction.slice(0, -1)}`])));
  };
  return thunkAction;
};

// export const getFlightsList = (date) => (dispatch) => {
//   getFlights(date).then((flights) => {
//     fetchFlightList(flightsDataReceived(flights.body.arrival, flights.body.departure));
//   });
// };