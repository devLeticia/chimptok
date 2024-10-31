import axios from 'axios'
import authConfig from '../../../../auth.config.json'
const baseURL = `${authConfig.api_url}/auth`

type RegisterNewUserRequest = {
  email?: string
  password?: string
  username?: string
}

type UserLoginRequest = {
  email: string
  password: string
}

type CancelAccountRequest = {
  userId: string
  reasonsToCancel: SelectedReasons,
  comments: string
}

type SelectedReasons = {
  foundAlternative: boolean;
  lackOfFeatures: boolean;
  poorUserInterface: boolean;
  notFeelingIt: boolean;
};

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

  cancelAccount(payload: CancelAccountRequest) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${baseURL}/cancel`, payload)
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

  getCancelationReasons() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${baseURL}/cancellation-reasons`,)
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
  
  forgotPassword(email: string) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${baseURL}/forgot-password`, {email})
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
  resetPassword(payload: any) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${baseURL}/reset-password`, payload)
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
  }
}
