import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};
  display: flex;
  gap: 1rem;

  span {
    font-family: 'Roboto Mono', monospace;
    font-weight: 700;
    background: ${(props) => props.theme['dark-900']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-weight: 700;
  padding: 2rem 0;
  color: ${(props) => props.theme['dark-900']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
