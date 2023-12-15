import { Card, CardTitle, SupportContainer, SaveButton, SupportText } from './styles'

export function Support() {
  return (
    <Card>
      <CardTitle>Support</CardTitle>
      <SupportContainer>
        <SupportText>
          ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </SupportText>
        <SaveButton>Report a problema</SaveButton>
      </SupportContainer>
    </Card>
  )
}
