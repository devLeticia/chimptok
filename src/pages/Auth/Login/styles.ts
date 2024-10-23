import styled from 'styled-components'

export const AuthTitle = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  font-style: italic;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 900;
  font-family: 'Barlow Semi Condensed', sans-serif;
`
export const AuthSubtitle = styled.h1`
  font-size: 0.85rem;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 600;
  margin-bottom: 2rem;
`
export const FormContainer = styled.div`
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`
export const CreateAccountButton = styled.button`
  border: solid 2px ${(props) => props.theme['yellow-500']};
  width: 100%;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  font-family: 'Plus Jakarta Sans', sans-serif;
  cursor: pointer;
  background-color: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme['dark-900']};
  padding: 1rem 2rem;
  white-space: nowrap;

  :hover {
    background-color: ${(props) => props.theme['yellow-600']};
    cursor: pointer;
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
export const LogInButton = styled.button`
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
    background-color: solid 2px ${(props) => props.theme['gray-700']};
    cursor: pointer;
  }
`

export const DividerWithText = styled.div`
  margin-top: 4rem;
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

export const ForgotPasswordLink = styled.span`
  align-self: end;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme['gray-500']};
  :hover {
    color: ${(props) => props.theme['yellow-500']};
    cursor: pointer;
  }
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
