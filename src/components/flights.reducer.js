import { FLIGHTS_DATA_RECEIVED } from './flights.actions';

const initialState = {
  flights: {
    arrival: [],
    departure: [],
  },
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;

    case FLIGHTS_DATA_RECEIVED:
      return {
        ...state,
        flights: {
          arrival: action.payload.arrival,
          departure: action.payload.departure,
        },
      };
  }
};

export default flightsReducer;
