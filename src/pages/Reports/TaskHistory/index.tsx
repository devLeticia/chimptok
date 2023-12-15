import {
  TaskHistoryContainer,
  IconContainer,
  TaskDataContainer,
  TaskContainer
} from './styles'
import { CheckCircle } from 'phosphor-react'

export function TaskHistory() {
  return (
    <TaskHistoryContainer>
      <h1>Task History</h1>
      <TaskContainer>
        <IconContainer>
          <CheckCircle size={28} weight="fill" />
        </IconContainer>
        <TaskDataContainer>
          <span>20 min ago</span>
          <h1>Read a book in English</h1>
        </TaskDataContainer>
        <span>30 min</span>
      </TaskContainer>
      {/* <XCircle size={28} weight="fill" />
      <DotsThreeCircle size={28} weight="fill" /> */}
    </TaskHistoryContainer>
  )
}
