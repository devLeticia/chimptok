import { ChangeEvent } from 'react'
import { loading } from '../../../../components/Loading'
import { TextArea } from '../../../../components/Textarea'
import { toast } from '../../../../components/Toast'
import accountService from '../../../../http/requests/accounts/account.service'
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

  function handleCancelAccount (): void {
    
    const userId: string | null = localStorage.getItem('user_id')
    
    if (userId !== null) {
      loading.open()
      accountService.cancelAccount(userId)
        .then((resp) => {
          const response = resp
          // console.log('response', response)
          concludeAccountCancelation()
        })
        .catch((_err) => {
          console.log(_err)
          toast.show(`Erro ao deslogar:`, 'danger', 10000)
        })
        .finally(() => {
          loading.close()
        })
    }
  }

  function concludeAccountCancelation () {
    navigate('/forgot-password')
  }

  return (
    <div>
      <Card>
        <CardTitle>Cancel Account</CardTitle>
        <Container>
          <Subtitle>{`Changing paths? Let us know why Chimp isn't swinging your way:`}</Subtitle>
          <CheckBox label={'Found a better solution elsewhere'} checked={false} onChange={function (e: ChangeEvent<HTMLInputElement>): void {
            throw new Error('Function not implemented.')
          } }></CheckBox>
          <CheckBox label={`Features didn't meet my needs`} checked={false} onChange={function (e: ChangeEvent<HTMLInputElement>): void {
            throw new Error('Function not implemented.')
          } }></CheckBox>
          <CheckBox label={'User interface is confusing'} checked={false} onChange={function (e: ChangeEvent<HTMLInputElement>): void {
            throw new Error('Function not implemented.')
          } }></CheckBox>
          <CheckBox label={`I'm not feeling it`} checked={false} onChange={function (e: ChangeEvent<HTMLInputElement>): void {
            throw new Error('Function not implemented.')
          } }></CheckBox>
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
          <NeverMindButton>Never Mind</NeverMindButton>
          <DeleteAccountButton onClick={handleCancelAccount}>
          Delete Account
          </DeleteAccountButton>
        </ButtonsContainer>
      </Card>
    </div>
  )
}
