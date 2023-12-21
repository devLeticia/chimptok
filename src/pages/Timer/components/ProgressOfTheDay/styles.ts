import styled from 'styled-components'

export const ProgressBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ProgressLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;

  p {
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
