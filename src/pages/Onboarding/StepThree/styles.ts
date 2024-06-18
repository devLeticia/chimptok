import { CheckCircle } from 'phosphor-react'
import styled from 'styled-components'

export const OnboardingContainer = styled.div`
  background-color: ${(props) => props.theme['gray-100']};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Card = styled.div`
  margin: 2rem 0;
  min-width: 600px;
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem 4rem 4rem;
  max-width: 600px;
  background-color: white;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  color: white;
  border: solid 2px ${(props) => props.theme['gray-300']};
`

export const SuperHeader = styled.h1`
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme['dark-900']};
  font-style: italic;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 900;
  font-size: 2rem;
  margin-top: 2rem;
`
export const Subtitle = styled.p`
  font-size: 0.85rem;
  color: ${(props) => props.theme['dark-900']};
  margin: 0.5rem 0rem;
`

export const SessionLabel = styled.p`
  text-align: left;
  font-weight: 700;
  span {
    margin-left: 0.25rem;
    color: ${(props) => props.theme['gray-500']};
  }
`
export const SectionWrapper = styled.p`
  width: 100%;
  color: ${(props) => props.theme['dark-900']};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`
export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

export const Skip = styled.p`
  margin: 1rem 0;
  text-align: center;
  font-weight: 700;
  :hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${(props) => props.theme['yellow-600']};
  }
`

export const ProgressContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const ProgressWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`
export const StepProgress = styled.div`
  height: 0.35rem;
  width: 100%;
  border-radius: 30px;
  background-color: ${(props) => props.theme['blue-500']};
`

export const ProgressLabel = styled.div`
  color: ${(props) => props.theme['gray-500']};
  text-align: right;
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const SocialMediaItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;

  p {
    color: ${(props) => props.theme['dark-900']};
    font-size: 0.85rem;
    font-weight: 700;
  }
`

export const StyledCheckCircle = styled(CheckCircle)`
  color: ${(props) => props.theme['green-500']};
`
