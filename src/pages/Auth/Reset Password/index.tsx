import {
  AuthTitle,
  AuthSubtitle,
  MinorText,
  PasswordValidations,
  ValidationsListWrapper,
  FormContainer,
} from './styles'

import { Input } from '../../../components/Input'
import { Keyhole, CheckCircle } from 'phosphor-react'
import { Button } from '../../../components/Button'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

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

export function ResetPassword() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(ResetPasswordFormSchema),
    mode: 'onChange',
  })
  function handleRedirectToSignup() {
    navigate('/signup')
  }

  function recoverPassowordRequest(data: any) {
    console.log(data)
  }
  return (
    <>
      <AuthTitle>Reset Password</AuthTitle>
      <AuthSubtitle>Create a new and good password.</AuthSubtitle>
      <FormContainer>
        <form onSubmit={handleSubmit(recoverPassowordRequest)}>
          <Input
            type="password"
            placeholder="New Passaword"
            {...register('password')}
            errorMessage={errors.password?.message?.toString() ?? null}
            icon={<Keyhole weight="duotone" size={24} />}
          />
          <Input
            type="password"
            placeholder="Repeat New Passaword"
            {...register('passwordConfirmation')}
            errorMessage={
              errors.passwordConfirmation?.message?.toString() ?? null
            }
            icon={<Keyhole weight="duotone" size={24} />}
          />
          <ValidationsListWrapper>
            <PasswordValidations>
              <CheckCircle size={14} weight="fill" />
              <p>At least 6 characters</p>
            </PasswordValidations>
            <PasswordValidations>
              <CheckCircle size={14} weight="fill" />
              <p>At lest one uppercase and one lowercase</p>
            </PasswordValidations>
            <PasswordValidations>
              <CheckCircle size={14} weight="fill" />
              <p>At lest one number or special character</p>
            </PasswordValidations>
          </ValidationsListWrapper>
          <Button type="submit" disabled={!isValid}>
            Reset Password
          </Button>
        </form>
      </FormContainer>

      <MinorText>
        {` Don't have an account yet? Lets `}
        <span onClick={handleRedirectToSignup}>create one</span>
      </MinorText>
    </>
  )
}
