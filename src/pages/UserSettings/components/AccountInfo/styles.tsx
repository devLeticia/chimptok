import styled from 'styled-components'

export const Card = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  gap: 0.75rem;
  flex-direction: column;
  padding: 2rem;
  border: solid 2px ${(props) => props.theme['gray-300']};
  border-radius: 9px;
`
export const CardTitle = styled.h1`
  font-size: 1rem;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 800;
  margin-bottom: 2rem;
`

export const SaveButton = styled.button`
  align-self: flex-end;
  border: 0;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 800;
  font-family: 'Plus Jakarta Sans', sans-serif;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme['dark-900']};
  padding: 1rem 2.5rem;

  :hover {
    background-color: ${(props) => props.theme['yellow-600']};
    cursor: pointer;
  }
`
