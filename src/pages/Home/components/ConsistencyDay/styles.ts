import styled from 'styled-components'

export const ConsistencyDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  gap: 1rem;
`
export const ConsistencyBox = styled.div`
  width: 3rem;
  height: 3rem;
  border: solid 2px ${(props) => props.theme['gray-500']};
  border-radius: 7px;
  background-color: white;
`

export const DayLabel = styled.h4`
  color: ${(props) => props.theme['gray-500']};
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 600;
`
