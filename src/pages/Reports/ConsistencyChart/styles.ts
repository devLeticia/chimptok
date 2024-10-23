import styled from 'styled-components'

export const ReportsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 1rem;
`

export const ChartSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 0rem 2rem;
  border: solid 1px ${(props) => props.theme['gray-300']};
  border-radius: 9px;
`
export const SessionTitle = styled.h1`
  font-size: 1rem;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 800;
`
