import styled from 'styled-components'

export const GoalRankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  width: 100%;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  padding: 2rem;
  border: solid 1px ${(props) => props.theme['gray-300']};
  border-radius: 9px;

  hr {
    border-top: 1px solid ${(props) => props.theme['gray-150']};
    width: 100%;
  }
`
export const SessionTitle = styled.h1`
  font-size: 1rem;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 800;
  margin-bottom: 1rem;
`

export const GoalContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-items: center;
`
export const RankingNumber = styled.div`
  flex-grow: 0;
  text-align: right;
  font-size: 2rem;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-style: italic;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 900;
`

export const LabelsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  justify-items: end;
  width: 100%;

  p {
    line-height: 180%;
    text-align: right;
    font-size: 0.75rem;
    color: ${(props) => props.theme['gray-500']};
    font-weight: 700;
  }
  h1 {
    font-size: 0.85rem;
    color: ${(props) => props.theme['gray-700']};
    font-weight: 800;
  }
`
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ProgressBar = styled.div`
  height: 0.5rem;
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 9px;

  div {
    height: 100%;
    border-radius: 9px;
    width: 70%;
    background-color: ${(props) => props.theme['blue-500']};
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex-grow: 1;
`
