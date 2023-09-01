import styled, { keyframes } from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['red-500']};
  color: ${(props) => props.theme['gray-100']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`

const fadeInUp = keyframes`
   0% {
      transform: translateY(100%);
      opacity: 1;
    }
    50% {
      transform: translateY(-20%);
      opacity: 1;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
`

export const Mascot = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: -2.5rem;
  height: 20rem;
  //animation-name: ${fadeInUp};
  //animation-duration: 0.8s;
`
