import { Login } from './Login/index'
import { RegisterNewAccount } from './Register'
import {
  Container,
  AuthSecondaryContainer,
  AuthCard,
  ChimptokLogotype,
  ContentContainer,
} from './styles'

export function Auth() {
  return (
    <Container>
      <AuthSecondaryContainer>
        <h1>Youre on the right track towards your goal!</h1>
      </AuthSecondaryContainer>
      <AuthCard>
        <ContentContainer>
          <ChimptokLogotype>CHIMPTOK</ChimptokLogotype>
          <Login />
          {/* <RegisterNewAccount/> */}
        </ContentContainer>
      </AuthCard>
    </Container>
  )
}
