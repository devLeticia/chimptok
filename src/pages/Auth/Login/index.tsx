import {
  AuthTitle,
  AuthSubtitle,
  ForgotPasswordLink,
  MinorText,
} from './styles'

import { Input } from '../../../components/Input'
import { At, Keyhole } from 'phosphor-react'
import GoogleLogo from './../../../../public/logos/google_logo.svg'
import { Button } from '../../../components/Button'

export function Login() {
  return (
    <>
      <AuthTitle>Log in</AuthTitle>
      <AuthSubtitle>Welcome back!</AuthSubtitle>

      <Input placeholder="E-mail" icon={<At weight="duotone" size={24} />} />
      <Input
        placeholder="Passaword"
        icon={<Keyhole weight="duotone" size={24} />}
      />
      <ForgotPasswordLink>Forgot passoword?</ForgotPasswordLink>
      <Button>Login</Button>
      <Button color="dark">
        <img
          src={GoogleLogo}
          width={20}
          alt="Coolest Chimp logo smiling to you"
        />
        Connect with Google
      </Button>
      <MinorText>
        Don't have an account yet? Let's <span>log in</span>
      </MinorText>
    </>
  )
}
