import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
`

export const NewCycleCTA = styled.h1`
  //text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme['dark-900']};
  font-style: italic;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
`

export const MinutesOptionsContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`
