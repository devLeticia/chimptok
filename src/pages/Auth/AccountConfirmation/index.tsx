import React, { useEffect, useState } from 'react'
import accountService from '../../../http/requests/accounts/account.service'
import { Title, Subtitle, Container } from './styles'
import { StyledCheckCircle } from './../../Welcome/styles'
import { useNavigate } from 'react-router-dom'

interface AccountConfirmationProps {
  confirmationCode: string
}
type ConfirmationStatus = 'awaiting' | 'success' | 'failure'

export function AccountConfirmation({
  confirmationCode,
}: AccountConfirmationProps) {
  const [confirmationStatus, setConfirmationStatus] =
    useState<ConfirmationStatus>('awaiting')

  function confirmEmail(confirmationCode: string) {
    accountService
      .confirmEmailAccount(confirmationCode)
      .then((resp) => {
        console.log('conta confirmada', resp)
        setConfirmationStatus('success')
      })
      .catch((err) => {
        setConfirmationStatus('failure')
        console.log(err)
      })
      .finally(() => {
        console.log('finalizou')
      })
  }

  useEffect(() => {
    if (confirmationCode) confirmEmail(confirmationCode)

    // Cleanup function (optional)
    return () => {
      // Any cleanup code if needed
    }
  }, []) // Empty dependency array to ensure the effect runs only once when the component mounts

  function getComponentAccordingToStatus(status: ConfirmationStatus) {
    switch (status) {
      case 'awaiting':
        return <AwaitingConfirmation />
      case 'success':
        return <SuccessfulConfirmtion />
      case 'failure':
        return <ConfirmationFailed />
      default:
        return <AwaitingConfirmation />
    }
  }

  return getComponentAccordingToStatus(confirmationStatus)
}

function AwaitingConfirmation() {
  return (
    <Container>
      <Title>Confirming Email...</Title>
      <Subtitle>
        {`Hang in there! We're double-checking your email to make sure it's all
        good to go.`}
      </Subtitle>
    </Container>
  )
}

function SuccessfulConfirmtion() {
  const navigate = useNavigate()

  function handleRedirectTolLogin() {
    navigate('/login')
  }
  useEffect(() => {
    setTimeout(() => {
      handleRedirectTolLogin()
    }, 3000)
  }, [])

  return (
    <Container>
      <StyledCheckCircle size={44} weight="fill" />
      <Title>Confirmation Succeeded!</Title>
      <Subtitle>
        Congratulations! Your email has been successfully confirmed. Time to
        dive into the fun stuff!
      </Subtitle>
      <p>redirecting to login...</p>
    </Container>
  )
}

function ConfirmationFailed() {
  return (
    <Container>
      <Title>Confirmation Failed</Title>
      <Subtitle>{`Oops! Looks like something went wrong. Please try confirming your email again, or reach out to us for assistance.`}</Subtitle>
    </Container>
  )
}
