import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-50']};
  border-radius: 8px;
  border: solid 1px #d2d2d2;
  display: flex;
  flex-direction: column;
`
