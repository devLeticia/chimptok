import {
  AuthTitle,
  AuthSubtitle,
  ForgotPasswordLink,
  MinorText,
  FormContainer,
} from './styles'

import { Input } from '../../../components/Input'
import { At, Keyhole } from '@phosphor-icons/react'
import GoogleLogo from './../../../../public/logos/google_logo.svg'
import { Button } from '../../../components/Button'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import accountService from '../../../http/requests/accounts/account.service'
import { loading } from '../../../components/Loading'
import { toast } from './../../../components/Toast/index'
import { jwtDecode } from 'jwt-decode'
// import { jwtDecode } from 'jwt-decode'

type UserLoginRequest = {
  email: string
  password: string
}
interface UserInfo {
  userId: string
}

const LoginFormSchema = z.object({
  email: z.string().email().toLowerCase(),
  password: z
    .string()
    .min(6)
    .refine((value) => /[A-Z]/.test(value), {
      message: 'At least one uppercase letter is required',
    })
    .refine((value) => /[a-z]/.test(value), {
      message: 'At least one lowercase letter is required',
    })
    .refine((value) => /[0-9!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(value), {
      message: 'At least one number or special character is required',
    }),
})

type LoginFormData = z.infer<typeof LoginFormSchema>

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
    mode: 'onChange',
  })

  const navigate = useNavigate()

  function handleRedirectToSignup() {
    navigate('/signup')
  }

  function handleRedirectToForgotPassword() {
    navigate('/forgot-password')
  }

  function logUserIn(user: UserLoginRequest) {
    loading.open()
    accountService
      .login(user)
      .then((resp: any) => {
        console.log(resp)
        setAccessToken(resp.accessToken)
        setUserInfo(resp.accessToken)
        redirectToHome()
      })
      .catch((err) => {
        console.log('esntrou no erro', err)
        toast.show(
          `${err.response.data.message} Try again.`,
          'danger',
          5000,
        )
      })
      .finally(() => {
          loading.close()
      })
  }

  function setAccessToken(accessToken: string): void {
    localStorage.setItem('access_token', accessToken)
  }

  function setUserInfo(accessToken: string): void {
    const userInfo: UserInfo | null = jwtDecode(accessToken)

    if (userInfo) {
      localStorage.setItem('user_id', userInfo.userId)
    } else {
      console.error('Unable to decode user information from the access token.')
    }
  }

  function redirectToHome() {
    navigate('/timer')
  }

  return (
    <>
      <AuthTitle>Log in</AuthTitle>
      <AuthSubtitle>Welcome Back!</AuthSubtitle>
      <FormContainer>
        <form onSubmit={handleSubmit(logUserIn)}>
          <Input
            type="email"
            placeholder="E-mail"
            icon={<At weight="duotone" size={24} />}
            {...register('email')}
            errorMessage={errors.email?.message?.toString() ?? null}
          />
          <Input
            type="password"
            {...register('password')}
            placeholder="Password"
            icon={<Keyhole weight="duotone" size={24} />}
          />
          <ForgotPasswordLink onClick={handleRedirectToForgotPassword}>
            Forgot Password?
          </ForgotPasswordLink>
          <Button type="submit" disabled={!isValid}>
            Login
          </Button>
        </form>
      </FormContainer>
      <Button color="dark" fullWidth>
        <img
          src={GoogleLogo}
          width={20}
          alt="Coolest Chimp logo smiling to you"
        />
        Connect with Google
      </Button>
      <MinorText>
        {`Don't have an account yet? Let's`}{' '}
        <span onClick={handleRedirectToSignup}>create one!</span>
      </MinorText>
    </>
  )
}
