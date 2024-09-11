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
  left: 75%;
  transform: translateX(-50%);
  min-width: 35vw;
  padding: 1rem;
  border-radius: 4px;
  animation: ${slideIn} 0.9s ease-in-out;
  color: white;
  background-color: #fd5c63;
  box-shadow: 0px 1px 3px rgba(12, 3, 10, 0.2);
`
