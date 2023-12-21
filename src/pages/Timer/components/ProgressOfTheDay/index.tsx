import {
  ProgressBarContainer,
  ProgressBar,
  ProgressLabelContainer,
} from './styles'

export function ProgressOfTheDay() {
  return (
    <ProgressBarContainer>
      <ProgressLabelContainer>
        <p>Goal of the day</p>
        <p>2h</p>
      </ProgressLabelContainer>
      <ProgressBar>
        <div></div>
      </ProgressBar>
    </ProgressBarContainer>
  )
}
