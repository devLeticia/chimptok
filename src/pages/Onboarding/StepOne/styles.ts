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
