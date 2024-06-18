import styled, { keyframes } from 'styled-components'

interface ToastContainerProps {
  type: 'success' | 'warning' | 'danger' | 'neutral'
}

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, 200%);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, 5%);
  }
  
`
export const ToastContainer = styled.div<ToastContainerProps>`
  position: fixed;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 600px;
  padding: 2rem;
  border-radius: 4px;
  animation: ${slideIn} 0.9s ease-in-out;
  color: white;
  background-color: red;
`
