import {
  Card,
  CardTitle,
  SupportContainer,
  SaveButton,
  SupportText,
} from './styles'

export function Support() {
  return (
    <Card>
      <CardTitle>Support</CardTitle>
      <SupportContainer>
        <SupportText>
          {`Got problems or questions?`} <br />{' '}
          {`Shoot us a message at contact@chimptok.com or hit Report Problem.`}
          <br /> {` We've got your back!`}
        </SupportText>
      </SupportContainer>
      <SaveButton>Report Problem</SaveButton>
    </Card>
  )
}
