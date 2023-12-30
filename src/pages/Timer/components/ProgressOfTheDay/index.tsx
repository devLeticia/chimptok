import {
  ProgressBarContainer,
  ProgressBar,
  ProgressLabelContainer,
} from './styles'

export function ProgressOfTheDay() {
  return (
    <ProgressBarContainer>
      <ProgressLabelContainer>
        <p>{`Today's Goal`}</p>
        <p>2 hours in tasks</p>
      </ProgressLabelContainer>
      <ProgressBar>
        <div></div>
      </ProgressBar>
    </ProgressBarContainer>
  )
}
