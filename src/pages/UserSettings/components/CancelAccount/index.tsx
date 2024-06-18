import { TextArea } from '../../../../components/Textarea'
import { CheckBox } from './../../../../components/Checkbox/index'
import {
  Card,
  CardTitle,
  Subtitle,
  ButtonsContainer,
  DeleteAccountButton,
  NeverMindButton,
  Container,
} from './styles'

interface CancelAccountProps {
  onCancelClick: () => void // Assuming onCancelClick is a function with no parameters
}
export function CancelAccount({ onCancelClick }: CancelAccountProps) {
  return (
    <div>
      <Card>
        <CardTitle>Cancel Account</CardTitle>
        <Container>
          <Subtitle>{`Changing paths? Let us know why Chimp isn't swinging your way:`}</Subtitle>
          <CheckBox label={'Found a better solution elsewhere'}></CheckBox>
          <CheckBox label={`Features didn't meet my needs`}></CheckBox>
          <CheckBox label={'User interface is confusing'}></CheckBox>
          <CheckBox label={`I'm not feeling it`}></CheckBox>
        </Container>
        <Container>
          <Subtitle>
            {`Feel free to unload more details in the space below. We're all
            ears:`}
          </Subtitle>
          <TextArea />
        </Container>
        <Container>
          <Subtitle>What will happen to your account?</Subtitle>
          <p>
            {`After cancelling your account, you will lose access to all Chimptok features. 
            All stored data, including goals set, history, and reports, will be permanently deleted.
            Are you sure you want to proceed?
            If you need assistance or have questions, please contact us at contact@chimptok.com.br before completing the cancellation.`}
          </p>
        </Container>
        <ButtonsContainer>
          <DeleteAccountButton onClick={onCancelClick}>
            Never Mind
          </DeleteAccountButton>
          <NeverMindButton>Delete Account</NeverMindButton>
        </ButtonsContainer>
      </Card>
    </div>
  )
}
