import styled from 'styled-components'
import { CheckCircle } from '@phosphor-icons/react'

export const TaskHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;


  h1 {
    font-size: 1rem;
    color: ${(props) => props.theme['dark-900']};
    font-weight: 800;
  }

  span {
    line-height: 180%;
    font-size: 0.7rem;
    color: ${(props) => props.theme['gray-500']};
    font-weight: 700;
  }
`

export const TaskListContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 244px;
  overflow: auto;
  padding: 0.25rem;
`

export const IconContainer = styled.div`
  flex-grow: 0;
  border-right: 0.1rem solid ${(props) => props.theme['gray-300']};
  background-color: ${(props) => props.theme['gray-100']};
  overflow: hidden;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  border-radius: 7px 0 0 7px;
  
`
export const TaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  margin-right: 0.25rem;
  border: 0.1rem solid ${(props) => props.theme['gray-300']};
  box-shadow: 0px 1px 3px rgba(12, 3, 10, 0.2);
  border-radius: 7px;
  h1 {
    font-size: 0.85rem;
    color: ${(props) => props.theme['gray-700']};
    font-weight: 800;
  }
`

export const TaskDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0.75rem;
`
export const StyledCheckCircle = styled(CheckCircle)`
  color: ${(props) => props.theme['green-500']};
`
export const GoalDescription = styled.p`
  color: ${(props) => props.theme['gray-500']};
  line-height: 180%;
  font-size: 0.7rem;
  font-weight: 700;

  span {
    font-style: italic;
  }
`
