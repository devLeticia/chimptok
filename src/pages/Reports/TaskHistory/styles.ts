import styled from 'styled-components'
import { CheckCircle } from 'phosphor-react'

export const TaskHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    font-size: 1rem;
    color: ${(props) => props.theme['dark-900']};
    font-weight: 800;
    margin-bottom: 1.5rem;
  }

  span {
    line-height: 180%;
    font-size: 0.7rem;
    color: ${(props) => props.theme['gray-500']};
    font-weight: 700;
  }
`

export const IconContainer = styled.div`
  flex-grow: 0;
`
export const TaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

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
`
export const StyledCheckCircle = styled(CheckCircle)`
  color: ${(props) => props.theme['green-500']};
`
