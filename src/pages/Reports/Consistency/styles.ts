import styled from 'styled-components'

export const ConsistencyContainer = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h1 {
      font-size: 1rem;
      color: ${(props) => props.theme['dark-900']};
      font-weight: 800;
    }

    select {
      border-radius: 20px;
      border: solid 1px ${(props) => props.theme['gray-300']};
      color: ${(props) => props.theme['gray-500']};
      padding: 0.5rem 1rem;
      option {
      }
    }
  }
`
