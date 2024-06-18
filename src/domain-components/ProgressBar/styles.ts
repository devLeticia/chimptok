import styled, { keyframes } from 'styled-components'

interface ProgressBarProps {
  progress: number
}

const calculateWidth = (progress: number) =>
  progress === 0 ? `2%` : `${progress}%` // will show a 2% when user has

const progressAnimation = (progress: number) => keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${calculateWidth(progress)};
  }
`

export const StepProgress = styled.div<ProgressBarProps>`
  height: 0.7rem;
  width: 100%;
  border-radius: 9px;
  overflow: hidden;
  position: relative;
  background-color: ${(props) => props.theme['gray-200']};

  &::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 9px;
    background-color: ${(props) => props.theme['blue-500']};
    animation: ${(props) => progressAnimation(props.progress)} 1s forwards;
  }
`

// Example usage:
// <StepProgress progress={50} />
