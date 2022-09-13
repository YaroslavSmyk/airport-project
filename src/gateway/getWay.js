import moment from "moment";

const baseUrl = 'https://api.iev.aero/api/flights';
const currentDate = moment(new Date('2021-12-21')).format("DD-MM-YYYY");

export const fetchFlyList = () => {
  return fetch(`${baseUrl}/${currentDate}`).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error('Server Error');
  });
};
