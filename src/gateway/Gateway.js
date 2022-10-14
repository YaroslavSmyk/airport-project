import moment from 'moment';

const baseUrl = 'https://api.iev.aero/api/flights/11-01-2022';
const currentDate = moment(new Date()).format('DD-MM-YYYY');

export const fetchFlightList = () => {
   fetch(baseUrl).then(res => {
    if (res.ok) {
      return res.json();
    }
    return null;
  });
};
