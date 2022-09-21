import {
  GET_FILTERED_FLIGHTS_LIST,
  FLIGHTS_LIST_RECIEVED,
} from './flights.actions';

const initialState = {
  flightsList: [],
  flightNumber: null,
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILTERED_FLIGHTS_LIST:
      return {
        ...state,
        flightsList: action.payload.flightsList,
      };
    case FLIGHTS_LIST_RECIEVED:
      return {
        ...state,
        flightNumber: action.payload.flightNumber,
      };
    default:
      return state;
  }
};

export default flightsReducer;
