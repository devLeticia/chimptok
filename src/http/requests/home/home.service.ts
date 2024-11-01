import axios from 'axios'
const apiUrl = import.meta.env.VITE_CHIMPTOK_API_URL;
const baseURL = `${apiUrl}/home`
export default {
  // get data needed to load home
  getHomeData(userId: string) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${baseURL}/${userId}`)
        .then((response) => {
          if (response.status === 200) {
            resolve(response.data)
          } else {
            reject(response)
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}
