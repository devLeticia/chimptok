import { Button } from './../../components/Button/index'
import {
  ConfirmationContainer,
  SuperHeader,
  Subtitle,
  CallToActionContainer,
  StyledCheckCircle,
} from './styles'

export function Welcome() {
  return (
    <>
      <ConfirmationContainer>
        <SuperHeader>WE ARE READY TO GO!</SuperHeader>
        <Subtitle>Your e-mail was confirmed</Subtitle>
        <p>Set this date because thats when your life will change</p>
        <StyledCheckCircle size={56} weight="fill" />
        <CallToActionContainer>
          <Button color="blue">Start at Chimptok</Button>
        </CallToActionContainer>
      </ConfirmationContainer>
    </>
  )
}
