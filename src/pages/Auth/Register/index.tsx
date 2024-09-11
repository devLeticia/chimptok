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
import { At, IdentificationBadge, Keyhole, CheckCircle, XCircle } from '@phosphor-icons/react'
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
  const [registrationIsSuccessful, setRegistrationIsSuccessful] = useState(false)
  const [passwordValidations, setPasswordValidations] = useState({
    minLength: false,
    hasUpperLower: false,
    hasNumberOrSpecialChar: false,
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
    mode: 'onChange',
  })

  const passwordValue = watch('password', '')

  const navigate = useNavigate()

  const handleRedirectToLogin = () => {
    navigate('/login')
  }

  const validatePassword = (password: string) => {
    setPasswordValidations({
      minLength: password.length >= 6,
      hasUpperLower: /[A-Z]/.test(password) && /[a-z]/.test(password),
      hasNumberOrSpecialChar: /[0-9!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password),
    })
  }

  async function createUser(data: CreateUserFormData) {
    loading.open()
    accountService
      .registerNewUser(data)
      .then((resp) => {
        setRegistrationIsSuccessful(true)
      })
      .catch((_err) => {
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
                {...register('password', { onChange: (e) => validatePassword(e.target.value) })}
                placeholder="Create password"
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
              </ValidationsListWrapper>

              <Button type="submit" disabled={!isValid}>
                Create Account
              </Button>
            </form>
          </FormContainer>

          <Button color="dark" fullWidth>
            <img
              src={GoogleLogo}
              width={20}
              alt="Google logo"
            />
            Connect with Google
          </Button>

          <MinorText>
            Already have an account? Just <span onClick={handleRedirectToLogin}>log in</span>
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
