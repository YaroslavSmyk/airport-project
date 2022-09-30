import moment from 'moment';

const baseUrl = 'https://api.iev.aero/api/flights/11-01-2022';
// const currentDate = moment(new Date('2021-12-21')).format('DD-MM-YYYY');

// export const fetchFlightList = () =>
//   fetch(baseUrl).then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//     throw new Error('Server Error');
//   });


export const fetchFlightList = async() => {
 const response = await fetch(baseUrl)
    if (response.ok) {
      return response.json();
    }
    return [];
  };
