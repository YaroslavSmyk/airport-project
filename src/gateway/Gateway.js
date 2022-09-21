import moment from 'moment';

const baseUrl = 'https://api.iev.aero/api/flights';
const currentDate = moment(new Date('2021-12-21')).format('DD-MM-YYYY');

export const fetchFlightList = () =>
  fetch(`${baseUrl}/${currentDate}`).then((res) => {
    if (res.ok) {
      console.log('fetchFlightList', res.json());
      return res.json();
    }
    throw new Error('Server Error');
  });
