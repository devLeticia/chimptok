import axios from 'axios'
import authConfig from '../../../../auth.config.json'
const baseURL = `${authConfig.api_url}/goals`

type Task = {
  id?: string | null
  taskName: string
  isCompleted?: boolean | null
}

type Goal = {
  goalId: string | null
  userId: string
  goalName: string
  deadline: Date
  weeklyHours: number
  tasks: Task[]
}

type BaseGoalRequest = {
  goalId: string
  userId: string
}

export default {
  // register a new goal or edit a goal that already exists
  registerGoal(payload: Goal) {
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
  updateGoal(payload: Goal) {
    return new Promise((resolve, reject) => {
      axios
        .put(`${baseURL}/${payload.goalId}`, payload)
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
  

  // return all goals of a given user with it's associated tasks
  getGoalsHistory(userId: string) {
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

  // will delete user's goal
  deleteGoal(goalId: string) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${baseURL}/${goalId}`)
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

  // will a goal as complete, no matter how much
  setGoalAsCompleted(payload: BaseGoalRequest) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${baseURL}/complete`, payload)
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
