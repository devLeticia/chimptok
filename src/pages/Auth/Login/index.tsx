import {
  AuthTitle,
  AuthSubtitle,
  ForgotPasswordLink,
  MinorText,
  FormContainer,
} from './styles'

import { Input } from '../../../components/Input'
import { At, Keyhole } from 'phosphor-react'
import GoogleLogo from './../../../../public/logos/google_logo.svg'
import { Button } from '../../../components/Button'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import accountService from '../../../http/requests/accounts/account.service'
import { loading } from '../../../components/Loading'
import { toast } from './../../../components/Toast/index'
// import { jwtDecode } from 'jwt-decode'

type UserLoginRequest = {
  email: string
  password: string
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
      .LogIn(user)
      .then((resp: any) => {
        console.log(resp)
        setAccessToken(resp.accessToken)
      })
      .catch((err) => {
        console.log('esntrou no erro', err)
        toast.show(
          `Erro ao criar conta:${err.response.data.message}`,
          'danger',
          10000,
        )
      })
      .finally(() => {
        setTimeout(() => {
          loading.close()
        }, 3000)
      })
  }

  function setAccessToken(accessToken: string) {
    localStorage.setItem('access_token', accessToken)
    // const userInfo = jwtDecode(accessToken) --> I wont need it now.
    // console.log('userInfo', userInfo)
  }

  return (
    <>
      <AuthTitle>Log in</AuthTitle>
      <AuthSubtitle>Welcome back!</AuthSubtitle>
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
            placeholder="Create password"
            icon={<Keyhole weight="duotone" size={24} />}
          />
          <ForgotPasswordLink onClick={handleRedirectToForgotPassword}>
            Forgot passoword?
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
