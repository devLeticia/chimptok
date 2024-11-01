import axios from 'axios'
const apiUrl = import.meta.env.VITE_CHIMPTOK_API_URL;
const baseURL = `${apiUrl}/users`

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
