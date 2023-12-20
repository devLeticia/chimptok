import {
  AuthTitle,
  AuthSubtitle,
  ForgotPasswordLink,
  MinorText,
} from './styles'

import { Input } from '../../../components/Input'
import { At, Keyhole, ArrowLeft } from 'phosphor-react'
import GoogleLogo from './../../../../public/logos/google_logo.svg'
import { Button } from '../../../components/Button'

export function ForgotPassword() {
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
        Dont have an account yet? Lets <span>create one</span>
      </MinorText>
    </>
  )
}
