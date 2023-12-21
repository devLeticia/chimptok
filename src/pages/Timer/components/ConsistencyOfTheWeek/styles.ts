import styled from 'styled-components'

export const ConsistencyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  p {
    font-size: 0.8rem;
    color: ${(props) => props.theme['gray-500']};
  }
`
export const LabelRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const WeekContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
