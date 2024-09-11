import styled from 'styled-components'

export const ProgressBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

`

export const LabelContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex: 1;
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
