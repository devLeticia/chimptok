import styled from 'styled-components'

export const YaarConsistency = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
`
export const Title = styled.h1`
  font-size: 1rem;
`

export const RangeLabel = styled.p`
  font-size: 0.85rem;
  color: ${(props) => props.theme['gray-500']};
`

export const YearGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(25, 1fr); /* 15 columns for 75 squares */
  gap: 0.5rem;
`

export const DaySquare = styled.div<{
  past: boolean
  current: boolean
  intensity: number
}>`
  width: 100%;
  padding-top: 100%; /* 1:1 aspect ratio */
  box-sizing: content-box;
  background-color: ${(props) =>
    props.current
      ? props.theme.white
      : props.past
      ? props.theme['yellow-400']
      : props.theme['gray-200']};
  border-radius: 3px; /* Optional: Add rounded corners */
  border: 2px solid
    ${(props) =>
      props.past
        ? props.theme['yellow-600']
        : props.current
        ? props.theme['dark-900']
        : props.theme['gray-200']}; /* Border for past days */
`
