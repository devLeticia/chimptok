import {
  TaskHistoryContainer,
  IconContainer,
  TaskDataContainer,
  TaskContainer,
  StyledCheckCircle,
  GoalDescription,
  TaskListContainer,
} from './styles'
import { formatDistanceToNow } from 'date-fns'
import { useEffect, useState } from 'react'
import cyclesService from '../../../http/requests/cycles/cycles.service'

type Goal = {
  createdAt: Date
  deadline: Date
  goalName: string
  id: string
  isFinished: boolean
  updatedAt: Date
  userId: string
  weeklyHours: number
}
type Task = {
  id: string
  taskName: string
  createdAt: Date
  updatedAt: Date
  isCompleted: boolean
  userId: string
  goalId: string
  goal: Goal
}

type Cycle = {
  id: string
  createdAt: Date
  minutesAmount: number
  finishAt: Date
  interruptedAt: Date | null
  taskId: string
  userId: string
  task: Task
}

interface CyclesHistoryResponse {
  data: Cycle[];
}

export function TaskHistory() {
  const [userTaskHistory, setUserTaskHistory] = useState<Cycle[]>([])

  function getDistanceToNow(dealineDate: Date) {
    const formattedResult = formatDistanceToNow(dealineDate, {
      addSuffix: true,
    })

    return formattedResult
  }

 
function getTaskHistory() {
  const userId = localStorage.getItem('user_id');
  if (userId) {
    cyclesService
      .getCyclesHistory(userId)
      .then((resp) => {
        // Type assertion to inform TypeScript about the shape of resp
        const responseData = resp as CyclesHistoryResponse;

        if (responseData.data.length > 0) {
          setUserTaskHistory(responseData.data);
          // console.log('Successfully retrieved cycle history')
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

  useEffect(() => {
    getTaskHistory()
  }, [])

  return (
    <TaskHistoryContainer>
      <h1>Task History</h1>
      <TaskListContainer>
        {userTaskHistory.map((cycle, index) => {
          return (
            <TaskContainer key={index}>
              <IconContainer>
                <StyledCheckCircle size={18} weight="fill" />
              </IconContainer>
              <TaskDataContainer>
                <span>{getDistanceToNow(new Date(cycle.createdAt))}</span>
                <h1>{cycle.task.taskName}</h1>
                <GoalDescription>
                  in {''}
                  <span>{cycle.task.goal.goalName}</span>
                </GoalDescription>
              </TaskDataContainer>
            </TaskContainer>
          )
        })}
      </TaskListContainer>
    </TaskHistoryContainer>
  )
}
