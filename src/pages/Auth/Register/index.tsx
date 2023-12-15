import {
  AuthTitle,
  AuthSubtitle,
  CreateAccountButton,
  ConnectWithGoogleButton,
  LogInButton,
  DividerWithText,
} from './styles'

import GoogleLogo from './../../../../public/logos/google_logo.svg'

export function RegisterNewAccount() {
  return (
    <>
      <AuthTitle>Create Account</AuthTitle>
      <AuthSubtitle>Insert infos to start chasing your goals</AuthSubtitle>
      <CreateAccountButton>Create Account</CreateAccountButton>
      <ConnectWithGoogleButton>
        <img
          src={GoogleLogo}
          width={20}
          alt="Coolest Chimp logo smiling to you"
        />
        <span>Register with Google</span>
      </ConnectWithGoogleButton>
      <DividerWithText>Already have an account? Log in</DividerWithText>
      <LogInButton>Log in</LogInButton>
    </>
  )
}
