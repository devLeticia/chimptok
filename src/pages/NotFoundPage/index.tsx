import { Button } from './../../components/Button/index'
import {
  ConfirmationContainer,
  HeaderContainer,
  CallToActionContainer,
  TextContainer,
  LogoContainer
} from './styles'

import { useNavigate } from 'react-router-dom'
import logotype from '../../../public/logos/horizontal_logotype.svg'

export function NotFoundPage() {
  const navigate = useNavigate()

  function handleRedirectToHome() {
    navigate('/')
  }

  return (
    <>
      <ConfirmationContainer>
      <LogoContainer>
        <img
            src={logotype}
            alt="Coolest Chimp logo smiling to you"
            className="logo"
            height={36}
            onClick={handleRedirectToHome}
          />
      </LogoContainer>
        <HeaderContainer>
          <h2>{`404 `}</h2>
          <h4>{`Page not Found`}</h4>
          <h1>{`Whooooops!`}</h1>
        </HeaderContainer>
        <TextContainer>
          <p>{`🙈 Looks like you're swinging in the wrong direction!`}</p>
          <p>{`Let's monkey around and find your goals together! 🌿`}</p>
        </TextContainer>
        <CallToActionContainer>
          <Button fullWidth color="yellow" onClick={handleRedirectToHome}>
            Go back to goals
          </Button>
        </CallToActionContainer>
      </ConfirmationContainer>
    </>
  )
}
