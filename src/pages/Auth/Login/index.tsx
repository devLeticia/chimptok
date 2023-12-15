import {
  AuthTitle,
  AuthSubtitle,
  CreateAccountButton,
  ConnectWithGoogleButton,
  LogInButton,
  DividerWithText,
} from './styles'

import GoogleLogo from './../../../../public/logos/google_logo.svg'

export function Login() {
  return (
    <>
      <AuthTitle>Log in</AuthTitle>
      <AuthSubtitle>Welcome back!</AuthSubtitle>
      <CreateAccountButton>Login in</CreateAccountButton>
      <ConnectWithGoogleButton>
        <img
          src={GoogleLogo}
          width={20}
          alt="Coolest Chimp logo smiling to you"
        />
        <span>Connect with Google</span>
      </ConnectWithGoogleButton>
      <DividerWithText>No account yet? Create one!</DividerWithText>
      <LogInButton>Create Account</LogInButton>
    </>
  )
}
