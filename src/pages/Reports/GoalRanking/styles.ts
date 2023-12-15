import styled from 'styled-components'

export const GoalRankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const SessionTitle = styled.h1`
  font-size: 1rem;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 800;
  margin-bottom: 2rem;
`

export const GoalContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`
export const RankingNumber = styled.div`
  flex-grow: 0;
  text-align: right;
  font-size: 1.05rem;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-style: italic;
  color: ${(props) => props.theme['gray-500']};
  font-weight: 700;
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
    font-size: 0.85rem;
    color: ${(props) => props.theme['gray-500']};
    font-weight: 700;
  }
  h1 {
    font-size: 1rem;
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
  height: 0.65rem;
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
