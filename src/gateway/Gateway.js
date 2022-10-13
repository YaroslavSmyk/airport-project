import moment from 'moment';

const baseUrl = 'https://api.iev.aero/api/flights';

export const fetchFlightList = async date => {
  const currentDate = moment(new Date()).format('DD-MM-YYYY');
  const response = await fetch(`${baseUrl}/${currentDate}`);
  if (response.ok) {
    return response.json();
  }
  return [];
};



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

