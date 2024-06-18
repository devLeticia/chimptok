import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const DeleteAccountButton = styled.button`
  align-self: flex-end;
  border: 0;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 800;
  font-family: 'Plus Jakarta Sans', sans-serif;
  cursor: pointer;
  background-color: transparent;
  color: ${(props) => props.theme['red-500']};
  padding: 1rem 2rem;
  white-space: nowrap;

  :hover {
    background-color: ${(props) => props.theme['red-500']};
    color: white;
    cursor: pointer;
  }
`
