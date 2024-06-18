import React, { useState, useEffect } from 'react'
import {
  OnboardingContainer,
  Card,
  ProgressContainer,
  ProgressWrapper,
  StepProgress,
  ProgressLabel,
} from './styles'

import { NewGoalForm } from '../Goals/NewGoalForm/index'
import { StepTwo } from './StepTwo/index'
import { StepThree } from './StepThree/index'

export function Onboarding() {
  const [currentStep, setCurrentStep] = useState(1)

  const steps = [NewGoalForm, StepTwo, StepThree]

  useEffect(() => {
    // Add the 'completed' class after the component mounts to trigger the animation
    const stepProgressElements = document.querySelectorAll('.step-progress')
    stepProgressElements.forEach((element, index) => {
      if (index + 1 <= currentStep) {
        element.classList.add('completed')
      }
    })
  }, [currentStep])

  const handleStepChange = (step: React.SetStateAction<number>) => {
    setCurrentStep(step)
  }

  return (
    <OnboardingContainer>
      <Card>
        <ProgressContainer>
          <ProgressWrapper>
            {steps.map((Step, index) => (
              <StepProgress
                key={index}
                className={`step-progress ${
                  currentStep === index + 1 ? 'completed' : ''
                }`}
                onClick={() => handleStepChange(index + 1)}
              ></StepProgress>
            ))}
          </ProgressWrapper>
          <ProgressLabel>{`${currentStep}/${steps.length}`}</ProgressLabel>
        </ProgressContainer>
        {React.createElement(steps[currentStep - 1])}
      </Card>
    </OnboardingContainer>
  )
}
