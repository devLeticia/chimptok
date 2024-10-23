import {
  AuthTitle,
  AuthSubtitle,
  MinorText,
  PasswordValidations,
  ValidationsListWrapper,
  FormContainer,
  ConfirmationText
} from './styles'

import { Input } from '../../../components/Input'
import { Keyhole, CheckCircle, XCircle } from '@phosphor-icons/react'
import { Button } from '../../../components/Button'
import { redirect, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import accountService from '../../../http/requests/accounts/account.service'
import { useState } from 'react'
import { toast } from '../../../components/Toast'
import { loading } from '../../../components/Loading'

const ResetPasswordFormSchema = z
  .object({
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
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.passwordConfirmation === data.password, {
    path: ['passwordConfirmation'],
    message: `Passwords don't match`,
  })

type ResetPasswordFormData = z.infer<typeof ResetPasswordFormSchema>
interface ResetPasswordProps {
  resetToken: string
}
export function ResetPassword({ resetToken }: ResetPasswordProps) {
  const [passwordValidations, setPasswordValidations] = useState({
    minLength: false,
    hasUpperLower: false,
    hasNumberOrSpecialChar: false,
  })
  const [successReset, setSuccessReset] = useState(false)

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(ResetPasswordFormSchema),
    mode: 'onChange',
  })

  function handleRedirectToLogin() {
    navigate('/login')
  }
  const validatePassword = (password: string) => {
    setPasswordValidations({
      minLength: password.length >= 6,
      hasUpperLower: /[A-Z]/.test(password) && /[a-z]/.test(password),
      hasNumberOrSpecialChar: /[0-9!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password),
    })
  }
  function recoverPasswordRequest({ password }: ResetPasswordFormData) {
    loading.open()
    const payload = {
      token: resetToken,
      newPassword: password,
    }

    accountService
      .resetPassword(payload)
      .then((resp) => {
        toast.show(
          `Password reset successfully`,
          'success',
          5000,
        )
        setSuccessReset(true)
      })
      .catch((err) => {
       toast.show(
          `${err.response.data.message}`,
          'danger',
          5000,
        )
      })
      .finally(() => {
        loading.close()
      })
  }


  return (
    <>
      <AuthTitle>Reset Password</AuthTitle>
      {!successReset ? (
      <>
      <AuthSubtitle>Create a new and good password.</AuthSubtitle>
      <FormContainer>
        <form onSubmit={handleSubmit(recoverPasswordRequest)}>
          <Input
            type="password"
            placeholder="New Password"
            {...register('password', { onChange: (e) => validatePassword(e.target.value) })}
            
            icon={<Keyhole weight="duotone" size={24} />}
          />
          <Input
            type="password"
            placeholder="Repeat New Password"
            {...register('passwordConfirmation')}
           
            icon={<Keyhole weight="duotone" size={24} />}
          />
          <ValidationsListWrapper>
                <PasswordValidations>
                  {passwordValidations.minLength ? (
                    <CheckCircle size={14} weight="fill" color="green" />
                  ) : (
                    <XCircle size={14} weight="fill"  />
                  )}
                  <p style={{ color: passwordValidations.minLength ? '#61a949' : '' }}>
                    At least 6 characters
                  </p>
                </PasswordValidations>
                <PasswordValidations>
                  {passwordValidations.hasUpperLower ? (
                    <CheckCircle size={14} weight="fill" color="green" />
                    ) : (
                    <XCircle size={14} weight="fill" />
                  )}
                  <p style={{ color: passwordValidations.hasUpperLower ? '#61a949' : '' }}>
                    At least one uppercase and one lowercase letter
                  </p>
                </PasswordValidations>
                <PasswordValidations>
                  {passwordValidations.hasNumberOrSpecialChar ? (
                    <CheckCircle size={14} weight="fill" color="green" />
                    ) : (
                      <XCircle size={14} weight="fill"  />
                      )}
                  <p style={{ color: passwordValidations.hasNumberOrSpecialChar ? '#61a949' : '' }}>
                    At least one number or special character
                  </p>
                </PasswordValidations>
                <PasswordValidations>
                  {watch('password') && watch('passwordConfirmation') && watch('password') === watch('passwordConfirmation') ? (
                    <CheckCircle size={14} weight="fill" color="green" />
                    ) : (
                      <XCircle size={14} weight="fill" />
                      )}
                  <p style={{ color: watch('password') && watch('passwordConfirmation') && watch('password') === watch('passwordConfirmation') ? '#61a949' : '' }}>
                    Passwords must match
                  </p>
                </PasswordValidations>
              </ValidationsListWrapper>
          <Button type="submit" disabled={!isValid}>
            Reset Password
          </Button>
        </form>
      </FormContainer>
      </>
      ) :
                      
      (
        <ConfirmationText>
          <CheckCircle size={46} weight="fill" color="#87D96C" />
          <p>Your password has been updated!</p>
          <p>You're all set to log in with your new credentials and continue your journey.</p> 
          <Button onClick={handleRedirectToLogin} fullWidth color="dark">
            Go To Login
          </Button>
        </ConfirmationText>
      )
      }

      <MinorText>
      Everything right with your account?
        <span onClick={handleRedirectToLogin}> Log in</span>
      </MinorText>
    </>
  )
}
