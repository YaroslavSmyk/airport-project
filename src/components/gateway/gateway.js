import moment from 'moment';

const baseUrl = 'https://api.iev.aero/api/flights';

export const getFlights = (date) => {
  const formattedDate = moment(new Date(date)).format('DD-MM-YYYY');
  return fetch(`${baseUrl}/${formattedDate}`).then((res) => {
    if (!res.ok) {
      throw new Error('Failed to load data flights');
    }
    return res.json();
  });
};
