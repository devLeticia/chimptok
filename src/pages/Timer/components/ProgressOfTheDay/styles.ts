import styled from 'styled-components'

export const ProgressBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-items: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  p {
    display: block;
    white-space: nowrap;
    font-size: 0.8rem;
    color: ${(props) => props.theme['gray-500']};
  }
`

export const ProgressBar = styled.div`
  height: 0.75rem;
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 9px;

  div {
    height: 100%;
    border-radius: 9px;
    width: 0.75rem;
    background-color: ${(props) => props.theme['blue-500']};
  }
`
