import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
`

export const CtaContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h1 {
    text-transform: uppercase;
    text-align: center;
    color: ${(props) => props.theme['dark-900']};
    font-style: italic;
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-weight: 900;
    font-size: 1.15rem;
  }
`

export const MinutesOptionsContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`
export const UnlimitedDisclaimer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`
