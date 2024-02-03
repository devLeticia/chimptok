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

const userTaskHistory = [
  {
    goalName: 'Become fluent in English',
    taskName: 'Read a book in English',
    startDate: new Date('2023-12-31T23:59:59'),
    cancelDate: null,
  },
  {
    goalName: 'Learn programming',
    taskName: 'Complete a coding challenge',
    startDate: new Date('2024-11-15T18:30:00'),
    cancelDate: null,
  },
  {
    goalName: 'Improve fitness',
    taskName: 'Run 5 miles',
    startDate: new Date('2023-10-01T06:00:00'),
    cancelDate: null,
  },
  {
    goalName: 'Master a musical instrument',
    taskName: 'Practice guitar scales',
    startDate: new Date('2025-01-15T12:00:00'),
    cancelDate: null,
  },
  {
    goalName: 'Enhance cooking skills',
    taskName: 'Prepare a new recipe',
    startDate: new Date('2024-09-01T19:00:00'),
    cancelDate: new Date('2024-10-01T23:59:59'),
  },
  {
    goalName: 'Explore photography',
    taskName: 'Capture a stunning landscape',
    startDate: new Date('2025-02-28T15:30:00'),
    cancelDate: null,
  },
]
export function TaskHistory() {
  function getDistanceToNow(dealineDate: Date) {
    const formattedResult = formatDistanceToNow(dealineDate, {
      addSuffix: true,
    })

    return formattedResult
  }
  return (
    <TaskHistoryContainer>
      <h1>Task History</h1>
      <TaskListContainer>
        {userTaskHistory.map((task, index) => {
          return (
            <TaskContainer key={index}>
              <IconContainer>
                <StyledCheckCircle size={18} weight="fill" />
              </IconContainer>
              <TaskDataContainer>
                <span>{getDistanceToNow(task.startDate)}</span>
                <h1>{task.taskName}</h1>
                <GoalDescription>
                  <span>{task.goalName}</span>
                </GoalDescription>
              </TaskDataContainer>
            </TaskContainer>
          )
        })}
      </TaskListContainer>
    </TaskHistoryContainer>
  )
}
