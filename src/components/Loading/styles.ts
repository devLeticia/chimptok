import styled, { keyframes } from 'styled-components'

export const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const Spinner = styled.div`
  border: 0.25rem solid ${(props) => props.theme['yellow-500']};
  border-top: 1rem solid transparent;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: ${spinAnimation} 0.7s linear infinite;
`
