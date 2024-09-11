import axios from 'axios'
import authConfig from '../../../../auth.config.json'
const baseURL = `${authConfig.api_url}/auth`

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
  registerNewUser(payload: RegisterNewUserRequest) {
    // console.log('entrou pra fazer a request', payload)
    return new Promise((resolve, reject) => {
      axios
        .post(`${baseURL}/register`, payload)
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

  confirmEmailAccount(confirmationCode: string) {
    const encodedConfirmationCode = encodeURIComponent(confirmationCode)
    return new Promise((resolve, reject) => {
      axios
        .get(`${baseURL}/confirm/${encodedConfirmationCode}`)
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

  login(payload: UserLoginRequest) {
    // console.log('entrou pra fazer a request', payload)
    return new Promise((resolve, reject) => {
      axios
        .post(`${baseURL}/login`, payload)
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

  logOut(userId: string) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${baseURL}/logout/${userId}`)
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

  cancelAccount(feedbackData: any) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${baseURL}/cancel/${feedbackData.userId}`)
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
