import axios from 'axios'

const apiUrl = import.meta.env.VITE_CHIMPTOK_API_URL
const baseURL = `${apiUrl}/cycles`

type Cycle = {
  userId: string
  taskId: string
  startDate: Date
  minutesAmount: number
}

type AbandonCycleRequest = {
  userId: string
  cycleId: string
}

export default {
  // must return the cycleId
  registerNewCycle(payload: Cycle) {
    return new Promise((resolve, reject) => {
      axios
        .post(baseURL, payload)
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

  getCyclesHistory(userId: string) {
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

  interruptCycle(payload: any) {
    console.log('payload dentro', payload)
    return new Promise((resolve, reject) => {
      axios
        .patch(`${baseURL}/interrupt/${payload.cycleId}`, payload.userId)
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
