import { NotFoundContainer, FourOFourContainer } from './styles'
import { useNavigate } from 'react-router-dom'
import ChimpRelaxing from '../../../public/chimp_relaxing.svg'

export function NotFoundPage() {
  const navigate = useNavigate()

  function handleGoToHome() {
    navigate('/')
  }
  return (
    <NotFoundContainer>
      <FourOFourContainer>
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </FourOFourContainer>
      <img src={ChimpRelaxing} alt="Coolest Chimp logo smiling to you" />
      <h1>
        There's a lot of fun here.... but none's for you! <br /> Go back to
        work.
      </h1>
      <button onClick={handleGoToHome}>Go to Tasks</button>
    </NotFoundContainer>
  )
}
