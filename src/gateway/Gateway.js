import moment from 'moment';

const baseUrl = 'https://api.iev.aero/api/flights/11-01-2022';
// const currentDate = moment(new Date('2021-12-21')).format('DD-MM-YYYY');

export const fetchFlightList = () =>
  fetch(baseUrl).then((res) => {
    if (res.ok) {
      console.log('fetchFlightList', res.json());
      return res.json();
    }
    throw new Error('Server Error');
  });


// export const fetchFlightList = (date) => {
//   const formattedDate = moment(new Date(date)).format('DD-MM-YYYY');
//   return fetch(`${baseUrl}/${formattedDate}`).then((response) => {
//     if (!response.ok) {
//       throw new Error('Server Error');
//     }
//     return response.json();
//   });
// };