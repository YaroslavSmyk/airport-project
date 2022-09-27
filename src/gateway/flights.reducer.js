import { GET_FILTERED_FLIGHTS_LIST, FLIGHTS_LIST_RECIEVED } from './flights.actions';

const initialState = {
  flightsList: [],
  flightNumber: null,
};

// const initialState = {
//   flights: {
//     arrival: [],
//     departure: [],
//   },
// };

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS_LIST_RECIEVED:
      return {
        ...state,
        flightsList: action.payload.flightsList,
      };
    case GET_FILTERED_FLIGHTS_LIST:
      return {
        ...state,
        flightNumber: action.payload.flightNumber,
      };

    default:
      return state;
  }
};

// const flightsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;

//     case FLIGHTS_LIST_RECIEVED:
//       return {
//         ...state,
//         flights: {
//           arrival: action.payload.arrival,
//           departure: action.payload.departure,
//         },
//       };
//   }
// };

export default flightsReducer;
