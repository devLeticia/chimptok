import styled, { keyframes } from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  p,
  span {
    font-weight: 600;
    color: ${(props) => props.theme['gray-500']};
  }

  hr {
    border-top: 1px solid ${(props) => props.theme['gray-200']};
    width: 100%;
  }

  img {
    height: 2rem;
  }
`
export const SuperiorContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0rem 3rem;
`
export const BaseCountdownButton = styled.button`
  font-family: 'Plus Jakarta Sans', sans-serif;
  width: 100%;
  border: 0;
  padding: 1.25rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    //opacity: 0.7;
    cursor: not-allowed;
  }
`
export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['blue-500']};
  color: white;
  border-radius: 9px;
  &:not(:disabled):hover {
    background: ${(props) => props.theme['blue-500']};
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
export const TimerContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  button {
    margin-top: 2rem;
  }
`
