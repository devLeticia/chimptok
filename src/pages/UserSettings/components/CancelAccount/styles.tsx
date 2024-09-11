import styled from 'styled-components'

export const Card = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  padding: 2rem;
  border: solid 2px ${(props) => props.theme['gray-300']};
  border-radius: 9px;
`

export const CardTitle = styled.h1`
  font-size: 1rem;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 800;
  margin-bottom: 1rem;
`
export const Container = styled.h1`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;

  p {
    font-size: 0.85rem;
    color: ${(props) => props.theme['gray-700']};
    font-weight: 500;
    line-height: 1.5;
  }

  TextArea {
    height: 10vh;
  }
`
export const Subtitle = styled.h2`
  font-size: 0.85rem;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 800;
  margin-bottom: 1rem;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 1rem;
  margin-top: 1rem;
`
export const NeverMindButton = styled.button`
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
  padding: 1rem 2rem;
  white-space: nowrap;

  :hover {
    background-color: ${(props) => props.theme['yellow-600']};
    cursor: pointer;
  }
`
export const DeleteAccountButton = styled.button`
  align-self: flex-end;
  border: 0;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 800;
  font-family: 'Plus Jakarta Sans', sans-serif;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['red-500']};
  color: ${(props) => props.theme['red-700']};
  padding: 1rem 2rem;
  white-space: nowrap;

  :hover {
    background-color: ${(props) => props.theme['red-300']};
    cursor: pointer;
  }
`
