import axios from 'axios'
import authConfig from '../../../../auth.config.json'
const url = `${authConfig.api_url}/auth`

type RegisterNewUserRequest = {
  email: string
  password: string
  username: string
}

type UserLoginRequest = {
  email: string
  password: string
}

export default {
  RegisterNewUserRequest(payload: RegisterNewUserRequest) {
    console.log('entrou pra fazer a request', payload)
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/register`, payload)
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

  ConfirmEmailAccount(confirmationCode: string) {
    const encodedConfirmationCode = encodeURIComponent(confirmationCode)
    return new Promise((resolve, reject) => {
      axios
        .get(`${url}/confirm/${encodedConfirmationCode}`)
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

  LogIn(payload: UserLoginRequest) {
    console.log('entrou pra fazer a request', payload)
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/login`, payload)
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
