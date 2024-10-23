import { DomainProgressBar } from '../../../../domain-components/ProgressBar'
import { ProgressBarContainer, LabelContainer} from './styles'

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

    function formattedTime (num: number) {
      if (num === 0) return '0h';
      
      let hours = Math.floor(num);
      let minutes = Math.round((num - hours) * 60);
    
      if (hours === 0) {
        return `${minutes}min`;
      }
    
      return `${hours}h${minutes}min`;
    }
    

  return (
    <ProgressBarContainer>
      <LabelContainer>
        <div>{`Today's Goal`}</div>
        <div>
        {formattedTime(progressOfTheDay.minutesAccomplishedToday)} / {formattedTime(progressOfTheDay.goalOfTheDayInHours)}
        </div>
      </LabelContainer>
      <DomainProgressBar progress={progress} />
    </ProgressBarContainer>
  )
}
