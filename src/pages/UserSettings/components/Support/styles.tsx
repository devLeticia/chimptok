import styled from 'styled-components'

export const Card = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: solid 1px ${(props) => props.theme['gray-300']};
  border-radius: 9px;
  gap: 1rem;
`
export const CardTitle = styled.h1`
  font-size: 1rem;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 800;
`
export const SupportContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 2rem;
`

export const ReportButton = styled.button`
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

export const SupportText = styled.p`
  font-size: 0.85rem;
  color: ${(props) => props.theme['gray-700']};
  font-weight: 500;
  line-height: 1.5;
`
