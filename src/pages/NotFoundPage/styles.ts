import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  justify-content: center;
  gap: 3rem;

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
