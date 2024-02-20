import { AuthTitle, AuthSubtitle, MinorText, FormContainer } from './styles'

import { Input } from '../../../components/Input'
import { At } from 'phosphor-react'
import { Button } from '../../../components/Button'

import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const ForgotPasswordSchema = z.object({
  email: z.string().email().toLowerCase(),
})

type ForgotPasswordData = z.infer<typeof ForgotPasswordSchema>

export function ForgotPassword() {
  const [output, setOutput] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ForgotPasswordData>({
    resolver: zodResolver(ForgotPasswordSchema),
    mode: 'onChange',
  })
  const navigate = useNavigate()

  function handleRedirectToSignup() {
    navigate('/signup')
  }

  function handleRedirectLoginIn() {
    navigate('/login')
  }

  function requestEmailToRecoverPassowrd(data: any) {
    setOutput(JSON.stringify(data, null, 2))
  }
  return (
    <>
      <pre>{output}</pre>
      <AuthTitle>Forgot Password</AuthTitle>
      <AuthSubtitle>
        No problem! Just type your e-mail to recover it.
      </AuthSubtitle>
      <FormContainer>
        <form onSubmit={handleSubmit(requestEmailToRecoverPassowrd)}>
          <Input
            placeholder="Your registered e-mail"
            icon={<At weight="duotone" size={24} />}
            {...register('email')}
            errorMessage={errors.email?.message?.toString() ?? null}
          />
          <Button type="submit" disabled={!isValid}>
            Recover Password
          </Button>
        </form>
      </FormContainer>
      <Button fullWidth color="dark" onClick={handleRedirectLoginIn}>
        Go Back to Login
      </Button>
      <MinorText>
        Dont have an account yet? Lets{' '}
        <span onClick={handleRedirectToSignup}>create one</span>
      </MinorText>
    </>
  )
}
