import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  h1 {
    font-size: 1.25rem;
    color: ${(props) => props.theme['brown-700']};
  }

  img {
    margin-top: 2rem;
    height: 16rem;
  }

  width: 100%;
  height: 100vh;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  button {
    border: 0;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['green-500']};
    padding: 1rem 1.75rem;

    :hover {
      background-color: ${(props) => props.theme['green-300']};
      cursor: pointer;
    }
  }
`

export const FourOFourContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 3rem;
  line-height: 1rem;
  color: ${(props) => props.theme['gray-100']};
  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['brown-800']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`
