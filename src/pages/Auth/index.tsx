import { Login } from './Login/index'
import { RegisterNewAccount } from './Register'
import { FlagBanner } from 'phosphor-react'
import {
  Container,
  AuthSecondaryContainer,
  AuthCard,
  ChimptokLogotype,
  ContentContainer,
} from './styles'
import { ForgotPassword } from './ForgotPassword'
import { ResetPassword } from './Reset Password/index'

// import { useNavigate } from "react-router-dom";

const getAuthComponent = (pathname: string) => {
  switch (pathname) {
    case '/login':
      return <Login />
    case '/signup':
      return <RegisterNewAccount />
    case '/forgot-password':
      return <ForgotPassword />
    case '/reset-password':
      return <ResetPassword />
    default:
      return <Login />
  }
}

export function Auth() {
  return (
    <Container>
      <AuthSecondaryContainer>
        <h1>{`You're on the right track towards your goal!`}</h1>
      </AuthSecondaryContainer>
      <AuthCard>
        <ContentContainer>
          <FlagBanner size={36} color="#342d2d" weight="fill" />
          <ChimptokLogotype>CHIMPTOK</ChimptokLogotype>
          {getAuthComponent(location.pathname)}
        </ContentContainer>
      </AuthCard>
    </Container>
  )
}
