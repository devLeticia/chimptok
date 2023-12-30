import { AuthTitle, AuthSubtitle, MinorText } from './styles'

import { Input } from '../../../components/Input'
import { At, ArrowLeft } from 'phosphor-react'
import { Button } from '../../../components/Button'

import { useNavigate } from 'react-router-dom'

export function ForgotPassword() {
  const navigate = useNavigate()

  function handleRedirectToSignup() {
    navigate('/timer')
  }

  return (
    <>
      <AuthTitle>Forgot Password</AuthTitle>
      <AuthSubtitle>
        No problem! Just type your e-mail to recover it.
      </AuthSubtitle>

      <Input
        placeholder="Your registered e-mail"
        icon={<At weight="duotone" size={24} />}
      />
      <Button>Recover Password</Button>
      <Button color="dark">
        <ArrowLeft size={20} color="white" weight="bold" />
        Never Mind. Go Back to Login
      </Button>
      <MinorText>
        Dont have an account yet? Lets{' '}
        <span onClick={handleRedirectToSignup}>create one</span>
      </MinorText>
    </>
  )
}
