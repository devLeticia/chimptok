import { AuthTitle, AuthSubtitle, MinorText, FormContainer, ConfirmationText } from './styles'

import { Input } from '../../../components/Input'
import { At, CheckCircle } from '@phosphor-icons/react'
import { Button } from '../../../components/Button'

import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import accountService from '../../../http/requests/accounts/account.service'
import { loading } from '../../../components/Loading'
import { toast } from '../../../components/Toast' // Assuming you have a toast system

const ForgotPasswordSchema = z.object({
  email: z.string().email().toLowerCase(),
})

type ForgotPasswordData = z.infer<typeof ForgotPasswordSchema>

export function ForgotPassword() {
  const [emailWasSent, setEmailWasSent] = useState(false)

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

  function requestEmailToRecoverPassword(data: ForgotPasswordData) {
    loading.open()

    accountService
      .forgotPassword(data.email)
      .then((resp) => {
        // Process successful response
       setEmailWasSent(true)
        toast.show('Password recovery email sent!', 'success', 5000)
      })
      .catch((err) => {
        console.error(err)
        toast.show(`Error: Could not recover password. Try again later.`, 'danger', 5000)
      })
      .finally(() => {
        loading.close()
      })
  }

  return (
    <>
      <AuthTitle>Forgot Password?</AuthTitle>
      {
        emailWasSent ? (
          
      <ConfirmationText>
        <CheckCircle size={46} weight="fill" color="#87D96C" />
        <p>Check your email!</p>
        <p>We've sent you a link to recover your password.</p> 
      </ConfirmationText>) : (
      <>
      <AuthSubtitle>
              No problem! Just type your e-mail to recover it.
            </AuthSubtitle><FormContainer>
                <form onSubmit={handleSubmit(requestEmailToRecoverPassword)}>
                  <Input
                    placeholder="Your registered e-mail"
                    icon={<At weight="duotone" size={24} />}
                    {...register('email')}
                    errorMessage={errors.email?.message?.toString() ?? null} />
                  <Button type="submit" disabled={!isValid}>
                    Recover Password
                  </Button>
                </form>
              </FormContainer></>
        )
      }
        
      <Button fullWidth color="dark" onClick={handleRedirectLoginIn}>
        Go Back to Login
      </Button>
      <MinorText>
        Don't have an account yet? Let's{' '}
        <span onClick={handleRedirectToSignup}>create one</span>
      </MinorText>
    </>
  )
}
