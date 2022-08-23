const baseUrl = 'https://api.iev.aero/api/flights/11-01-2022'

export const fetchFlyList = () => {
    return fetch(baseUrl).then((res) => {
      if (res.ok) {
        return res.json();
      }
      w
    });
  };