import {
  Title,
  Subtitle,
  PasswordValidations,
  ValidationsListWrapper,
  MinorText,
  FormContainer,
  RegistrationSuccessContainer,
  StyledEmailIcon,
} from './styles'
import { Input } from '../../../components/Input'
import { At, IdentificationBadge, Keyhole, CheckCircle } from 'phosphor-react'
import GoogleLogo from './../../../../public/logos/google_logo.svg'
import { Button } from '../../../components/Button'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import accountService from '../../../http/requests/accounts/account.service'
import { loading } from '../../../components/Loading'
import { toast } from './../../../components/Toast/index'

const createUserFormSchema = z.object({
  email: z.string().email().toLowerCase(),
  username: z.string().min(3, 'Too short').max(36, 'Too long'),
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

type CreateUserFormData = z.infer<typeof createUserFormSchema>

export function RegisterNewAccount() {
  const [registrationIsSuccessful, setRegistrationIsSuccessful] =
    useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
    mode: 'onChange',
  })

  const navigate = useNavigate()

  function handleRedirectToLogin() {
    navigate('/login')
  }

  async function createUser(data: CreateUserFormData) {
    loading.open()
    accountService
      .RegisterNewUserRequest(data)
      .then((resp) => {
        const response = resp
        console.log('response', response)
        setRegistrationIsSuccessful(true)
      })
      .catch((_err) => {
        sHW
        console.log(_err)
      })
      .finally(() => {
        setTimeout(() => {
          loading.close()
          toast.show(`Erro ao criar conta:`, 'danger', 10000)
        }, 3000)
      })
  }
  return (
    <>
      {!registrationIsSuccessful ? (
        <>
          <Title>Create Account</Title>
          <Subtitle>Insert infos to start chasing your goals</Subtitle>
          <FormContainer>
            <form onSubmit={handleSubmit(createUser)}>
              <Input
                {...register('username')}
                type="text"
                placeholder="Name or nickname"
                errorMessage={errors.username?.message?.toString() ?? null}
                // isValid={!errors.username}
                icon={<IdentificationBadge weight="duotone" size={24} />}
              />
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
                Create Account
              </Button>
            </form>
          </FormContainer>
          {/* <DividerWithText>Or</DividerWithText> */}
          <Button color="dark" fullWidth>
            <img
              src={GoogleLogo}
              width={20}
              alt="Coolest Chimp logo smiling to you"
            />
            Connect with Google
          </Button>
          <MinorText>
            Already have an account? Just{' '}
            <span onClick={handleRedirectToLogin}>log in</span>
          </MinorText>
        </>
      ) : (
        <RegistrationSuccess />
      )}
    </>
  )
}

function RegistrationSuccess() {
  return (
    <RegistrationSuccessContainer>
      <StyledEmailIcon size={36} weight="duotone" />
      <Title>Confirm Registration!</Title>
      <Subtitle>
        {`Check your inbox for our email and tap the confirmation button to get
        started. It's time to unlock your goals!`}
      </Subtitle>
    </RegistrationSuccessContainer>
  )
}
