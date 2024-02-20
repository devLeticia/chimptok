import { Login } from './Login/index'
import { RegisterNewAccount } from './Register'
import {
  Container,
  AuthSecondaryContainer,
  AuthCard,
  ContentContainer,
} from './styles'
import { ForgotPassword } from './ForgotPassword'
import { ResetPassword } from './Reset Password/index'

// import ChimpLogoFlag from '../../../public/chimp_flag_logo.svg'
import { AccountConfirmation } from './AccountConfirmation'
import { useParams } from 'react-router-dom'

export function Auth() {
  const { confirmationCode } = useParams()
  const code: string = confirmationCode || ''

  const getAuthComponent = (pathname: string) => {
    switch (pathname) {
      case '/login':
        return <Login />
      case '/signup':
        return <RegisterNewAccount />
      case `/account-confirmation/${code}`:
        return <AccountConfirmation confirmationCode={code} />
      case '/forgot-password':
        return <ForgotPassword />
      case '/reset-password':
        return <ResetPassword />
      default:
        return <Login />
    }
  }

  return (
    <Container>
      <AuthSecondaryContainer>
        <h1>{`You're on the right track towards your goal!`}</h1>
      </AuthSecondaryContainer>
      <AuthCard>
        <ContentContainer>
          {getAuthComponent(location.pathname)}
        </ContentContainer>
      </AuthCard>
    </Container>
  )
}
