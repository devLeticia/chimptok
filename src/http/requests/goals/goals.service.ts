import axios from 'axios'

const apiUrl = import.meta.env.VITE_CHIMPTOK_API_URL;
const baseURL = `${apiUrl}/goals`

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

  setGoalAsCompleted(payload: any) { 
    return new Promise((resolve, reject) => {
      axios
        .put(`${baseURL}/${payload.goalId}/completed`, { completed: payload.isCompleted }) // Ensure correct payload structure
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
  }
}
