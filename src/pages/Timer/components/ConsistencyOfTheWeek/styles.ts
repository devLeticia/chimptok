import styled from 'styled-components'

export const ConsistencyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  p {
    font-size: 0.8rem;
    color: ${(props) => props.theme['gray-500']};
  }
`
export const LabelRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const DayBoxContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  justify-items: center;
`

export const DayBox = styled.div<{
  past: boolean
  current: boolean
  intensity: number
}>`
  width: 3rem; /* Set your desired width */
  aspect-ratio: 1;
  box-sizing: content-box;
  border: 3px solid
    ${(props) =>
      props.past
        ? props.theme['yellow-600']
        : props.current
        ? props.theme['dark-900']
        : props.theme['gray-200']}; /* Border for past days */
  border-radius: 7px;
  background-color: ${(props) =>
    props.current
      ? props.theme.white
      : props.past
      ? props.theme['yellow-400']
      : props.theme['gray-200']};
  margin: auto;
`

export const DayLabel = styled.h1<{
  past: boolean
  current: boolean
  intensity: number
}>`
  margin-top: 1rem;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  color: ${(props) =>
    props.current
      ? props.theme['dark-900']
      : props.past
      ? props.theme['dark-800']
      : props.theme['gray-300']};
`
