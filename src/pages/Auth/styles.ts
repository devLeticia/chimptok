import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme['gray-150']};
  display: flex;
  flex-direction: row;
  overflow: hidden;
  & > * {
    flex: 1;
  }
`

export const AuthThemeCard = styled.div`
  height: 100%;

  img {
    height: auto; /* Maintain the aspect ratio */
    left: 0%;
    height: 100%;
  }

  h1 {
    font-size: 4rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['dark-900']};
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-weight: 900;
    font-style: italic;
    letter-spacing: 0.05rem;
    line-height: 0.9;
  }
`

export const AuthCard = styled.div`
  padding: 2rem;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`

export const ContentContainer = styled.div`
  max-width: 450px;
  flex-grow: 1;
  gap: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: auto;
`

export const ChimptokLogotype = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-style: italic;
  color: ${(props) => props.theme['dark-900']};
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 900;
  letter-spacing: 0.05rem;
`
