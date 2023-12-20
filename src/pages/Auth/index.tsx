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
import { ResetPassword } from './Reset Password/index';

export function Auth() {
  return (
    <Container>
      <AuthSecondaryContainer>
        <h1>Youre on the right track towards your goal!</h1>
      </AuthSecondaryContainer>
      <AuthCard>
        <ContentContainer>
          <FlagBanner size={36} color="#342d2d" weight="fill" />
          <ChimptokLogotype>CHIMPTOK</ChimptokLogotype>
          <ResetPassword />
          {/* <ForgotPassword /> */}
          {/* <Login /> */}
          {/* <RegisterNewAccount /> */}
        </ContentContainer>
      </AuthCard>
    </Container>
  )
}
