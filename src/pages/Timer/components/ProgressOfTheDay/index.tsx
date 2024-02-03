import { DomainProgressBar } from '../../../../domain-components/ProgressBar'
import { ProgressBarContainer } from './styles'

interface ProgressOftheDay {
  goalOfTheDay: number
  hoursDedicated: number
}
export function ProgressOfTheDay({
  goalOfTheDay,
  hoursDedicated,
}: ProgressOftheDay) {
  const progressOfTheDay = (hoursDedicated / goalOfTheDay) * 100
  return (
    <ProgressBarContainer>
      <p>{`Today's Goal`}</p>
      <DomainProgressBar progress={progressOfTheDay} />
      <p>
        0{''}/{''}
        {goalOfTheDay} hours
      </p>
    </ProgressBarContainer>
  )
}
