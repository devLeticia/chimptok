import styled from 'styled-components'
import { CheckCircle, PlayCircle, XCircle } from '@phosphor-icons/react'

export const TaskHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  padding: 2rem;
  border: solid 1px ${(props) => props.theme['gray-300']};
  border-radius: 9px;

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
  height: 244px;
  overflow: auto;
  gap: 1rem;
`

export const IconContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10; /* Make sure the icon stays above the line */

  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 600%;
    background-color: ${(props) => props.theme['gray-300']};
    top: 100%;
    transform: translateY(-50%);
    z-index: -10; /* Ensure the line appears behind the icon */
  }

  /* Remove the line only for the last visible icon */
  &:not(:last-of-type)::after {
    display: block;
  }

  &:last-of-type::after {
    display: none;
  }
`;


export const SessionTitle = styled.h1`
  font-size: 1rem;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 800;
`

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  padding: 0.25rem 1rem;
`

export const StyledCheckCircle = styled(CheckCircle)`
  color: ${(props) => props.theme['green-500']};
  background-color: white;
`

export const StyledPlayCircle = styled(PlayCircle)`
  color: ${(props) => props.theme['orange-500']};
  background-color: white;
`

export const StyledXCircle = styled(XCircle)`
  color: ${(props) => props.theme['red-500']};
  background-color: white;
`

export const GoalDescription = styled.p`
  color: ${(props) => props.theme['gray-500']};
  line-height: 180%;
  font-size: 0.7rem;
  font-weight: 700;

  span {
    color: ${(props) => props.theme['gray-700']};
  }
`
