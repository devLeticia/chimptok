import {
  TaskHistoryContainer,
  IconContainer,
  TaskDataContainer,
  TaskContainer,
  StyledCheckCircle,
  StyledPlayCircle,
  StyledXCircle,
  GoalDescription,
  TaskListContainer,
  SessionTitle,
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
          const responseData = resp as CyclesHistoryResponse;
          if (responseData.data.length > 0) {
            setUserTaskHistory(responseData.data);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  useEffect(() => {
    getTaskHistory();
  }, [])

  function getTaskStatus(cycle: Cycle) {
    const now = new Date();
    const taskStart = new Date(cycle.createdAt);
    const taskEnd = new Date(taskStart.getTime() + cycle.minutesAmount * 60000); // Calculate end time

    if (cycle.interruptedAt) {
      return { icon: <StyledXCircle size={18} weight="fill" />, color: 'red' };
    } else if (now >= taskEnd) {
      return { icon: <StyledCheckCircle size={18} weight="fill" />, color: 'green' };
    } else {
      return { icon: <StyledPlayCircle size={18} weight="fill" />, color: 'orange' };
    }
  }

  return (
    <TaskHistoryContainer>
      <SessionTitle>Task History</SessionTitle>
      <TaskListContainer>
        {userTaskHistory.map((cycle, index) => {
          const { icon, color } = getTaskStatus(cycle);

          return (
            <TaskContainer key={index}>
              <IconContainer style={{ color }}>
                {icon}
              </IconContainer>
              <TaskDataContainer>
                <span>{getDistanceToNow(new Date(cycle.createdAt))}</span>
                <h1>{cycle.task.taskName}</h1>
                <GoalDescription>
                  in <span>{cycle.task.goal.goalName}</span>
                </GoalDescription>
              </TaskDataContainer>
            </TaskContainer>
          )
        })}
      </TaskListContainer>
    </TaskHistoryContainer>
  )
}
