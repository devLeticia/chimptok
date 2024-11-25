import axios from 'axios'
const apiUrl = import.meta.env.VITE_CHIMPTOK_API_URL;
const baseURL = `${apiUrl}/home`;

export default {
  getHomeData(userId: string) {
    const todayDate = new Date();
    return new Promise((resolve, reject) => {
      axios
        .get(`${baseURL}/${userId}`, {
          params: {
            todayDate,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            resolve(response.data);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
