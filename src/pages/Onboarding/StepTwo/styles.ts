import styled from 'styled-components'

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

export const SectionWrapper = styled.p`
  width: 100%;
  color: ${(props) => props.theme['dark-900']};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`
export const FeatureContainer = styled.div`
  background-color: ${(props) => props.theme['gray-100']};
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 6px;
  padding: 3rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-items: center;
  overflow: hidden;

  img {
    border-radius: 9px;
    margin-top: 2rem;
    margin-bottom: -10rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  }

  p {
    margin-top: 0.5rem;
  }
`

export const DiscriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 0.5rem;

  h1 {
    text-transform: uppercase;
    color: ${(props) => props.theme['dark-900']};
    font-style: italic;
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-weight: 900;
    font-size: 1.25rem;
    max-width: 200px;
  }
`
