import {
  TaskHistoryContainer,
  IconContainer,
  TaskDataContainer,
  TaskContainer,
  StyledCheckCircle,
} from './styles'

export function TaskHistory() {
  return (
    <TaskHistoryContainer>
      <h1>Task History</h1>
      <TaskContainer>
        <IconContainer>
          <StyledCheckCircle size={18} weight="fill" />
        </IconContainer>
        <TaskDataContainer>
          <span>20 min ago</span>
          <h1>Read a book in English</h1>
          <span>RelatedGoal</span>
        </TaskDataContainer>
        <span>30 min</span>
      </TaskContainer>
    </TaskHistoryContainer>
  )
}
