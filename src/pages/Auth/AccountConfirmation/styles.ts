import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  font-style: italic;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 900;
  font-family: 'Barlow Semi Condensed', sans-serif;
`

export const Subtitle = styled.h1`
  font-size: 0.95rem;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 600;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
`
