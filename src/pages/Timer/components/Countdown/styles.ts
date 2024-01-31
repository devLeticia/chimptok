import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['dark-900']};
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  span {
    font-family: 'Roboto Mono', monospace;
    font-weight: 700;
    background: ${(props) => props.theme['gray-200']};
    padding: 1.8rem 1rem;
    border-radius: 8px;
    border: solid 1px ${(props) => props.theme['gray-300']};
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

export const ActiveCycleDescription = styled.h1`
  text-align: center;
  font-size: 0.95rem;
  font-weight: 500;
  color: ${(props) => props.theme['dark-800']};

  span {
    font-weight: 800;
  }
`
