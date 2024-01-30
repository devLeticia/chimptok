import { DomainProgressBar } from '../../../../domain-components/ProgressBar'
import { ProgressBarContainer, ProgressLabelContainer } from './styles'

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
      <ProgressLabelContainer>
        <p>{`Today's Goal`}</p>
        <p>{goalOfTheDay} Hours in Tasks</p>
      </ProgressLabelContainer>
      <DomainProgressBar progress={progressOfTheDay} />
    </ProgressBarContainer>
  )
}
