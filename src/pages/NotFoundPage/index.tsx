import { NotFoundContainer } from './styles'
import { useNavigate } from 'react-router-dom'
import ChimpRelaxing from '../../../public/chimp_relaxing.svg'

export function NotFoundPage() {
  const navigate = useNavigate()

  function handleGoToHome() {
    navigate('/')
  }
  return (
    <NotFoundContainer>
      <h1>404</h1>
      <h1>There's a lot of fun here... </h1>
      <img src={ChimpRelaxing} alt="Coolest Chimp logo smiling to you" />
      <h1>...but none's for you. Go back to work!</h1>
      <button onClick={handleGoToHome}>Go to Tasks</button>
    </NotFoundContainer>
  )
}
