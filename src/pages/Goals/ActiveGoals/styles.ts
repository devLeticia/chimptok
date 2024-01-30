import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`

export const GoalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`
export const GoalIndex = styled.h1`
  text-align: right;
  width: 20px;
  line-height: 80%;
  font-size: 2rem;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-style: italic;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 900;
  margin-top: 0.5rem;
`
