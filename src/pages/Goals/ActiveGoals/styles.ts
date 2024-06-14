import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  min-height: 60vh;
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

export const HeaderCTA = styled.h1`
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.theme['dark-900']};
  font-style: italic;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 900;
  color: ${(props) => props.theme['dark-900']};
  line-height: 90%;
`
export const TextCTA = styled.p`
  text-align: center;
  font-size: 1rem;
  line-height: 150%;
  color: ${(props) => props.theme['dark-800']};
`
