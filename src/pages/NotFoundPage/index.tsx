import { Button } from './../../components/Button/index'
import {
  ConfirmationContainer,
  HeaderContainer,
  CallToActionContainer,
  TextContainer,
} from './styles'

import { useNavigate } from 'react-router-dom'

export function NotFoundPage() {
  const navigate = useNavigate()

  function handleRedirectToHome() {
    navigate('/')
  }

  return (
    <>
      <ConfirmationContainer>
        <CallToActionContainer></CallToActionContainer>
        <HeaderContainer>
          <h2>{`404 `}</h2>
          <h4>{`Page not Found`}</h4>
          <h1>{`Whooooops`}</h1>
        </HeaderContainer>
        <TextContainer>
          <p>{`🙈Looks like you're swinging in the wrong direction!`}</p>
          <p>{`Let's monkey around and find your goals together! 🌿🐒`}</p>
        </TextContainer>
        <CallToActionContainer>
          <Button fullWidth color="yellow" onClick={handleRedirectToHome}>
            Go Back to Goals
          </Button>
        </CallToActionContainer>
      </ConfirmationContainer>
    </>
  )
}
