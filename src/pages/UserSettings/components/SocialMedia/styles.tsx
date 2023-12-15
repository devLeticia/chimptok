import styled from 'styled-components'

export const Card = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  gap: 0.75rem;
  flex-direction: column;
  padding: 2rem;
  border: solid 2px ${(props) => props.theme['gray-300']};
  border-radius: 9px;
`
export const CardTitle = styled.h1`
  font-size: 1rem;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 800;
  margin-bottom: 1rem;
`

export const WhyToFollowContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font-size: 0.85rem;
    color: ${(props) => props.theme['dark-900']};
    font-weight: 800;
  }

  p {
    font-size: 0.85rem;
    color: ${(props) => props.theme['gray-500']};
    font-weight: 600;
  }
`

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  & > * {
    flex: 1;
    max-width: 50%;
  }
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
