import styled from 'styled-components'
import { CheckCircle } from 'phosphor-react'

export const ConfirmationContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: ${(props) => props.theme['gray-700']};
    font-size: 1rem;
  }

  gap: 2rem;

  button {
    margin-top: 2rem;
  }
`

export const SuperHeader = styled.h1`
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme['dark-900']};
  font-style: italic;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 900;
  font-size: 7rem;
  line-height: 90%;
`
export const Subtitle = styled.h3`
  color: ${(props) => props.theme['dark-900']};
  margin: 1rem 0rem;
`

export const CallToActionContainer = styled.div`
  text-align: center;
`

export const StyledCheckCircle = styled(CheckCircle)`
  color: ${(props) => props.theme['green-500']};
`
