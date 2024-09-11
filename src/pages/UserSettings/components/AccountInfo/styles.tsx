import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  display: flex;
  gap: 0.75rem;
  flex-direction: column;
  border-radius: 9px;
  background-color: white;
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 9px;
  padding: 2rem 2rem 2rem 2rem;
`
export const CardTitle = styled.h1`
  font-size: 1rem;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 800;
  margin-bottom: 2rem;
`
export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`
export const SaveButton = styled.button`
  align-self: flex-end;
  border: solid 1px ${(props) => props.theme['yellow-700']};
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 800;
  font-family: 'Plus Jakarta Sans', sans-serif;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme['dark-900']};
  padding: 1rem 2.5rem;
  box-shadow: 0px 1px 3px rgba(129, 106, 3, 0.2);

  :hover {
    background-color: ${(props) => props.theme['yellow-600']};
    cursor: pointer;
  }
`
