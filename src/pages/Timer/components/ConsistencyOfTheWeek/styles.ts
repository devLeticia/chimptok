import styled from 'styled-components'

interface ModalConsistencyProps {
  status: 'current' | 'past' | 'future'
  intensity: number
}

export const ConsistencyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`
export const LabelRow = styled.div``

export const SummaryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const DateSummary = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  &:last-child {
    text-align: right;
  }
`

export const DayBoxContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  justify-items: center;
`

export const DayBox = styled.div<ModalConsistencyProps>`
  width: 3rem; /* Set your desired width */
  aspect-ratio: 1;
  box-sizing: content-box;
  border: 3px solid
    ${(props) =>
      props.status === 'past'
        ? props.theme['yellow-600']
        : props.status === 'current'
        ? props.theme['dark-900']
        : props.theme['gray-300']}; /* Border for past days */
  border-radius: 7px;
  background-color: ${(props) =>
    props.status === 'current'
      ? props.theme.white
      : props.status === 'past' && props.intensity === 0
      ? props.theme.white
      : props.status === 'past' && props.intensity === 1
      ? props.theme['yellow-300']
      : props.status === 'past' && props.intensity === 2
      ? props.theme['yellow-400']
      : props.status === 'past' && props.intensity === 3
      ? props.theme['yellow-500']
      : props.status === 'past' && props.intensity >= 4
      ? props.theme['yellow-600']
      : props.theme['gray-100']};
  margin: auto;
`

export const DayLabel = styled.h1<ModalConsistencyProps>`
  margin-top: 1rem;
  font-family: 'Barlow Semi Condensed', sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  color: ${(props) =>
    props.status === 'current'
      ? props.theme['dark-900']
      : props.status === 'past'
      ? props.theme['dark-900']
      : props.theme['gray-500']};
`
