import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  background-size: cover;
`
export const RouterContainer = styled.div`
  margin-top: 5rem;
  padding: 2.5rem;
  width: 769px;
`

export const Copyright = styled.p`
  text-align: center;
  font-size: 0.65rem;
  margin-top: 1rem;
  color: ${(props) => props.theme['gray-300']};

`