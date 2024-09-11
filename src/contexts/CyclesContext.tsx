// CyclesContext.jsx

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react'
import homeService from '../http/requests/home/home.service'

type Task = {
  id?: string | null
  taskName: string
  isCompleted?: boolean | null
}
type Goal = {
  id: string
  createdAt: Date // Adjust the type based on your actual data type
  deadline: Date // Adjust the type based on your actual data type
  hoursPerWeek: number
  status: number
  totalHoursSpent: number
  progressPercentage: number
  goalName: string
  tasks: Task[]
}
type UserGoals = Goal[]

type NewCycle = {
  goalName: string
  taskName: string
  createdAt: Date
  goalId: string
  taskId: string
  minutesAmount: number
}

type CycleContextProps = {
  activeCycle: NewCycle | undefined
  startNewCycle: (newCycleData: NewCycle) => void
  markCurrentCycleAsFinished: () => void
  abandonCurrentCycle: () => void
  userGoals: Goal[] | undefined
}

interface HomeDataResponse {
  activeCycle: any;
  userGoals: any;  
  data: {
    activeCycle: any;
    userGoals: any;  
  };
}

export const CyclesContext = createContext<CycleContextProps | undefined>(undefined)

export function useCycles() {
  const context = useContext(CyclesContext)
  if (!context) {
    throw new Error('----->>> useCycles must be used within a CyclesProvider')
  }
  return context
}

type CyclesProviderProps = {
  children: ReactNode
}

export const CyclesProvider: React.FC<CyclesProviderProps> = ({ children }) => {
  const [activeCycle, setActiveCycle] = useState<NewCycle | undefined>()
  const [userGoals, setUserGoals] = useState<UserGoals | undefined>()

  function startNewCycle(newCycleData: NewCycle) {
    setActiveCycle(newCycleData)
  }

  function markCurrentCycleAsFinished() {
    // setActiveCycle(undefined)
    setActiveCycle(undefined)
  }

  function abandonCurrentCycle() {
    setActiveCycle(undefined)
  }

  const contextValue: CycleContextProps = {
    activeCycle,
    startNewCycle,
    markCurrentCycleAsFinished,
    abandonCurrentCycle,
    userGoals,
  }

  async function getHomeData() {
    // loading.open()
    const userId = localStorage.getItem('user_id')
    if (userId !== null) {
      try {
        const resp = await homeService.getHomeData(userId)
        // Type assertion to tell TypeScript the type of resp
        const responseData = resp as HomeDataResponse;
  
        if (responseData.data) {
          setActiveCycle(responseData.data.activeCycle)
          setUserGoals(responseData.data.userGoals)
        }
        // console.log(responseData)
      } catch (err) {
        console.error(err)
      } finally {
        // loading.close()
      }
    }
  }
  useEffect(() => {
    getHomeData()
  }, [])

  return (
    <CyclesContext.Provider value={contextValue}>
      {children}
    </CyclesContext.Provider>
  )
}
