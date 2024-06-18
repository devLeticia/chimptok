import styled from 'styled-components'

export const ConsitencySummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    p {
      font-size: 0.85rem;
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
