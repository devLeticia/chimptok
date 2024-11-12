import styled, { keyframes } from 'styled-components';

interface ProgressBarProps {
  progress: number;
  animated: boolean;
}

const calculateWidth = (progress: number) =>
  progress <= 2 ? `0.7rem` : progress >= 100 ? `100%` : `${progress}%`;

const progressAnimation = (progress: number) => keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${calculateWidth(progress)};
  }
`;

export const StepProgress = styled.div<ProgressBarProps>`
  height: 0.7rem;
  width: 100%;
  border-radius: 9px;
  position: relative;
  background-color: ${(props) => props.theme['gray-200']};
  
  &::before {
    content: '';
    display: block;
    height: 100%;
    width: ${(props) => calculateWidth(props.progress)};
    border-radius: 9px;
    background-color: ${(props) => props.theme['blue-500']}; // fallback for older browsers
    animation: ${(props) =>
      props.animated ? progressAnimation(props.progress) : 'none'} 1s forwards;
  }
`