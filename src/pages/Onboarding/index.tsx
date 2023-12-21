import {
  OnboardingContainer,
  Card,
  ProgressContainer,
  ProgressWrapper,
  StepProgress,
  ProgressLabel,
} from './styles'

import { StepOne } from './StepOne/index'
import { StepTwo } from './StepTwo/index'
import { StepThree } from './StepThree/index'
export function Onboarding() {
  return (
    <OnboardingContainer>
      <Card>
        <ProgressContainer>
          <ProgressWrapper>
            <StepProgress></StepProgress>
            <StepProgress></StepProgress>
            <StepProgress></StepProgress>
          </ProgressWrapper>
          <ProgressLabel>1/2</ProgressLabel>
        </ProgressContainer>
        {/* <StepOne /> */}
        {/* <StepTwo /> */}
        <StepThree />
      </Card>
    </OnboardingContainer>
  )
}
