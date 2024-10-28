import styled from 'styled-components'
interface GoalCardProps {
  progressPercentage: number
}
export const GoalContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  gap: 1.25rem;
`

export const CardContainer = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  padding: 1.25rem;
  border: solid 1px ${(props) => props.theme['gray-300']};
  border-radius: 9px;

  hr {
    border-top: 1px solid ${(props) => props.theme['gray-150']};
    width: 100%;
  }
`
export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const LabelRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 0.75rem;
  color: ${(props) => props.theme['gray-700']};
`

export const CardTitle = styled.h1`
  color: ${(props) => props.theme['dark-900']};
  font-size: 1rem;
  font-weight: 800;
`

export const ProgressBar = styled.div<GoalCardProps>`
  height: 0.5rem;
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 9px;

  div {
    height: 100%;
    border-radius: 9px;
    width: ${(props) =>
      props.progressPercentage}%; /* Dynamic width based on progressPercentage */
    background-color: ${(props) => props.theme['blue-500']};
  }
`
export const TaskCounterContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-weight: 700;
  font-size: 0.85rem;
  color: ${(props) => props.theme['gray-500']};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme['gray-300']};
  }
`
export const TasksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  gap: 0.25rem;
`

export const TaskDetails = styled.details`
  :hover {
    cursor: pointer;
  }

  summary {
    margin-top: 0.25rem;
    font-size: 0.75rem;
    font-weight: 800;
    color: ${(props) => props.theme['gray-700']};
  }
`
export const TaskDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`
export const TaskIndex = styled.p`
  font-family: 'Roboto Mono', monospace;
  text-align: right;
  width: 30px;
  font-weight: bold;
  letter-spacing: -0.1rem;
`

export const TaskDescription = styled.p`
  font-size: 0.85rem;
  color: ${(props) => props.theme['gray-700']};
  font-weight: 500;
  line-height: 1.5;
`

export const Task = styled.p`
  font-weight: 700;
  font-size: 0.85rem;
  color: ${(props) => props.theme['dark-900']};
`

export const StatusBadge = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  align-items: center;
  color: ${(props) => props.theme['green-500']};
  font-size: 0.75rem;
  font-weight: 800;

  p {
    color: ${(props) => props.theme['green-700']};
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: end;
`
