import axios from 'axios'
import authConfig from '../../../../auth.config.json'
const baseURL = `${authConfig.api_url}/home`
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
