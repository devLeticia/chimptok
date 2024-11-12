import styled from 'styled-components'

export const ConsitencySummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.5rem;
  
  div {
    display: flex;
    flex-direction: column;
    flex-grow: 1; 
    
    p {
      font-size: 0.85rem;
      width: 100%;
      color: ${(props) => props.theme['gray-500']};
      font-weight: 700;
    }

    h1 {
      font-size: 1rem;
      color: ${(props) => props.theme['dark-900']};
      font-weight: 800;
    }
  }
`

export const NumberSpan = styled.span`
  font-weight: 800;
  font-size: 1.25rem;
`;