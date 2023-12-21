import styled from 'styled-components'
import { CheckCircle } from 'phosphor-react'

export const ConfirmationContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: ${(props) => props.theme['gray-700']};
    font-size: 1rem;
  }
`

export const SuperHeader = styled.h1`
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme['dark-900']};
  font-style: italic;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 900;
  font-size: 2.5rem;
`
export const Subtitle = styled.h3`
  color: ${(props) => props.theme['dark-900']};
  margin: 1rem 0rem;
`

export const CallToActionContainer = styled.div`
  height: 20rem;
  position: absolute;
  bottom: 0;
  width: 36rem;
  bottom: 0px;
  justify-self: end;
  display: flex;
  flex-direction: column;
  justify-content: end;
  border-radius: 12px 12px 0px 0px;
  padding: 2rem 2rem 2rem 2rem;
  background-color: ${(props) => props.theme['yellow-500']};
`

export const StyledCheckCircle = styled(CheckCircle)`
  color: ${(props) => props.theme['green-500']};
`
