import {
  AuthTitle,
  AuthSubtitle,
  PasswordValidations,
  ValidationsListWrapper,
  MinorText,
} from './styles'
import { Input } from '../../../components/Input'
import { At, IdentificationBadge, Keyhole, CheckCircle } from 'phosphor-react'
import GoogleLogo from './../../../../public/logos/google_logo.svg'
import { Button } from '../../../components/Button'
import { useNavigate } from 'react-router-dom'

export function RegisterNewAccount() {
  const navigate = useNavigate()

  function handleRedirectToLogin() {
    navigate('/login')
  }

  return (
    <>
      <AuthTitle>Create Account</AuthTitle>
      <AuthSubtitle>Insert infos to start chasing your goals</AuthSubtitle>
      <Input placeholder="E-mail" icon={<At weight="duotone" size={24} />} />
      <Input
        placeholder="Name or Nickname"
        icon={<IdentificationBadge weight="duotone" size={24} />}
      />
      <Input
        placeholder="Passaword"
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
      <Button>Create Account</Button>
      {/* <DividerWithText>Or</DividerWithText> */}
      <Button color="dark">
        <img
          src={GoogleLogo}
          width={20}
          alt="Coolest Chimp logo smiling to you"
        />
        Connect with Google
      </Button>
      <MinorText>
        Already have an account? Just{' '}
        <span onClick={handleRedirectToLogin}>log in</span>
      </MinorText>
    </>
  )
}
