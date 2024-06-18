import { DomainProgressBar } from '../../../../domain-components/ProgressBar'
import { ProgressBarContainer } from './styles'

interface ProgressOftheDayProps {
  progressOfTheDay: {
    totalHoursPerWeek: number
    goalOfTheDayInHours: number
    minutesAccomplishedToday: number
  }
}
export function ProgressOfTheDay({ progressOfTheDay }: ProgressOftheDayProps) {
  const progress =
    (progressOfTheDay.minutesAccomplishedToday /
      progressOfTheDay.goalOfTheDayInHours) *
    100
  return (
    <ProgressBarContainer>
      <p>{`Today's Goal`}</p>
      <DomainProgressBar progress={progress} />
      <p>
        0{''}/{''}
        {progressOfTheDay.minutesAccomplishedToday} hours
      </p>
    </ProgressBarContainer>
  )
}
