import {
  AuthTitle,
  AuthSubtitle,
  MinorText,
  PasswordValidations,
  ValidationsListWrapper,
} from './styles'

import { Input } from '../../../components/Input'
import { Keyhole, CheckCircle } from 'phosphor-react'
import { Button } from '../../../components/Button'
import { useNavigate } from 'react-router-dom'

export function ResetPassword() {
  const navigate = useNavigate()

  function handleRedirectToSignup() {
    navigate('/signup')
  }

  return (
    <>
      <AuthTitle>Reset Password</AuthTitle>
      <AuthSubtitle>Create a new and good password.</AuthSubtitle>

      <Input
        placeholder="New Passaword"
        icon={<Keyhole weight="duotone" size={24} />}
      />
      <Input
        placeholder="Repeat New Passaword"
        icon={<Keyhole weight="duotone" size={24} />}
      />
      <ValidationsListWrapper>
        <PasswordValidations>
          <CheckCircle size={14} weight="fill" />
          <p>At least 6 characters</p>
        </PasswordValidations>
        <PasswordValidations>
          <CheckCircle size={14} weight="fill" />
          <p>At lest one uppercase and one lowercase</p>
        </PasswordValidations>
        <PasswordValidations>
          <CheckCircle size={14} weight="fill" />
          <p>At lest one number or special character</p>
        </PasswordValidations>
      </ValidationsListWrapper>
      <Button>Reset Password</Button>

      <MinorText>
        {` Don't have an account yet? Lets `}
        <span onClick={handleRedirectToSignup}>create one gwergwer</span>
      </MinorText>
    </>
  )
}
