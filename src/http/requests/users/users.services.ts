import axios from 'axios'
import authConfig from '../../../../auth.config.json'
const baseURL = `${authConfig.api_url}/users`

export default {
  infoAccount(userId: string) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${baseURL}/account-info/${userId}`)
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

  toggleDarkMode(userId: string) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${baseURL}/darkmode/${userId}`)
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
