import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-size: 6rem;
  letter-spacing: -0.3rem;
  line-height: 1rem;
  color: ${(props) => props.theme['dark-900']};
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-family: 'Roboto Mono', monospace;
    font-weight: 800;
    color: ${(props) => props.theme['dark-900']};
  }
`

export const Separator = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-weight: 700;
  padding: 2rem 0;
  color: ${(props) => props.theme['dark-900']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  font-size: 5rem;
`

export const ActiveCycleDescription = styled.h1`
  text-align: center;
  font-size: 0.95rem;
  font-weight: 900;
  span, p {
    font-weight: 600;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const CycleCountdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const TaskInProgressDisclaimer = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['dark-900']};
  h1 {
    text-transform: uppercase;
    text-align: center;
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-weight: 900;
    font-size: 1.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  h2 {
    text-transform: uppercase;
    text-align: center;
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-weight: 900;
    font-size: 1.2rem;
  }
`
export const ProgressBarContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`

export const CheckPoint = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  right: 50%;
  bottom: -30%;
  z-index: 1000;
  div {
    border-left: solid 0.18rem ${(props) => props.theme['gray-500']};;
    height: 1.25rem;
  }
`