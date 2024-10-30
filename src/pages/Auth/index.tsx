import { Login } from './Login/index'
import { RegisterNewAccount } from './Register'
import { Container, AuthThemeCard, AuthCard, ContentContainer, LogoContainer } from './styles'
import { ForgotPassword } from './ForgotPassword'
import { ResetPassword } from './Reset Password/index'
import { ComingSoon } from './ComingSoon/index'
import ChimpLogoFlag from '../../../public/chimp_flag_logo.svg'
import { AccountConfirmation } from './AccountConfirmation'
import { useParams } from 'react-router-dom'
import PeaceCard from '../../../public/peace-card.svg'
import logotype from '../../../public/logos/horizontal_logotype_white.svg'

export function Auth() {
  const { confirmationCode, resetToken } = useParams()
  const code: string = confirmationCode || ''
  const token: string = resetToken || ''

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
      case `/reset-password/${token}`:
        return <ResetPassword resetToken={token}/>
      case '/coming-soon':
        return <ComingSoon />
      default:
        // return <Login />
        return <ComingSoon />
    }
  }

  function openChimptokWebsite() {
    window.open('http://chimptok.com/', '_blank')
  }

  return (
    <Container>
      <LogoContainer>
        <img
          src={logotype}
          alt="Coolest Chimp logo smiling to you"
          className="logo"
          height={36}
          onClick={openChimptokWebsite}
        />
      </LogoContainer>
      <AuthThemeCard>
        <img src={PeaceCard} alt="Coolest Chimp logo smiling to you" />
      </AuthThemeCard>
      <AuthCard>
        <ContentContainer>
          {getAuthComponent(location.pathname)}
        </ContentContainer>
      </AuthCard>
    </Container>
  )
}
