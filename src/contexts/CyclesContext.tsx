import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
} from 'react'
import homeService from '../http/requests/home/home.service'
import cyclesService from '../http/requests/cycles/cycles.service'

type Task = {
  id?: string | null
  taskName: string
  isCompleted?: boolean | null
}
type Goal = {
  isCompleted: boolean
  id: string
  createdAt: Date 
  deadline: Date 
  hoursPerWeek: number
  status: number
  totalHoursSpent: number
  progressPercentage: number
  goalName: string
  tasks: Task[]
}
type UserGoals = Goal[]

type NewCycle = {
  id: string
  goalName: string
  taskName: string
  createdAt: Date
  goalId: string
  taskId: string
  minutesAmount: number
}
type DayConsistency = {
  day: number
  name: string
  date: string
  intensity: number
  totalHoursInTasks: number
  expectedHours: number
}

type ConsistencyOfTheWeek = {
  year: number
  weekOfTheYear: number
  dayOfTheYear: number
  todayDate: string
  weekConsistency: DayConsistency[]
}

type CycleContextProps = {
  activeCycle: NewCycle | undefined
  startNewCycle: (newCycleData: NewCycle) => void
  markCurrentCycleAsFinished: () => void
  userGoals: Goal[] | undefined,
  consistencyOfTheWeek: any,
  progressOfTheDay: any
  activeGoals: any
  getHomeData: () => void,
  interruptCycle: (paylaod: any) => void
}

interface HomeDataResponse {
  activeCycle: any;
  userGoals: any;  
  activeGoals: any;
  consistencyOfTheWeek: any
  progressOfTheDay: any
  data: {
    activeCycle: any;
    userGoals: any; 
    consistencyOfTheWeek: any; 
    progressOfTheDay: any; 
  };
}

export const CyclesContext = createContext<CycleContextProps | undefined>(undefined)

export function useCycles() {
  const context = useContext(CyclesContext)
  if (!context) {
    throw new Error('useCycles must be used within a CyclesProvider')
  }
  return context
}

interface CyclesProviderProps {
  children: ReactNode
}

export function CyclesProvider({ children }: CyclesProviderProps) {
  const [activeCycle, setActiveCycle] = useState<NewCycle | undefined>(undefined)
  const [userGoals, setUserGoals] = useState<UserGoals>([])
  const [consistencyOfTheWeek, setConsistencyOfTheWeek] = useState<ConsistencyOfTheWeek>()
  const [progressOfTheDay, setProgressOfTheDay] = useState<any>()
  const [activeGoals, setActiveGoals] = useState<any>()

  async function getHomeData(): Promise<void> {
    const userId = localStorage.getItem('user_id');
    if (userId) {
      const homeData = await homeService.getHomeData(userId)  as HomeDataResponse;;
      if (homeData) {
        console.log('homeData:', homeData)

        setActiveCycle(homeData.data.activeCycle)
        setUserGoals(homeData.data.userGoals)
        setConsistencyOfTheWeek(homeData.data.consistencyOfTheWeek)
        setProgressOfTheDay(homeData.data.progressOfTheDay)
        setActiveGoals(homeData.data.userGoals)
      }
    }
  }


  function startNewCycle(newCycleData: NewCycle) {
    setActiveCycle(newCycleData)
  }

  function markCurrentCycleAsFinished() {
    setActiveCycle(undefined)
  }

  async function interruptCycle(payload: any) {
    await cyclesService.interruptCycle(payload)
    .then(() => {
      console.log('consegui interromper')
      setActiveCycle(undefined)
    }).catch(() => {

    }).finally(() => {
      console.log('concluiu')
    })
  }

  return (
    <CyclesContext.Provider
      value={{
        startNewCycle,
        markCurrentCycleAsFinished,
        interruptCycle,
        getHomeData,
        activeCycle,
        userGoals,
        consistencyOfTheWeek,
        progressOfTheDay,
        activeGoals,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
