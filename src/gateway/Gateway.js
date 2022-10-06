import moment from 'moment';

const baseUrl = 'https://api.iev.aero/api/flights/11-01-2022';
// let currentDate = moment(new Date()).format('DD-MM-YYYY');

// export const fetchFlightList = (currentDate) => {
//   fetch(`${baseUrl}/${currentDate}`).then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//     throw new Error('Server Error');
//   })
//   .then(response => response.filter(el => moment(el.localtime).format('DD-MM-YYYY') === currentDate))
//   .catch(err => alert(err.message))
// }

export const fetchFlightList = async(date) => {
 const response = await fetch(baseUrl)
    if (response.ok) {
      return response.json();
    }
    return [];
  };
