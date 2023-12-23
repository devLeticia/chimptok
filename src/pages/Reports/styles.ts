import styled from 'styled-components'

export const ReportsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  hr {
    border: 0.5px solid ${(props) => props.theme['gray-150']};
  }
`
export const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  // *:not(hr) {
  //   flex-grow: 1;
  // }
`
