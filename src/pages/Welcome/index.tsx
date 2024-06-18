import { Button } from './../../components/Button/index'
import {
  ConfirmationContainer,
  SuperHeader,
  Subtitle,
  CallToActionContainer,
  StyledCheckCircle,
} from './styles'

import { useNavigate } from 'react-router-dom'

export function Welcome() {
  const navigate = useNavigate()

  function handleRedirectToOnboarding() {
    navigate('/onboarding')
  }

  return (
    <>
      <ConfirmationContainer>
        <CallToActionContainer>
          <StyledCheckCircle size={56} weight="fill" />
          <Subtitle>Your e-mail was confirmed</Subtitle>
          <p>{`Set this date because that's when your life is about to change!`}</p>
        </CallToActionContainer>
        <SuperHeader>{`WE'RE READY`}</SuperHeader>
        <SuperHeader>{`TO GO!`}</SuperHeader>
        <CallToActionContainer>
          <Button color="yellow" onClick={handleRedirectToOnboarding}>
            Start at Chimptok
          </Button>
        </CallToActionContainer>
      </ConfirmationContainer>
    </>
  )
}
