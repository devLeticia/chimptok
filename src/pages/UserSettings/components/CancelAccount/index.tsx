import {
  Card,
  CardTitle,
  Subtitle,
  ButtonsContainer,
  DeleteAccountButton,
  NeverMindButton,
  Container,
} from './styles'

export function CancelAccount() {
  return (
    <div>
      <Card>
        <CardTitle>Cancel Account</CardTitle>
        <Container>
          <Subtitle>Tell Chimp why you don’t wanna stick with it.</Subtitle>
          <p>It does not help me</p>
          <p>It does not help me</p>
          <p>It does not help me</p>
          <p>It does not help me</p>
        </Container>
        <Container>
          <Subtitle>Vent your insatisfaction with Chimptok</Subtitle>
          <textarea>gwpoigwoie</textarea>
        </Container>
        <Container>
          <Subtitle>What will happen to your account?</Subtitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            support@chimptok.com enim ad minim veniam.
          </p>
        </Container>
        <ButtonsContainer>
          <DeleteAccountButton>Never Mind</DeleteAccountButton>
          <NeverMindButton>Delete Account</NeverMindButton>
        </ButtonsContainer>
      </Card>
    </div>
  )
}
