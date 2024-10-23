import { EnvelopeSimple } from '@phosphor-icons/react'
import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  font-style: italic;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 900;
  font-family: 'Barlow Semi Condensed', sans-serif;
`
export const Subtitle = styled.h1`
  font-size: 0.95rem;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 600;
  margin-bottom: 1rem;
`
export const FormContainer = styled.div`
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export const ConnectWithGoogleButton = styled.button`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  border: solid 2px ${(props) => props.theme['dark-900']};
  width: 100%;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: 'Plus Jakarta Sans', sans-serif;
  cursor: pointer;
  background-color: ${(props) => props.theme['dark-900']};
  color: white;
  padding: 1rem 2rem;
  white-space: nowrap;

  :hover {
    background-color: ${(props) => props.theme['dark-800']};
    cursor: pointer;
  }
`

export const DividerWithText = styled.div`
  margin-top: 2rem;
  font-size: 0.85rem;
  color: ${(props) => props.theme['gray-500']};
  font-weight: 600;
  width: 100%;
  display: flex;
  align-items: center;

  ::before,
  ::after {
    flex: 1;
    content: '';
    border: 1px solid ${(props) => props.theme['gray-300']};
    margin: 1rem 1rem 1rem 1rem;
  }
`

export const PasswordValidations = styled.div`
  padding-left: 2rem;
  display: flex;
  gap: 0.5rem;
  justify-items: start;
  align-items: center;
  width: 100%;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${(props) => props.theme['gray-500']};
`

export const ValidationsListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`

export const MinorText = styled.p`
  font-size: 0.85rem;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 600;
  margin-top: 4rem;

  span {
    text-decoration: underline;

    :hover {
      color: ${(props) => props.theme['yellow-600']};
      cursor: pointer;
    }
  }
`
export const RegistrationSuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  align-items: center;
`