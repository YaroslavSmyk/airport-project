import moment from 'moment';

const baseUrl = 'https://api.iev.aero/api/flights';
// let currentDate = moment(new Date()).format('DD-MM-YYYY');

// export const fetchFlightList = (currentDate) => {
//   fetch(`${baseUrl}/${currentDate}`).then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//     throw new Error('Server Error');
//   })
//   // .then(response => response.filter(el => moment(el.localtime).format('DD-MM-YYYY') === currentDate))
//   .catch(err => alert(err.message))
// }


// export const fetchFlightList = async(currentDate) => {
//  const response = await fetch(`${baseUrl}/${currentDate}`)
//     if (response.ok) {
//       return response.json();
//     }
//     return [];
//   };

export const fetchFlightList = (direction, currentDay) =>
  // console.log('fetch direction', direction);
// console.log(currentDay);
fetch(`${baseUrl}/${currentDay}`)
  .then(response => {
    if (response.ok) {
      // console.log('ok');
      // console.log(response.json());
      return response.json();
    } throw new Error('Failed to load data flights');
  })
  .then(dataFlights => dataFlights.body[`${direction.slice(0, -1)}`]);