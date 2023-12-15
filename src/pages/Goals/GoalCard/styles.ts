import styled from 'styled-components'

export const GoalContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  gap: 2rem;
  margin-top: 3rem;

  button {
    width: 300px;
    border: 0;
    border-radius: 8px;
    display: inline-block;
    justify-content: center;
    align-items: center;
    font-size: 0.85rem;
    font-weight: 800;
    font-family: 'Plus Jakarta Sans', sans-serif;
    cursor: pointer;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['yellow-500']};
    color: ${(props) => props.theme['dark-900']};
    padding: 0.5rem 1.5rem;

    :hover {
      background-color: ${(props) => props.theme['blue-500']};
      cursor: pointer;
    }
  }
`
export const GoalIndex = styled.h1`
  text-align: right;
  line-height: 80%;
  font-size: 3rem;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-style: italic;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 900;
`
export const CardContainer = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  gap: 0.75rem;
  flex-direction: column;
  padding: 2rem;
  border: solid 2px ${(props) => props.theme['gray-300']};
  border-radius: 9px;

  hr {
    border-top: 1px solid ${(props) => props.theme['gray-300']};
    width: 100%;
  }
`
export const LabelRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 0.85rem;
  color: ${(props) => props.theme['gray-500']};
`

export const CardTitle = styled.h1`
  color: ${(props) => props.theme['dark-900']};
  font-size: 1.05rem;
  font-weight: 800;
`

export const ProgressBar = styled.div`
  height: 0.75rem;
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 9px;

  div {
    height: 100%;
    border-radius: 9px;
    width: 70%;
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
export const TaskListContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 2rem;
  gap: 1rem;
  display: none;
`
export const TaskIndex = styled.p`
  font-family: 'Roboto Mono', monospace;
  font-size: 0.85rem;
  display: flex;
  justify-content: center;
  color: white;
  background-color: ${(props) => props.theme['dark-900']};
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 100%;
  line-height: 200%;
`
export const Task = styled.p`
  font-weight: 700;
  font-size: 0.85rem;
  color: ${(props) => props.theme['dark-900']};
`
